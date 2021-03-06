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

  constructor(props) {
    super(props);
    this.debounceTime = 0;
  }

  onPress = index => () => {
    const currTime = new Date().getTime();

    if (this.debounceTime + 1000 > currTime) {
      return;
    }

    this.debounceTime = currTime;

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

    const renderItems = imageList.map((image, i) => ({
      key: i,
      image,
    }));

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
    borderRadius: 5,
  },
});

export default CarouselList;
