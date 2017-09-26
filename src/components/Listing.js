import React, { PureComponent, PropTypes } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { CYAN_BORDER } from '../constants/colorConstants';
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
            rightTitle={item.completed ? "Complete" : null}
            rightTitleStyle={styles.complete}
            subtitle={item.short_address}
            subtitleStyle={styles.subtitleStyle}
            onPress={() => onPress(item)}
            containerStyle={styles.listItem}
            hideChevron
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
    borderBottomColor: '#eee',
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
  complete: {
    color: CYAN_BORDER,
    fontWeight: 'bold',
  }
});
