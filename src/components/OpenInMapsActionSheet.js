import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import ActionSheet from 'react-native-actionsheet';

export default class OpenInMapsActionSheet extends Component {
  static propTypes = {
    apps: PropTypes.array,
    open: PropTypes.bool,
    title: PropTypes.string,
    onPress: PropTypes.func.isRequired,
  }

  static defaultProps = {
    apps: [],
    open: false,
    title: 'Open Location',
  }

  constructor(props, context) {
    super(props, context);
    this.cancelIndex = props.apps.length;
  }


  componentDidMount() {
    if (this.props.open && this.actionSheet) {
      this.actionSheet.show();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.cancelIndex = nextProps.apps.length;
    if (nextProps.open && !this.props.open && this.actionSheet) {
      this.actionSheet.show();
    }
  }

  componentWillUnmount() {
    this.actionSheet = null;
  }

  getOptions = () =>
    [
      ...this.props.apps,
      'Cancel',
    ];

  handlePress = (index) => {
    this.props.onPress(index);
  }

  render() {
    if (!this.props.apps.length) {
      return null;
    }

    return (
      <View>
        <ActionSheet
          ref={(o) => { this.actionSheet = o; }}
          cancelButtonIndex={this.cancelIndex}
          title={this.props.title}
          options={this.getOptions()}
          onPress={this.handlePress}
        />
      </View>
    );
  }
}
