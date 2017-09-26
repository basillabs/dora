import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import IndexHeader from '../components/IndexHeader';
import Listing from '../components/Listing';
import ListingImage from '../components/ListingImage';
import { setLocation } from '../actions/locationActions';
import { requireImage } from '../constants/Images';

const mapStateToProps = state => ({
  list: state.locationListReducer.locations,
  currentLocation: state.tourReducer.currentLocation,
  tourId: state.tourReducer.tourId,
});

function mapDispatchToProps(dispatch) {
  return {
    setLocation: (locationId) => dispatch(setLocation(locationId)),
  };
}

class IndexScreenContainer extends PureComponent {
  static navigationOptions = {
    header: null
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    list: PropTypes.array.isRequired,
    currentLocation: PropTypes.number.isRequired,
    tourId: PropTypes.number.isRequired,
  }

  onPress = (place) => {
    const tourId = this.props.tourId;
    this.props.navigation.navigate('Detail', { place, tourId });
    this.props.setLocation(place.id);
  }

  tourRequireImage = imageName => requireImage(this.props.tourId, imageName);

  render() {
    return (
      <ScrollView style={styles.container}>
        <IndexHeader />
        <ListingImage
          currentLocation={this.props.currentLocation}
          tourRequireImage={this.tourRequireImage}
        />
        <Listing
          currentLocation={this.props.currentLocation}
          list={this.props.list}
          tourRequireImage={this.tourRequireImage}
          onPress={this.onPress}
          tourId={this.props.tourId}
          {...this.props}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexScreenContainer);
