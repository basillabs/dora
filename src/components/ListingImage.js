import React, { PureComponent } from 'react';
import { Tile } from 'react-native-elements';


export default class ListingImage extends PureComponent {
  static propTypes = {

  }

  static defaultProps = {

  }

  render() {
    return (
      <Tile
        imageSrc={{ uri: 'http://via.placeholder.com/350x350' }}
      />
    );
  }
}
