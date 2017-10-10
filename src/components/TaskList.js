import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  BLACK_MESSAGE,
} from '../constants/colorConstants';

function renderTasks(taskList) {
  return taskList.map(task =>
    <Text style={styles.text} key={task}>
      {task}
    </Text>,
  );
}

function TaskList({ taskList }) {
  return (
    <View style={styles.tasksContainer}>
      {renderTasks(taskList)}
    </View>
  );
}
TaskList.propTypes = {

  taskList: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  tasksContainer: {
    marginLeft: 20,
  },
  text: {
    color: BLACK_MESSAGE,
    fontSize: 16,
    lineHeight: 20,
    margin: 10,
  },
});

export default TaskList;
