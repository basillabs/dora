import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, ScrollView, StyleSheet, Text, Image } from 'react-native';
import Listing from '../components/Listing';
import ListingImage from '../components/ListingImage';
import { setLocation } from '../actions/locationActions';
import { requireImage } from '../constants/Images';
import {
  CYAN_THEME,
} from '../constants/colorConstants';

const mapStateToProps = state => ({
  list: state.locationListReducer.locations,
  currentLocation: state.tourReducer.currentLocation,
  tourId: state.tourReducer.tourId,
  tourName: state.tourReducer.tourName,
});

function mapDispatchToProps(dispatch) {
  return {
    setLocation: (locationId) => dispatch(setLocation(locationId)),
  };
}

class IndexScreenContainer extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    list: PropTypes.array.isRequired,
    currentLocation: PropTypes.number.isRequired,
    tourId: PropTypes.number.isRequired,
  }

  static navigationOptions = () => ({
    headerLeft: 
      <Image source={requireImage(0, 'headerImage')}>
        <Text style={styles.headerText}>San Francisco</Text>
      </Image>,
    headerStyle: {
      backgroundColor: CYAN_THEME,
    },
  });

  onPress = (place) => {
    const tourId = this.props.tourId;
    this.props.navigation.navigate('Detail', { place, tourId });
    this.props.setLocation(place.id);
  }

  tourRequireImage = imageName => requireImage(this.props.tourId, imageName);

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content"/>
        <ListingImage
          currentLocation={this.props.currentLocation}
          tourRequireImage={this.tourRequireImage}
        />
        <ScrollView >
          <Listing
            currentLocation={this.props.currentLocation}
            list={this.props.list}
            tourRequireImage={this.tourRequireImage}
            onPress={this.onPress}
            tourId={this.props.tourId}
            {...this.props}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 20,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexScreenContainer);
