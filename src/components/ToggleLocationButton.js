import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native';
import { Tile } from 'react-native-elements';
import { requireImage } from '../constants/Images';
import {
  CYAN_BORDER,
  WHITE_BACKGROUND,
  GREY_BUTTON,
} from '../constants/colorConstants';

export default class ToggleLocationButton extends PureComponent {
  constructor(props) {
    super(props);
    this.toggleLocation = this.toggleLocation.bind(this);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.toggleLocation}>
        <View style={[styles.button, this.getButtonColor()]}>
          <Text style={styles.text}>
            Complete
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  getButtonColor() {
    const isComplete = this.props.list[this.props.locationId].completed;
    return isComplete ? styles.disabled : styles.enabled;
  }

  toggleLocation() {
    this.props.toggleLocation(this.props.locationId);
    this.props.navigation.navigate('Index');
  }
}

ToggleLocationButton.propTypes = {
  locationId: React.PropTypes.number.isRequired,
  list: React.PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: '20%',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
  },
  disabled: {
    backgroundColor: GREY_BUTTON,
  },
  enabled: {
    backgroundColor: CYAN_BORDER,
  },
  text: {
    color: '#FFFFFF',
  }
});