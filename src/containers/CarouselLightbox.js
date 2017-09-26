import React, { PureComponent } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { BLACK_BACKGROUND } from '../constants/colorConstants';
import { requireImage } from '../constants/Images';

class CarouselLightbox extends PureComponent {

  componentDidMount() {
    setTimeout(() => {
      this._scrollView.scrollTo({
        x: dim.width * this._initialIndex,
        y: 0,
        animated: false,
      });
    }, 0);
  }

  render() {
    const {
      tourId,
      imageList,
      index,
    } = this.props.navigation.state.params;
    this._initialIndex = index;
    const imageElements = imageList.map((image, i) => {
      return (
        <Image
          key={i}
          source={requireImage(tourId, image)}
          resizeMode={"contain"}
          style={styles.image}
        />
      )
    });
    return (
      <ScrollView
        ref={scrollView => this._scrollView = scrollView}
        contentContainerStyle={styles.scrollContainer}
        horizontal
        pagingEnabled
        style={styles.scroll}
      >
        {imageElements}
      </ScrollView>
    );
  }
}

const dim = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: dim.width,
  },
  scroll: {
    backgroundColor: BLACK_BACKGROUND,
    width: dim.width,
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CarouselLightbox;
