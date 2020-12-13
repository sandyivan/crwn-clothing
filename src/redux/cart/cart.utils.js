// addItemToCart recieve two argument, cartItems which is our existing cartItems in our cartItems array on our reducer
// second is the cartItemToAdd which is our item we want to add 
export const addItemToCart = (cartItems, cartItemToAdd) => {
    //we gonna look inside our cartItems array if cartItemToAdd exist ,
    // it will return true or undifined 
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    // if existingCartItem exist, what are we gonna return to our entire function
    // is our cartItems.map. cartItems.map will return us a new array.
    // remember that we need to return a new version of our state, so our components can render properly.
    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id //if match we will create a new object where we have the cartItem except 
                ? { ...cartItem, quantity: cartItem.quantity + 1  } // the quantity is increase by 1
                : cartItem // if item doesnt match we just want to return the orginial cartItem, because theres no need to update the components that might be relying on our object 
        )
    }

    //if the cartItemToAdd is not found inside of our cartItems array, we want to return a new array.
    // with all of our existing cartItems that already there, but now we also want to add in  an object
    //which is equal to our cart item to add  except we're gonna give it a base quantity of one.
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id
        );
    }

    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id? 
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
}