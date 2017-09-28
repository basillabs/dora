import { Platform, Linking } from 'react-native';

const Google = {
  title: 'Open in Google Maps',
  url: 'https://www.google.com/maps/search/',
};
// https://developers.google.com/waze/api/
const Waze = {
  title: 'Open in Waze Maps',
  url: 'waze://',
};
// https://developer.apple.com/library/content/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
const Apple = {
  title: 'Open in Apple Maps',
  url: 'http://maps.apple.com/',
};

const mapApps = [
  ...(Platform.OS === 'ios' ? [Apple] : []),
  Google,
  Waze,
];

function checkApps() {
  return Promise.all(mapApps.map((map) => {
    return new Promise((resolve) => {
      Linking.canOpenURL(map.url)
      .then(isInstalled => {
        if (isInstalled) {
          resolve(map);
        } else {
          resolve(false);
        }
      });
    });
  }));
}

export default class AppInstalledChecker {
  static getSupportedMapApps() {
    return checkApps().then(values => {
      return values.filter(e => !!e);
    });
  }

  static open(url, address) {
    Linking.openURL(`${url}?q=${address}`);
  }
}
