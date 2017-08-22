import React, { PureComponent, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import Listing from '../components/Listing';
import ListingImage from '../components/ListingImage';

export default class IndexScreen extends PureComponent {
  static navigationOptions = {
    title: 'Index',
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  onPress = (place) => {
    this.props.navigation.navigate('Detail', { place });
  }

  render() {
    return (
      <View style={styles.container}>
        <ListingImage />
        <Listing
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
