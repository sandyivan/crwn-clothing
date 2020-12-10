import React from 'react';
import { connect } from "react-redux";

import CartItem from '../cart-item/cart-item';

//importing our button component 
import CustomButton from '../custom-buttom/custom-button';

//importing our selector
import { selectCartItems } from "../../redux/cart/cart.selectors";

import './cart-dropdown.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        {
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }
        <CustomButton>go to checkout</CustomButton>
    </div>
)

const mapStateToProps = (state) =>({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);