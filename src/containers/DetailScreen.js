import React, { PureComponent } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import { requireImage } from '../constants/Images';
import SupportedMapsContainer from './SupportedMapsContainer';
import {
  BLACK_MESSAGE,
  BLACK_TITLE,
  CYAN_BORDER,
  WHITE_BACKGROUND,
} from '../constants/colorConstants';

function renderCarousel(carousel) {
  if (!carousel) {
    return null;
  }
  const images = carousel.map(image => ({ key: image }));

  return (
    <FlatList
      style={styles.carouselContainer}
      data={images}
      renderItem={({ item }) =>
        <Image
          style={styles.carouselImage}
          source={requireImage(item.key)}
        />
      }
      horizontal
    />
  );
}

class DetailScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.place.detail,
  });

  constructor(props) {
    super(props);

    this.state = {
      displayingDirectionMenu: false,
    };
  }

  onNavigationPress = () => {
    this.setState({
      displayingDirectionMenu: !this.state.displayingDirectionMenu,
    });
  }

  onNavigationMenuClose = () => {
    this.setState({
      displayingDirectionMenu: false,
    });
  }

  renderDetails(details) {
    return details.map(detail => (
      <View
        key={detail.title}
        style={styles.detailsContainer}
      >
        <Text style={styles.title}>
          {detail.title}
        </Text>
        <View style={styles.halfBorder} />
        <Text style={styles.text}>
          {detail.text}
        </Text>
        {renderCarousel(detail.carousel)}
      </View>
    ));
  }

  render() {
    const {
      details,
      locationImage,
      googleMapsParameter,
      name,
    } = this.props.navigation.state.params.place;

    return (
      <ScrollView style={styles.container}>
        <Card
          imageName={locationImage}
          title={name}
        />
        {this.renderDetails(details)}
        <Button
          title="Directions"
          onPress={this.onNavigationPress}
        />
        <SupportedMapsContainer
          placeDetail={googleMapsParameter}
          open={this.state.displayingDirectionMenu}
          onClose={this.onNavigationMenuClose}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE_BACKGROUND,
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
    backgroundColor: CYAN_BORDER,
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
