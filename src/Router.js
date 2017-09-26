import { StackNavigator } from 'react-navigation';

import IndexScreen from './containers/IndexScreen';
import DetailScreen from './containers/DetailScreen';
import CarouselLightbox from './containers/CarouselLightbox';

const routes = {
  Index: { screen: IndexScreen },
  Detail: { screen: DetailScreen },
  Lightbox: { screen: CarouselLightbox },
};

const BaseNavigation = StackNavigator(routes);

export default BaseNavigation;
