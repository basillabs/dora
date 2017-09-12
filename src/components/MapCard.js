import React, { PureComponent } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import { requireImage } from '../constants/Images';
import connectActionSheet from '@expo/react-native-action-sheet';

export default class MapCard extends PureComponent {
  static propTypes = {}
  static defaultProps = {}

  render() {
    const {
      imageName,
      title,
    } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={this.openMapActionSheet}
      >
        <View>
          <Text>Open in Maps</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  openMapActionSheet() {
    let options = ['opt1', 'opt2', 'opt3'];
    let destructiveButtonIndex = 0;
    let cancelButtonIndex = 2;
    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      buttonIndex => {
        // Do something
      }
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderWidth: 1,
  },
});
