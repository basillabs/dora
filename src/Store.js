import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

const finalCreateStore = compose(
  applyMiddleware(
    ReduxThunk,
  ),
)(createStore);

const configureStore = initialState => finalCreateStore(reducers, initialState);

export default configureStore;
