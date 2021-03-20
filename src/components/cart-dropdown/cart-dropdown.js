import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item';

//importing our button component 
import CustomButton from '../custom-buttom/custom-button';

//importing our selector
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch}) => {
    
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            {
                cartItems.length?
                (
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                )
                : 
                (
                    <span className="empty-message">Your cart is empty</span>
                )
            }
            <CustomButton onClick={() => {
                 history.push('/checkout');
                 dispatch(toggleCartHidden());
            }}>go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));

