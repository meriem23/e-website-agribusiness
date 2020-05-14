import React, { Component } from "react";
import ProductList from './ProductList'


class MyStore extends Component {
    render() {
        return (
            <div>
                <img className="StoreImg" src="images/Store.Img.jpg"/>
               <div className="MyContainer">
                <ProductList />
            </div> 
            </div>
        )
    }
}
export default MyStore