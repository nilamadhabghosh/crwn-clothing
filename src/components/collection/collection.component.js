import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";

import './collection.styles.scss'

const Collection = ({ collection }) => {
    console.log(collection)
    return (
        <div className="collection-page">
            <h2>Collection Page</h2>
        </div>
    )
}

const mapStateToProps = (state, ownprops) => ({
    collection: selectCollection(ownprops.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);
