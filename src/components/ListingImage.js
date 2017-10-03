import React, { PureComponent, PropTypes } from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

import { Tile } from 'react-native-elements';
import { requireImage } from '../constants/Images';

export default class ListingImage extends PureComponent {
  static propTypes = {
    currentLocation: PropTypes.number.isRequired,
    tourRequireImage: PropTypes.func.isRequired,
  }

  static defaultProps = {

  }

  render() {
    return (
      <Image
        style={styles.imageStyle}
        source={requireImage(0, 'location_global')}
      />
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 200,
  },
});
