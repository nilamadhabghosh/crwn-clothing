import React, { Component } from "react";
import SHOPDATA from "./shop.data";
import CollectionPreview from "../../components/Collection_preview/Collection_Preview.component";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOPDATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}
