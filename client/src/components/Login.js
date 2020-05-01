import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { login } from '../actions/AuthActions'
import { setAlert, removeAlert } from '../actions/AlertActions'

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
        return (
            <div className="LoginInputs">
                <h2>Sing In </h2>
                <div className="Inputs">
                    <input name="email" type="text" onChange={this.handleChange} placeholder="E-mail" />
                    <input name="password" type="password" onChange={this.handleChange} placeholder="Password" />
                </div>
                <Button onClick={this.loginNow} variant="success">Sing In</Button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { setAlert, removeAlert, login })(Login)