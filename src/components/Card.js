import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import { requireImage } from '../constants/Images';

export default class Card extends PureComponent {
  static propTypes = {
    imageName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tourId: PropTypes.number.isRequired,
  }
  static defaultProps = {}

  render() {
    const {
      imageName,
      title,
      tourId,
    } = this.props;

    return (
      <Tile
        containerStyle={styles.container}
        imageContainerStyle={styles.image}
        imageSrc={requireImage(tourId, imageName)}
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
    fontWeight: '700',
    left: 20,
    lineHeight: 40,
    position: 'absolute',
  },
});
