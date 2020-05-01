import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from '../../redux/shop/shop.selector';
import CollectionPreview from '../Collection_preview/Collection_Preview.component';

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections.map(({ id, ...otherCollectionsProps }) => (
            <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);