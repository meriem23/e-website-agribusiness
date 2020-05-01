import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { v4 as uuid } from 'uuid'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { register, clearError} from '../actions/AuthActions'
import { setAlert, removeAlert } from '../actions/AlertActions'



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
            email: '',
            password: '',
            role: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    registerNow = () => {
        if (this.state.firstname === '' || this.state.lastname === '' || this.state.address === '' || this.state.phone === '' || this.state.email === '' || this.state.password === '') {
            let id = uuid()
            this.props.setAlert('All fields are required', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
            }, 5000);
        } else {
            this.props.register({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                address: this.state.address,
                phone: this.state.phone,
                email: this.state.email,
                password: this.state.password
            })
            this.setState({
                firstname: '',
                lastname: '',
                address: '',
                phone: '',
                email: '',
                password: ''
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
           this.props.history.push('/') 
         }
        if (nextProps.auth.error === 'This user already exists') {
            let id = uuid()
            this.props.setAlert(nextProps.auth.error, 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
            }, 5000);
        }
    }
    render() {
        return (
            <div className="RegisterInputs">
                <h2>Create Account</h2>
                <div className="Inputs">
                    <input name="firstname" type="text" value={this.state.firstname} onChange={this.handleChange} placeholder="First Name" />
                    <input name="lastname" type="text" value={this.state.lastname} onChange={this.handleChange} placeholder="Last Name" />
                    <input name="address" type="text" value={this.state.address} onChange={this.handleChange} placeholder="Home Address" />
                    <input name="phone" type="text" value={this.state.phone} onChange={this.handleChange} placeholder="Phone Number" />
                    <input name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="E-mail" />
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                    <label className="RoleType">You are a ... </label>
                    <select name="role">
                        <option>Select one</option>
                        <option value="Buyer">Buyer</option>
                        <option value="Seller" >Seller</option>
                    </select>
                </div>
                <div className="BtnSign">
                    <Button variant="success" onClick={this.registerNow}>Sign Up</Button>
                </div>
                <Link id="LinkItem" to="/login">Already have an acount?</Link>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { setAlert, removeAlert, register, clearError})(Register)