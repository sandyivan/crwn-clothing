import { createSelector } from "reselect";
// theres is 2 types of selectors that we are going to write 
// input selectors and outpot selectors 
// inpunt selectors doesnt use a createselector 
// outpot selector use input selector and createselector to build itself 


// this is an input selector, its a function that gets the whole state
// and just return a slice of it, one layer deep usually
const selectCart = state => state.cart; 


// this is an output selector
// createSelector() takes 2 arguments, 1st is a collection of input selectors.
// second argument is a function that return the value we want out of selector,
// and parameters we're going to pass is actually each outpot of the input selectors
// in the  array but in the order that those selectors were written. 
export const selectCartItems = createSelector( // this createSelector is what does the memorization of our selector 
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>  cartItems.reduce((accumulatorQuantity, cartItem) => {
        return accumulatorQuantity + cartItem.quantity
    },  0)
)
 
