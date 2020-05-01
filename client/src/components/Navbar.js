import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/AuthActions'

const Navbar = props => {
    const userConnected = () => (
        <div>
            <ul style={{ listStyleType: 'none' }} className="Navbar">
            <p className="NameWeb">LOGO HERE</p>
                <div className="NavItems">
                <li className="Item">
                        Hello, {props.auth.user && props.auth.user.firstname}
                    </li>
                    <li className="Item">
                        <Link id="LinkItem" to="/">Home</Link>
                    </li>
                    <li className="Item">
                        <Link id="LinkItem" to="/blog">Blog</Link>
                    </li>
                    <li className="Item">
                        <Link id="LinkItem" to="/account">Your Account<i className="far fa-user-circle"></i></Link>
                    </li>
                    <li className="Item">
                        <Link id="LinkItem" to="/cart">Cart< i className="fas fa-shopping-basket"></i></Link>
                    </li>
                    <li className="Item">
                        <Link id="LinkItem" to='#!' onClick={props.logout}>Logout<i className="fas fa-sign-out-alt"></i></Link>
                    </li>
                </div>
            </ul>

        </div>
    )
    const guest = () => (
        <ul style={{ listStyleType: 'none' }} className="Navbar">
            <p className="NameWeb">LOGO HERE</p>
            <div className="NavItems">
                <li className="Item">
                    <Link id="LinkItem" to="/">Home</Link>
                </li>
                <li className="Item">
                        <Link id="LinkItem" to="/blog">Blog</Link>
                    </li>
                <li className="Item">
                    <Link id="LinkItem" to="/login">Login<i className="fas fa-sign-in-alt"></i></Link>
                </li>
                <li className="Item">
                    <Link id="LinkItem" to="/register">Register<i className="far fa-user"></i></Link>
                </li>
                <li className="Item">
                    <Link id="LinkItem" to="/contact">Contact us</Link>
                </li>
            </div>
        </ul>
    )
    return (
        <div>
            {props.auth.isAuthenticated ? userConnected() : guest()}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(Navbar)