import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';

class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.place.detail,
  });

  static defaultProps = {
  };

  render() {
    console.log(this.props);
    const {
      name,
      short_address,
      googleMapsParameter,
      locationImage,
      thumbnail,
      details,
    } = this.props.navigation.state.params.place;
    return (
      <View style={styles.container}>
        <Card
          imageName={locationImage}
          title={name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default DetailScreen;
