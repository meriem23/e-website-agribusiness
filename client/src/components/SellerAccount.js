import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/AuthActions'



const SellerAccount = props => {
    return (
        <div className="MySellerAccountContainer">
            <div class="ContainerBackOne">
                <p>Hello, <span id="NameItem">
                    {props.auth.user && props.auth.user.firstname + ' ' + props.auth.user.lastname}
                </span></p>
                <p>Welcome to your Dashboard. Scroll down to see quick links and overviews of your Personal Informations, Products List and Communities </p>
                <Link id="NavLinkItem" to="/new_product">Add new product</Link>
            </div>
            <br />
            <div class="ContainerBackTwo">

                <Link id="NavLinkItem" to="/home" onClick={props.logout}>logmeout</Link>
                <div class="">hello</div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(SellerAccount)

