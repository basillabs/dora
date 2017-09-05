import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../components/Card';
import { requireImage } from '../constants/Images';

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
        <View>
          <Text>{detail.title}</Text>
          <Text>{detail.text}</Text>
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
  container: {},
});

export default DetailScreen;
