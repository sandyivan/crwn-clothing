import React from 'react';

//data of our shop
import SHOP_DATA  from './shop.data';

//importing our collection components 
import CollectionPreview from '../../components/collection-preview/collection-preview'


class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }



    render() {
        const { collections } = this.state;
        return(
             <div className='shop-page'>
                 {
                     collections.map(({ id, ...otherCollectionProps }) => (
                         <CollectionPreview key={id} {...otherCollectionProps}/>
                     )) 
                 }
             </div>
        )
    }
}


export default ShopPage;