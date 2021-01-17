import React from 'react';
import { useSelector } from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'
import CollectionPreview from '../collection-preview/collection-preview';
import './collections-overview.scss'

const CollectionsOverview = () => {
     //using selectors created from reselect
    //memoization
    const collections = useSelector(selectCollectionsForPreview)
    console.log(collections)
    return ( <div className="collections-overview">
        {
            collections.map(({id,...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
        }
            
    </div> );
}
 
export default CollectionsOverview;