import React, { PureComponent, PropTypes } from 'react';
import { View, Button } from 'react-native';

export default class IndexScreen extends PureComponent {
  static navigationOptions = {
    title: 'Index',
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  onPress = () => {
    this.props.navigation.navigate('Detail');
  }

  render() {
    return (
      <View>
        <Button onPress={this.onPress} title="Go to detail" />
      </View>
    );
  }
}
