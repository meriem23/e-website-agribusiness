import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import Alerts from './Alerts'
import { login, clearError } from '../actions/AuthActions'
import { setAlert, removeAlert } from '../actions/AlertActions'
import TextField from '@material-ui/core/TextField'
import { withStyles } from "@material-ui/core/styles"
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import PropTypes from 'prop-types'

const styles = {
    root: {
        '& > *': {
            width: '25ch',
        },
    },
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    loginNow = () => {
        if (this.state.email === '' || this.state.password === '') {
            let id = uuid()
            // if the user doesn't write anything
            this.props.setAlert('Please enter your login informations', 'warning', id)
            setTimeout(() => {
                this.props.removeAlert(id)
            }, 5000)
        } else {
            this.props.login({
                email: this.state.email,
                password: this.state.password
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        // if the user writes false informations
        if (nextProps.auth.error === 'You entered the wrong password' || nextProps.auth.error === 'You must register first') {
            let id = uuid()
            this.props.setAlert(nextProps.auth.error, 'warning', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
            }, 5000);
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="MyContainer">
                <div className="MyCard ">
                    <p className="LogoTitle">The Farm</p>
                    <h2>Sing In </h2>
                    <p className="Sentp">Sing in to get access to your account</p>
                    <form className={classes.root} noValidate autoComplete="off" >
                        <TextField id="outlined-basic" label="E-mail" name="email"
                            variant="outlined" onChange={this.handleChange} />
                        <br />
                        <br />
                        <TextField id="outlined-basic" label="Password" name="password" type="password"
                            variant="outlined" onChange={this.handleChange} />
                    </form>
                    <br />
                    <button className="InBtn" onClick={this.loginNow}>Sing In</button>
                    <br />
                    <br />
                    <Link id="LinkItem" to="/register">Don't have an acount? <br /> Create one now</Link>
                    <br />
                    <hr />
                    <br />
                    <button className="LogBtnInsta"><InstagramIcon /></button>
                    <button className="LogBtnFB"><FacebookIcon /></button>
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
Login.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, { setAlert, removeAlert, login, clearError })
    (withStyles(styles)(Login))