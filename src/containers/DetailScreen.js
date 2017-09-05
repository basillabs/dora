import React, { Component } from 'react';
import {
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
    // TODO: do it properly with a lightbox or something
    if (!carousel) {
      return;
    }
    return carousel.map((image) => {
        return (
          <Image
            source={requireImage(image)}
          />
        )
    });
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
  }
});

export default DetailScreen;
