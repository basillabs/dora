import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  BLACK_MESSAGE,
} from '../constants/colorConstants';
import PropTypes from 'prop-types';

class TaskList extends PureComponent {

  static propTypes = {
    taskList: PropTypes.array.isRequired,
  };

  renderTasks(taskList) {
    return taskList.map(function(task) {
      return (
          <Text style={styles.text}>
            {task}
          </Text>        
        )
    });
  }


  render() {
    return (
      <View style={styles.tasksContainer}>
        {this.renderTasks(this.props.taskList)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tasksContainer: {
    marginLeft: 20,
  },
  text: {
    color: BLACK_MESSAGE,
    fontSize: 16,
    lineHeight: 20,
    margin: 20,
  },
});

export default TaskList;
