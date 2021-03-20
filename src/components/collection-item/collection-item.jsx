import React from 'react';
// importing styles for this component 
import './collection-item.scss';

//these are the redux bindings 
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

//importing our button componenet 
import CustomButton from '../custom-buttom/custom-button';

const CollectionItem = ({ item, addItem }) => {
    const {  imageUrl, name, price } = item;
    return(
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    background: `url(${imageUrl})`
                }}
            >
            </div>
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <span className='price'>{`$ ${price}`}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart </CustomButton>
        </div>
    )
}

const mapdDispatchToProps = dispatch => ({
    addItem: item =>  dispatch(addItem(item)) 
})

export default connect(null, mapdDispatchToProps)(CollectionItem);