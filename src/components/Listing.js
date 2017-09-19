import React, { PureComponent, PropTypes } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { List, ListItem, Avatar } from 'react-native-elements';
import { requireImage } from '../constants/Images';

export default class Listing extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    currentLocation: PropTypes.number.isRequired,
    tourId: PropTypes.number.isRequired,
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
        renderItem={({ item }) => (
          <ListItem
            avatar={requireImage(this.props.tourId, item.thumbnail)}
            avatarStyle={styles.avatarStyle}
            title={item.name}
            titleStyle={styles.titleStyle}
            subtitle={item.short_address}
            subtitleStyle={styles.subtitleStyle}
            onPress={() => onPress(item)}
            containerStyle={styles.listItem}
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
  avatarStyle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitleStyle: {
    fontWeight: '100',
    fontSize: 14,
  },
});
