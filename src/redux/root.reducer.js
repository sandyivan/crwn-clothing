import { combineReducers } from 'redux';

// now our browser also allows to persist this reducer, same with what we did on our store.js
// we are also importing the kind of storage we want to use, in this case we are importing local storage
import { persistReducer } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// now we have to define our persist config, this is just a JSON Object that represent the possible config we want for redux persist to use 
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // this is an array containing the string names of any reducer we want to persist 
} 



const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer) // now we have persist capabilities with this 

//base reducer that represents all of the reducer in our application
//we combine all our state reducer into this one big object. 
// combineReducer function returns one big giant object. 