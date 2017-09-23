import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import Listing from '../components/Listing';
import ListingImage from '../components/ListingImage';
import { setLocation } from '../actions/locationActions';

function mapStateToProps(state) {
  return {
    list: state.locationListReducer.locations,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLocation: (locationId) => dispatch(setLocation(locationId)),
  };
}

class IndexScreen extends PureComponent {
  static navigationOptions = {
    title: 'Index',
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    list: PropTypes.array.isRequired,
  }

  onPress = (place) => {
    this.props.navigation.navigate('Detail', { place });
    this.props.setLocation(place.id);
  }

  render() {
    return (
      <View style={styles.container}>
        <ListingImage />
        <Listing
          list={this.props.list}
          onPress={this.onPress}
          {...this.props}
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

export default connect(mapStateToProps, mapDispatchToProps)(IndexScreen);
