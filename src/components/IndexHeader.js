import React, { PureComponent, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CYAN_BORDER } from '../constants/colorConstants';

export default class IndexHeader extends PureComponent {
  static propTypes = {
    tourName: PropTypes.string.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.tourName}
        </Text>
        <Text style={styles.subtitle}>
          Praylist by Kevin Kim
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: CYAN_BORDER,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
  }
});
