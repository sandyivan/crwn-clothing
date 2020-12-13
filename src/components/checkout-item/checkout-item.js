import React from "react";

import "./checkout-item.scss";

import { connect } from "react-redux";
import { addItem, clearItemFromCart, removeItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem , clearItem, addItem, removeItem}) => {
    const { imageUrl, name, price, quantity } = cartItem
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={() => removeItem(cartItem)} className="arrow">&#10094;</div>    
                <span className="value">{quantity}</span>
                <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div> 
            </span>
            <span className='price'>{price}</span>
            <div onClick={() => clearItem(cartItem)} className='remove-button'>&#10005;</div>
        </div>
    )
}

const mapStateToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapStateToProps)(CheckoutItem);