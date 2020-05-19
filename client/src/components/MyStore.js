import React, { Component } from "react";
import ProductList from './ProductList'
import SearchProduct from './SearchProduct'

class MyStore extends Component {
    render() {
        return (
            <div>
                <img className="StoreImg" src="images/Store.Img.jpg" alt="store banner" />
                <div className="MyStoreContainer">
                    <SearchProduct />
                    <ProductList />
                </div>
            </div>
        )
    }
}
export default MyStore