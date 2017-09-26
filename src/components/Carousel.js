import React, { PureComponent } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { requireImage } from '../constants/Images';

class CarouselList extends PureComponent {

  static propTypes = {
    tourId: PropTypes.number.isRequired,
    imageList: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  onPress = (index) => () => {
    const {
      tourId,
      imageList,
    } = this.props;
    this.props.navigation.navigate('Lightbox', {
      tourId,
      imageList,
      index,
    });
  }

  render() {
    const {
      tourId,
      imageList,
    } = this.props;
    const renderItems = imageList.map((image, i) => {
        return {
            key: i,
            image: image,
        };
    });

    return (
      <FlatList
        style={styles.carouselContainer}
        data={renderItems}
        renderItem={({ item }) =>
          <TouchableHighlight onPress={this.onPress(item.key)}>
            <Image
              style={styles.carouselImage}
              source={requireImage(tourId, item.image)}
            />
          </TouchableHighlight>
        }
        horizontal
      />
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginLeft: 20,
  },
  carouselImage: {
    height: 80,
    width: 120,
    marginRight: 20,
  },
});

export default CarouselList;
