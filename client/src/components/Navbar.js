import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Avatars from './Avatars'
import Badge from '@material-ui/core/Badge'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
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
        <div>
            <ul style={{ listStyleType: 'none' }} className="Navbar">
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
                            <StyledBadge badgeContent={0} color="secondary" showZero>
                                <ShoppingCartOutlinedIcon />
                            </StyledBadge>
                        </Link>
                    </li>
                </div>
            </ul>
            <hr />
        </div>
    )
    const userConnected = () => (
        <div>
            <ul style={{ listStyleType: 'none' }} className="Navbar">
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
                    {/* <li className="Item">
                        <p id="HelloItem">Hello, <span id="NameItem">
                            {props.auth.user && props.auth.user.firstname + ' ' + props.auth.user.lastname}
                        </span></p>
                    </li> */}
                    <li>
                        <Link id="NavLinkItem" to="/seller_account" >
                            <Avatars
                                id="profil"
                                Name={props.auth.user &&
                                    props.auth.user.firstname.slice(0, 1) +
                                    props.auth.user.lastname.slice(0, 1)}
                            />
                        </Link>
                    </li>
                    <li className="Item">
                        <Link id="NavLinkItem" to="/cart">
                            <StyledBadge badgeContent={0} color="secondary" showZero>
                                <ShoppingCartOutlinedIcon />
                            </StyledBadge>
                        </Link>
                    </li>
                </div>
            </ul>
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

export default connect(mapStateToProps)(Navbar)