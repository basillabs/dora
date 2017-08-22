import React, { PureComponent, PropTypes } from 'react';
import { View } from 'react-native';
import Listing from '../components/Listing';

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
      <View>
        <Listing
          onPress={this.onPress}
        />
      </View>
    );
  }
}
