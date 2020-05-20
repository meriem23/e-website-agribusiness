import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined'
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined'

class ProductDescription extends Component {
    state = {
        product: {
            name: "",
            category: "",
            quantity: "",
            unit: "",
            price: "",
            location: "",
            description: "",
            image: ""
        }
    }
    UNSAFE_componentWillMount() {
        this.setState({
            product: this.props.myProd.filter(
                el => el._id === this.props.match.params.id
            )[0]
        });
    }
    render() {
        return (
            <div className="MyProductContainer">
                <div className="ProductDescriptionCard">
                    <img className="ProductDescriptionImg" src={this.state.product.image} alt="product img" />
                    <div className="ProductDescription">
                        <p className="ProductDescriptionName">{this.state.product.name}</p>
                        <div className="ProductDescriptionInfo">
                            <p id="DescriptionIcon"><ScheduleOutlinedIcon /></p>   <p id="DescriptionText">Posted on:  {this.state.product.date.slice(0, 10)}</p>
                            <p id="DescriptionIcon"><LocationOnOutlinedIcon /></p> <p id="DescriptionText">Located in:   {this.state.product.location}</p>
                        </div>
                        <div className="ProductDescriptionInfo">
                            <p id="DescriptionIcon"><LocalOfferOutlinedIcon /></p><p id="DescriptionText">{this.state.product.price + ' DT / '}</p>
                            <p id="DescriptionText"> {' ' + this.state.product.unit.slice(0, 4)}</p>
                        </div>
                        <div className="ProductDescriptionInfo">
                            <i className="fas fa-weight-hanging fa-lg" id="DescriptionIcon"></i><p id="DescriptionText">{'  Available quantity: ' + this.state.product.quantity} </p>
                            <p id="DescriptionText"> {'  ' + this.state.product.unit.slice(0, 4)} </p>
                        </div>
                        <div className="ProductDescriptionDetail">
                            <p className="ProductDetail">Product Details :</p>
                            <p id="DescriptionText"> {this.state.product.description} </p>
                        </div>
                        <Link id="CartLinkItem" to="/cart"> <i class="fas fa-shopping-basket fa-lg CircleIcon"></i> </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        myProd: state.product.product
    }
}

export default connect(mapStateToProps)(ProductDescription)