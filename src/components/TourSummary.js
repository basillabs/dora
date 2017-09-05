import React, { PureComponent, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TourSummary extends PureComponent {
  static propTypes = {

  }

  static defaultProps = {

  }

  render() {
    return (
      <View containerStyle={styles.container}>
        <Text>Tour Summary!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderWidth: 2
  },
});
