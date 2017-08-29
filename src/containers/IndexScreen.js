import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import Listing from '../components/Listing';
import ListingImage from '../components/ListingImage';

const mapStateToProps = state => ({
  list: state.locationListReducer.locations,
});


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
  }

  render() {
    return (
      <View style={styles.container}>
        <ListingImage />
        <Listing
          list={this.props.list}
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
