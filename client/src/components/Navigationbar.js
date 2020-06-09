import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/AuthActions'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined'

const Navigationbar = props => {
    const guest = () => (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-white ItemsNavLink">
                <Link className="LogoTitleThefarm" to="/">The Farm</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link id="NavLinkItem" to="/">Home</Link>
                        </li>
                        <li className="Item">
                            <Link id="NavLinkItem" to="/store">Store</Link>
                        </li>
                        <li className="Item">
                            <Link id="NavLinkItem" to="/blog">Blog</Link>
                        </li>
                        <li className="Item">
                            <Link id="NavLinkItem" to="/login">Login</Link>
                        </li>
                        <li className="Item">
                            <Link id="NavLinkItem" to="/register">Register</Link>
                        </li>
                        <li className="Item">
                            <Link id="NavLinkItem" to="/cart">
                                <ShoppingCartOutlinedIcon />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    )
    const userConnected = () => (
        <div className="Navbar">
            {props.auth.user && props.auth.user.role === 1 ?
                <nav class="navbar navbar-expand-lg navbar-light bg-white ItemsNavLink">
                <Link className="LogoTitleThefarm" to="/">The Farm</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link id="NavLinkItem" to="/">Home</Link>
                            </li>
                            <li className="Item">
                                <Link id="NavLinkItem" to="/store">Store</Link>
                            </li>
                            <li className="Item">
                                <Link id="NavLinkItem" to="/blog">Blog</Link>
                            </li>
                            <li className="Item">
                                <p id="HelloItem"> Hello, <span id="NameItem">{props.auth.user && props.auth.user.firstname + ' ' + props.auth.user.lastname}</span></p>
                            </li>
                            <li className="Item">
                                <Link id="NavLinkItem" to="/login" onClick={props.logout}><ExitToAppOutlinedIcon /></Link>
                            </li>
                            <li className="Item">
                                <Link id="NavLinkItem" to="/cart"><ShoppingCartOutlinedIcon /></Link>
                            </li>
                        </ul>
                    </div>
                </nav> : 
                <nav className="navbar navbar-expand-lg navbar-light bg-white ItemsNavLink">
                    <Link className="LogoTitleThefarm" to="/">The Farm</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link id="NavLinkItem" to="/">Home</Link>
                            </li>
                            <li className="Item">
                                <Link id="NavLinkItem" to="/store">Store</Link>
                            </li>
                            <li className="Item">
                                <Link id="NavLinkItem" to="/blog">Blog</Link>
                            </li>
                            <li className="Item">
                                <p id="HelloItem"> Hello, <span id="NameItem">{props.auth.user && props.auth.user.firstname + ' ' + props.auth.user.lastname}</span></p>
                            </li>
                            <li className="Item">
                                <Link id="NavLinkItem" to="/new_product"><AddBoxOutlinedIcon /></Link>
                            </li>
                            <li className="Item">
                                <Link id="NavLinkItem" to="/login" onClick={props.logout}><ExitToAppOutlinedIcon /></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            }
        </div>
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

export default connect(mapStateToProps, { logout })(Navigationbar)