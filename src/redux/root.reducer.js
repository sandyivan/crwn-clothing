import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});

//base reducer that represents all of the reducer in our application
//we combine all our state reducer into this one big object. 
// combineReducer function returns one big giant object. 