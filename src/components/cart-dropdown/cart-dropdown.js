import React from 'react';

//importing our button component 
import CustomButton from '../custom-buttom/custom-button';

import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>go to checkout</CustomButton>
    </div>
)

export default CartDropdown;