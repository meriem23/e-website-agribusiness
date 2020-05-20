import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductItem = ({ prod }) => {
    return (
        <div className="ProductCard">
            <img className="ProductImg" src={prod.image} alt="product img" />
            <div className="ProductGlobalInfo">
                <p className="ProductName">{prod.name}</p>
                <div className="ProductPandU">
                    <p className="ProductPrice"> {prod.price + ' DT / '} </p>
                    <p className="ProductUnit"> {prod.unit.slice(0,3)} </p>
                </div>
                <div className="ProductHover">
                    <Link id="CartLinkItem" to={`/product/${prod._id}`}> <i className="fas fa-expand-arrows-alt fa-lg CircleIcon"></i> </Link>
                    <Link id="CartLinkItem" to="/cart"> <i className="fas fa-shopping-basket fa-lg CircleIcon"></i> </Link>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(ProductItem)