import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OpenInMapsActionSheet from '../components/OpenInMapsActionSheet';
import AppInstalledChecker from '../utils/AppInstalledChecker';

export default class SupportedMapsContainer extends PureComponent {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    placeDetail: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      apps: [],
    };
  }

  componentDidMount() {
    AppInstalledChecker.getSupportedMapApps().then((apps) => {
      this.setState({ apps });
    });
  }

  onPress = (index) => {
    if (this.state.apps[index]) {
      AppInstalledChecker.open(this.state.apps[index].url,
        this.props.placeDetail.address);
    }
    this.props.onClose();
  }

  render() {
    return (
      <OpenInMapsActionSheet
        apps={this.state.apps.map(app => app.title)}
        onPress={this.onPress}
        {...this.props}
      />
    );
  }
}
