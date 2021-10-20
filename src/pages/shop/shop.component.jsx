import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <CollectionsOverview />
        </div>
    )
}

export default ShopPage