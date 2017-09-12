import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Modal, ListView } from 'react-native';
import ActionSheet from 'react-native-actionsheet';

const CANCEL_INDEX = 0;

export default class OpenInMapsActionSheet extends Component {
  static propTypes = {
    apps: PropTypes.array,
    open: PropTypes.bool,
    title: PropTypes.string,
  }

  static defaultProps = {
    apps: [],
    open: false,
    title: 'Open Location',
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      cancelIndex: props.apps.length,
    };
  }

  handlePress = () => {

  }

  componentDidMount() {
    if (this.props.open && this.ActionSheet) {
      this.ActionSheet.show();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ cancelIndex: nextProps.apps.length });
    if (nextProps.open && !this.props.open && this.ActionSheet) {
      this.ActionSheet.show();
    }
  }

  getOptions = () => {
    return [
      ...this.props.apps,
      'Cancel',
    ];
  }

  render() {
    if (!this.props.apps.length) {
      return null;
    }

    return (
      <View>
        <ActionSheet
          ref={(o) => {
            this.ActionSheet = o;
            if (this.props.open) {
              o.show();
            }
          }}
          cancelButtonIndex={this.state.cancelIndex}
          title={this.props.title}
          options={this.getOptions()}
          onPress={this.handlePress}
        />
      </View>
    );
  }
}
