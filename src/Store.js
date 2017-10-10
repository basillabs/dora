import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

const finalCreateStore = compose(
  applyMiddleware(
    ReduxThunk,
  ),
  autoRehydrate(),
)(createStore);

const configureStore = (initialState) => {
  const store = finalCreateStore(reducers, initialState);
  persistStore(store, { storage: AsyncStorage });
  return store;
};

export default configureStore;
