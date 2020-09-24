import React from 'react';
// importing styles for this component 
import './collection-item.scss';

//importing our button componenet 
import CustomButton from '../custom-buttom/custom-button';

const CollectionItem = ({ imageUrl, name, price  }) => {
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
            <CustomButton inverted>Add to cart </CustomButton>
        </div>
    )
}

export default CollectionItem;