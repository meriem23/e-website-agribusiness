import React from 'react'
import { connect } from 'react-redux'

const ProductDescription = ({ prod }) => {

    return (
        <div className="MyContainer">
           this is the product you are looking for
        </div>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(ProductDescription)