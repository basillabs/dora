import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';

class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.place.detail,
  })

  render() {
    return (
      <View style={styles.container}>
        <Text>Place detail</Text>
        <Card />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default DetailScreen;
