import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import { requireImage } from '../constants/Images';

export default class Card extends PureComponent {
  static propTypes = {}
  static defaultProps = {}

  render() {
    const {
      imageName,
      title,
    } = this.props;
    return (
      <Tile
        imageSrc={requireImage(imageName)}
        title={title}
        featured
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderWidth: 1,
  },
});
