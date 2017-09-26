import React, { PureComponent } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import CarouselList from '../components/Carousel';
import ToggleLocationButton from '../components/ToggleLocationButton';
import { requireImage } from '../constants/Images';
import SupportedMapsContainer from './SupportedMapsContainer';
import {
  BLACK_MESSAGE,
  BLACK_TITLE,
  CYAN_BORDER,
  WHITE_BACKGROUND,
} from '../constants/colorConstants';
import { toggleLocation } from '../actions/locationListActions';

function mapStateToProps(state) {
  return {
    locationId: state.locationReducer.locationId,
    list: state.locationListReducer.locations,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleLocation: (locationId) => dispatch(toggleLocation(locationId)),
  };
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

  renderCarousel(carousel, tourId, navigation) {
    if (!carousel) {
      return null;
    }
    return (
      <CarouselList
        tourId={tourId}
        imageList={carousel}
        navigation={navigation}
      />
    );
  }

  renderDetails(details, tourId, navigation) {
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
        {this.renderCarousel(detail.carousel, tourId, navigation)}
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

    const tourId = this.props.navigation.state.params.tourId;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Card
          imageName={locationImage}
          tourId={tourId}
          title={name}
        />
        {this.renderDetails(details, tourId, this.props.navigation)}
        <TouchableHighlight onPress={this.onNavigationPress}>
          <Image
            style={styles.directionsButton}
            source={require('../data/tours/tour_0/images/location_0.png')}
          />
        </TouchableHighlight>
        <SupportedMapsContainer
          placeDetail={googleMapsParameter}
          open={this.state.displayingDirectionMenu}
          onClose={this.onNavigationMenuClose}
        />
        <ToggleLocationButton {...this.props} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE_BACKGROUND,
    flexDirection: 'column',
    paddingBottom: 20,
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
  directionsButton: {
    marginBottom: 20,
    width: '100%',
    height: 150,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
