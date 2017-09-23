import React, { PureComponent, PropTypes } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import {
  CYAN_BORDER,
} from '../constants/colorConstants';

export default class Listing extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
  };

  static defaultProps = {

  };

  render() {
    const {
      list,
      onPress,
    } = this.props;

    return (
      <List containerStyle={styles.container}>
        <FlatList
          data={list}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={item.name}
              rightTitle={item.completed ? "Complete" : null}
              rightTitleStyle={styles.complete}
              onPress={() => onPress(item)}
              containerStyle={styles.listItem}
            />
          )}
        />
      </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#cbd2d9',
  },
  complete: {
    color: CYAN_BORDER,
    fontWeight: 'bold',
  }
});
