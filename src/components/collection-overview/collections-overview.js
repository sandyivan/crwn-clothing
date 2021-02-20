import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import './collections-overview.scss';


//importing our collection components 
import CollectionPreview from '../collection-preview/collection-preview';


const CollectionsOverview = ({ collections }) => {
    return(
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                )) 
            }
        </div>
    )
    
}

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
}) 

export default connect(mapStateToProps)(CollectionsOverview);