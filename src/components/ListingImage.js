import React, { PureComponent, PropTypes } from 'react';
import { Tile } from 'react-native-elements';

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
