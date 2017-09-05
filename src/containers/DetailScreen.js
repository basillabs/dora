import React, { Component } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../components/Card';
import { requireImage } from '../constants/Images';
import {
  BACKGROUND,
  BLACK_MESSAGE,
  BLACK_TITLE,
  CYAN,
} from '../constants/colorConstants';

class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.place.detail,
  });

  renderCarousel(carousel) {
    if (!carousel) {
      return;
    }
    images = carousel.map((image) => {
      return { key: image };
    });
    return (
      <FlatList
        style={styles.carouselContainer}
        data={images}
        renderItem={({item}) =>
          <Image style={styles.carouselImage}
            source={requireImage(item.key)}
          />
        }
        horizontal
      />
    );
  }

  renderDetails(details) {
    return details.map((detail) => {
      return (
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>
            {detail.title}
          </Text>
          <View style={styles.halfBorder} />
          <Text style={styles.text}>
            {detail.text}
        </Text>
          {this.renderCarousel(detail.carousel)}
        </View>
      )
    });
  }

  render() {
    const {
      name,
      short_address,
      googleMapsParameter,
      locationImage,
      thumbnail,
      details,
    } = this.props.navigation.state.params.place;

    return (
      <View style={styles.container}>
        <Card
          imageName={locationImage}
          title={name}
        />
        {this.renderDetails(details)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND,
    flex: 1,
  },
  detailsContainer: {
    marginTop: 20,
  },
  title: {
    color: BLACK_TITLE,
    fontSize: 24,
    lineHeight: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  halfBorder: {
    backgroundColor: CYAN,
    width: 40,
    height: 2,
    marginLeft: 20,
    marginTop: 4,
  },
  text: {
    color: BLACK_MESSAGE,
    fontSize: 16,
    lineHeight: 20,
    margin: 20,
  },
  carouselContainer: {
    marginLeft: 20,
  },
  carouselImage: {
    height: 80,
    width: 120,
    marginRight: 20,
  },
});

export default DetailScreen;
