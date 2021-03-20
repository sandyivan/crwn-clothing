import React from 'react';

//react-redux stuff 
import { connect } from 'react-redux';

import {createStructuredSelector} from "reselect";
 
//importing our redux action here
import {toggleCartHidden} from '../../redux/cart/cart.action';

//importing our selector so we can cache the value of itemcount so we dont re render this component if not needed
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />    
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


const mapSateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})


export default connect(mapSateToProps, mapDispatchToProps)(CartIcon); 