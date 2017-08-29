# React Native Boilerplate
Simple react-native boilerplate for mobile development.

## Getting Started
1. Ensure you've followed the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html)
1. Clone this project `git clone https://github.com/pcofilada/react-native-boilerplate.git`

## Installation

1. Install [node.js](https://nodejs.org)
2. Install Xcode and run it once to install command line tools
3. Install React Native's CLI (`npm install -g react-native-cli`)
4. Install project dependencies

```bash
npm install
```

Or (optional) install and use [yarn](https://yarnpkg.com) for faster package management

```bash
yarn install
```

5. Start the app in [an emulator](/docs/quick-tips.md#running-in-an-emulator)

```bash
npm run ios
```

```bash
npm run android
```

## Stack
- [React Native](https://facebook.github.io/react-native/) for building mobile apps using Javascript
- [Redux](http://rackt.github.io/redux/index.html) a predictable state container for Javascript apps
- [Redux Thunk](https://github.com/gaearon/redux-thunk) middleware for Redux
- [Babel](http://babeljs.io/) for ES6+ support
- [React Navigation](https://github.com/react-community/react-navigation) navigation for React Native

## File Structure
- `/android` - Android native stuff
- `/ios` - iOS native stuff
- `/src` - Contains our React Native App codebase
  - `/actions` - Action Types and Action Creators
  - `/assets` - Images, Fonts and others
  - `/components` - Dumb components
    - `/common` - Shared components
  - `/config` - Config files
  - `/containers` - Smart components
  - `/reducers` - Reducers
  - `/utils` - Helpers
  - `/App.js` - Base component
  - `/Router.js` - App navigation
  - `/Store.js` - Store
