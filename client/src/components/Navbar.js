import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../actions/AuthActions'
import Badge from '@material-ui/core/Badge'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined'
import { withStyles } from '@material-ui/core/styles'

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);
const Navbar = props => {
    const guest = () => (
        <div className="Navbar">
            <ul style={{ listStyleType: 'none' }} >
                <div className="NavItems">
                    <li className="Item">
                        <Link id="NavLinkItem" to="/">Home</Link>
                    </li>
                    <li className="Item">
                        <Link id="NavLinkItem" to="/store">Store</Link>
                    </li>
                    <li className="Item">
                        <Link id="NavLinkItem" to="/blog">Blog</Link>
                    </li>
                    <p className="LogoTitle">The Farm</p>
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
                </div>
            </ul>
            <hr />
        </div>
    )
    const userConnected = () => (
        <div className="Navbar">
            {props.auth.user && props.auth.user.role === 1 ?
                <ul style={{ listStyleType: 'none' }} >
                    <div className="NavItems">
                        <li className="Item">
                            <Link id="NavLinkItem" to="/">Home</Link>
                        </li>
                        <li className="Item">
                            <Link id="NavLinkItem" to="/store">Store</Link>
                        </li>
                        <li className="Item">
                            <Link id="NavLinkItem" to="/blog">Blog</Link>
                        </li>
                        <p className="LogoTitle">The Farm</p>
                        <li className="Item">
                            <p id="HelloItem"> Hello, <span id="NameItem">{props.auth.user && props.auth.user.firstname+ ' ' + props.auth.user.lastname}</span></p>
                        </li>
                        <li>
                        <Link id="NavLinkItem" to="/login" onClick={props.logout}><ExitToAppOutlinedIcon/></Link>
                        </li>
                        <li className="Item">
                            <Link id="NavLinkItem" to="/cart">
                                    <ShoppingCartOutlinedIcon />
                            </Link>
                        </li>  
                    </div>
                </ul> :
                <ul style={{ listStyleType: 'none' }}>
                    <div className="NavItems">
                        <li className="Item">
                            <Link id="NavLinkItem" to="/">Home</Link>
                        </li>
                        <li className="Item">
                            <Link id="NavLinkItem" to="/store">Store</Link>
                        </li>
                        <li className="Item">
                            <Link id="NavLinkItem" to="/blog">Blog</Link>
                        </li>
                        <p className="LogoTitle">The Farm</p>
                        <li className="Item">
                            <p id="HelloItem"> Hello, <span id="NameItem">{props.auth.user && props.auth.user.firstname+ ' ' + props.auth.user.lastname}</span></p>
                        </li>
                        <li>
                        <Link id="NavLinkItem" to="/new_product"><AddBoxOutlinedIcon/></Link>
                        </li>
                        <li>
                        <Link id="NavLinkItem" to="/login" onClick={props.logout}><ExitToAppOutlinedIcon/></Link>
                        </li>
                    </div>
                </ul>
            }
            <hr />
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

export default connect(mapStateToProps,{logout})(Navbar)