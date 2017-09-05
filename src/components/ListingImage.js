import React, { PureComponent, PropTypes } from 'react';
import { Tile } from 'react-native-elements';
import { Image, View, StyleSheet } from 'react-native';

export default class ListingImage extends PureComponent {
  static propTypes = {
    currentLocation: PropTypes.number.isRequired,
    tourRequireImage: PropTypes.func.isRequired,
  }

  static defaultProps = {

  }

  render() {
    return (
      <Tile
        featured
        imageSrc={this.props.tourRequireImage(`location_${this.props.currentLocation}.png`)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderWidth: 2,
    height: 200
  },
});
