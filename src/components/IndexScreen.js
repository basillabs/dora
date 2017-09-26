import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import IndexHeader from '../components/IndexHeader';
import Listing from '../components/Listing';
import ListingImage from '../components/ListingImage';
import { requireImage } from '../constants/Images';

const mapStateToProps = state => ({
  list: state.locationListReducer.locations,
  currentLocation: state.tourReducer.currentLocation,
  tourId: state.tourReducer.tourId,
});

class IndexScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    list: PropTypes.array.isRequired,
    tourId: PropTypes.number.isRequired,
    currentLocation: PropTypes.number.isRequired,
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
        <IndexHeader />
        <ListingImage
          currentLocation={this.props.currentLocation}
          tourRequireImage={this.tourRequireImage}
        />
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
