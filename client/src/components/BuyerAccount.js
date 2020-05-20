import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout, loadUser } from '../actions/AuthActions'

class BuyerAccount extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.loadUser()
    }
    render() {
        return (
            <div className="MySellerAccountContainer">
                <div className="ContainerBackOne">
                    <p>Welcome to your Dashboard. Scroll down to see quick links and overviews 
                        of your Personal Informations, Products List and Communities </p>
                    <Link id="NavLinkItem" to="/new_product">Add new product</Link>
                </div>
                <br />
                <div className="ContainerBackTwo">

                    <Link id="NavLinkItem" to="/login" onClick={this.props.logout}>logmeout</Link>
                    <div>hello</div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout, loadUser })(BuyerAccount)