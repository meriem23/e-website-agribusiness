import React from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../actions/ProductActions'
import ProductItem from './ProductItem'

class ProductList extends React.Component {
    componentDidMount() {
        this.props.getProduct()
    }
    render() {
        return (
            <div>
                {this.props.myProd.product.map(prod => <ProductItem key={prod._id} prod={prod}/>)}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        myProd: state.product,
        auth: state.auth
    }
}

export default connect(mapStateToProps, { getProduct })(ProductList)