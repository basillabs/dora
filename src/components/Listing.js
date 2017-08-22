import React, { PureComponent, PropTypes } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';


const data = [
  {
    name: 'place a',
  },
  {
    name: 'place b',
  },
  {
    name: 'place c',
  },
  {
    name: 'place d',
  },
  {
    name: 'place e',
  },
  {
    name: 'place f',
  },
];


export default class Listing extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {

  };

  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    return (
      <List containerStyle={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={item.name}
              onPress={() => this.props.onPress(item)}
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
});
