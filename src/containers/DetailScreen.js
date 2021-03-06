import React, { PureComponent } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import CarouselList from '../components/Carousel';
import TaskList from '../components/TaskList';
import ToggleLocationButton from '../components/ToggleLocationButton';
import { requireImage } from '../constants/Images';
import SupportedMapsContainer from './SupportedMapsContainer';
import {
  BLACK_MESSAGE,
  BLACK_TITLE,
  CYAN_THEME,
  WHITE_BACKGROUND,
} from '../constants/colorConstants';
import toggleLocation from '../actions/locationListActions';

function renderCarousel(carousel, tourId, navigation) {
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

function renderTasks(tasks) {
  if (!tasks) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}>Tasks</Text>
      <View style={styles.halfBorder} />
      <TaskList taskList={tasks} />
    </View>
  );
}

function renderDetails(details, tourId, navigation) {
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
      {renderCarousel(detail.carousel, tourId, navigation)}
      {renderTasks(detail.tasks)}
    </View>
  ));
}

function mapStateToProps(state) {
  return {
    locationId: state.locationReducer.locationId,
    list: state.locationListReducer.locations,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleLocation: locationId => dispatch(toggleLocation(locationId)),
  };
}

class DetailScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.place.detail,
    headerTintColor: '#000',
  });

  constructor(props) {
    super(props);

    this.state = {
      displayingDirectionMenu: false,
    };
  }

  onDirectionsPress = () => {
    this.setState({
      displayingDirectionMenu: !this.state.displayingDirectionMenu,
    });
  }

  onDirectionsMenuClose = () => {
    this.setState({
      displayingDirectionMenu: false,
    });
  }

  render() {
    const {
      details,
      locationImage,
      mapImage,
      googleMapsParameter,
      name,
    } = this.props.navigation.state.params.place;

    const tourId = this.props.navigation.state.params.tourId;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Card
          imageName={locationImage}
          tourId={tourId}
          title={name}
        />
        {renderDetails(details, tourId, this.props.navigation)}
        <TouchableHighlight onPress={this.onDirectionsPress}>
          <Image
            style={styles.directionsButton}
            source={requireImage(tourId, mapImage)}
          />
        </TouchableHighlight>
        <SupportedMapsContainer
          placeDetail={googleMapsParameter}
          open={this.state.displayingDirectionMenu}
          onClose={this.onDirectionsMenuClose}
        />
        <View style={styles.marginUnderMap} />
        <ToggleLocationButton {...this.props} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE_BACKGROUND,
    flexDirection: 'column',
    paddingBottom: 60,
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
    backgroundColor: CYAN_THEME,
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
  directionsButton: {
    width: '100%',
    height: 150,
  },
  marginUnderMap: {
    marginBottom: 20,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
