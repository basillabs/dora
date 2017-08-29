import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Store from './Store';
import BaseNavigation from './Router';

import bootstrapStore from './bootstrapStore';

class App extends Component {
  constructor(props) {
    super(props);

    this.store = null;
  }

  componentWillMount() {
    this.store = Store();
    bootstrapStore(this.store.dispatch, this.props);
  }

  render() {
    return (
      <Provider store={this.store}>
        <BaseNavigation />
      </Provider>
    );
  }
}

export default App;
