import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import Listing from '../components/Listing';
import ListingImage from '../components/ListingImage';
import TourSummary from '../components/TourSummary';
import { requireImage } from '../constants/Images';

const mapStateToProps = state => ({
  list: state.locationListReducer.locations,
  currentLocation: state.tourReducer.currentLocation,
  tourId: state.tourReducer.tourId,
});

class IndexScreen extends PureComponent {
  static navigationOptions = {
    title: 'Index',
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    list: PropTypes.array.isRequired,
    tourId: PropTypes.numeric.isRequired,
    currentLocation: PropTypes.numeric.isRequired,
  }

  onPress = (place) => {
    this.props.navigation.navigate('Detail', { place });
  }

  tourRequireImage = (imageName) => {
    requireImage(`tour_${this.props.tourId}/${imageName}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <ListingImage
          currentLocation={this.props.currentLocation}
          tourRequireImage={this.tourRequireImage}
        />
        <TourSummary />
        <Listing
          list={this.props.list}
          tourRequireImage={this.tourRequireImage}
          onPress={this.onPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps)(IndexScreen);
