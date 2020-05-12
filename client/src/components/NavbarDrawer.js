import React from 'react';
import Avatars from './Avatars'
import PropTypes from 'prop-types'
import { logout } from '../actions/AuthActions'
import { withStyles } from '@material-ui/core/styles'
import { ListItemIcon, ListItemText, Drawer, List, ListItem } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class NavbarDrawer extends React.Component {
    state = {
        right: false
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open
        });
    };

    render() {
        return (
            <div >
                <div onClick={this.toggleDrawer("right", true)}>
                    <Avatars
                        id="profil"
                        Name={this.props.auth.user &&
                            this.props.auth.user.firstname +
                            this.props.auth.user.lastname
                        }
                    />
                </div>
                <Drawer
                    anchort="right"
                    open={this.state.right}
                    onClose={this.toggleDrawer("right", false)}
                />
                <div
                    tabInedx={0}
                    role="button"
                    onClick={this.toggleDrawer("right", false)}
                    onKeyDown={this.toggleDrawer("right", false)}
                >
                    <div>
                        <List>
                            <ListItem divider={true} button="key">
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText primary={`${this.props.auth.user &&
                                    this.props.auth.user.firstname + " " +
                                    this.props.auth.user.lastname}`}
                                />
                            </ListItem>
                            <Link to="/account">
                                <ListItem divider={false} button="key" >
                                    <ListItemIcon>
                                        {<AccountBoxIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary="Your personal account" />
                                </ListItem>
                            </Link>
                            <Link to="/new_product">
                                <ListItem divider={false} button="key" >
                                    <ListItemIcon>
                                        {<AddIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary="Add a new product" />
                                </ListItem>
                            </Link>
                            <Link onClick={this.props.logout} to="/">
                                <ListItem divider={false} button="key" >
                                    <ListItemIcon>
                                        {<ExitToAppIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary="Logout" />
                                </ListItem>
                            </Link>
                        </List>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, { logout })(NavbarDrawer)