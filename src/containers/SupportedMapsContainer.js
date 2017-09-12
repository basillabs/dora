import React, { PureComponent } from 'react';
import OpenInMapsActionSheet from '../components/OpenInMapsActionSheet';
import AppInstalledChecker from '../utils/AppInstalledChecker';

export default class SupportedMapsContainer extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      apps: [],
    };
  }

  componentDidMount() {
    AppInstalledChecker.getSupportedMapApps().then((apps) => {
      const mapAppTitles = apps.map(app => app.title);
      this.setState({ apps: mapAppTitles });
    });
  }

  render() {
    return (
      <OpenInMapsActionSheet apps={this.state.apps} {...this.props} />
    );
  }
}
