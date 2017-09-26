import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CYAN_BORDER } from '../constants/colorConstants';

export default class IndexHeader extends PureComponent {
  static propTypes = {

  }

  static defaultProps = {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          San Francisco
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
    flex: 1,
    paddingLeft: 20,
    paddingTop: 50,
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
