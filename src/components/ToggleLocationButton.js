import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native';
import {
  CYAN_THEME,
  GREY_BUTTON,
} from '../constants/colorConstants';

export default class ToggleLocationButton extends PureComponent {
  static propTypes = {
    toggleLocation: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.toggleLocation = this.toggleLocation.bind(this);
  }

  getButtonColor() {
    const isComplete = this.props.list[this.props.locationId].completed;
    return isComplete ? styles.disabled : styles.enabled;
  }

  toggleLocation() {
    this.props.toggleLocation(this.props.locationId);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.toggleLocation}>
          <View style={[styles.button, this.getButtonColor()]}>
            <Text style={styles.text}>
              Complete
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

ToggleLocationButton.propTypes = {
  locationId: React.PropTypes.number.isRequired,
  list: React.PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: '20%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
  },
  disabled: {
    backgroundColor: GREY_BUTTON,
  },
  enabled: {
    backgroundColor: CYAN_THEME,
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
