import React from 'react';

//css for this component
import './collection-preview.scss';

//importing a collection-item
import CollectionItem from '../collection-item/collection-item';


const CollectionPreview = ({ title, items }) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <div className='preview'>
                {
                    items
                        .filter((item,index) => index < 4)
                        .map(({id, ...otherItemProps} )=> (
                        <CollectionItem key={id} {...otherItemProps}/>
                        ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;