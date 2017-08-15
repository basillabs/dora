import { StackNavigator } from 'react-navigation';

import IndexScreen from './containers/IndexScreen';
import DetailScreen from './containers/DetailScreen';

const routes = {
  Index: { screen: IndexScreen },
  Detail: { screen: DetailScreen },
};

const BaseNavigation = StackNavigator(routes);

export default BaseNavigation;
