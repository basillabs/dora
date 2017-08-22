import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Card extends PureComponent {
  static propTypes = {}
  static defaultProps = {}

  render() {
    return (
      <View style={styles.container}>
        <Text>Card</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderWidth: 1,
  },
});
