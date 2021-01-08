import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// persistore it allows our browser to cache this store depending on certain configuration that were going to set 
import { persistStore } from 'redux-persist';
import rootReducer from './root.reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
//persistor is a persisted version of our store 
export const persistor = persistStore(store);


