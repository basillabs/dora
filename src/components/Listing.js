import React, { PureComponent, PropTypes } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class Listing extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    currentLocation: PropTypes.number.isRequired,
  };

  static defaultProps = {

  };

  render() {
    const {
      list,
      onPress,
    } = this.props;

    return (
      <FlatList
        data={list}
        keyExtractor={item => item.name}
        containerStyle={styles.container}
        renderItem={({ item, index }) => (
          <ListItem
            roundAvatar
            title={item.name}
            onPress={() => onPress(item)}
            containerStyle={[
              styles.listItem,
              this.props.currentLocation > index && styles.completed,
            ]}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },

  completed: {
    backgroundColor: 'gray',
  },

  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#cbd2d9',
    backgroundColor: 'white',
  },
});
