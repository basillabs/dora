import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import { requireImage } from '../constants/Images';

export default class Card extends PureComponent {
  static propTypes = {
    imageName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }
  static defaultProps = {}

  render() {
    const {
      imageName,
      title,
    } = this.props;
    return (
      <Tile
        containerStyle={styles.container}
        imageContainerStyle={styles.image}
        imageSrc={requireImage(imageName)}
        title={title}
        titleStyle={styles.title}
        featured
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 220,
  },
  image: {
    height: 220,
  },
  title: {
    bottom: 20,
    fontSize: 30,
    fontWeight: '500',
    left: 20,
    lineHeight: 40,
    position: 'absolute',
  },
});
