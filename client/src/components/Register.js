import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { register, clearError } from '../actions/AuthActions'
import { setAlert, removeAlert } from '../actions/AlertActions'

const styles = {
    root: {
        '& > *': {
            margin: '10px',
            width: '20ch',
        },
    },
}
const roles = [
    {
        value: 1,
        label: 'Buyer',
    },
    {
        value: 2,
        label: 'Seller',
    }
];

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
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    registerNow = () => {
        if (this.state.firstname === '' || this.state.lastname === ''
            || this.state.email === '' || this.state.password === ''
            || this.state.address === '' || this.state.phone === ''
        ) {
            let id = uuid()
            this.props.setAlert('All fields are required', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
            }, 10000);
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
        const { classes } = this.props;
        return (
            <div className="MyContainer">
                <div className="MyCard">
                    <p className="LogoTitle">The Farm</p>
                    <h2>Create Account</h2>
                    <p className="Sentp">Don’t worry, we won’t sell your information.</p>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="First Name" variant="outlined" name="firstname"
                            value={this.state.firstname} onChange={this.handleChange} />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" name="lastname"
                            value={this.state.lastname} onChange={this.handleChange} />
                        <br />
                        <TextField id="outlined-basic" label="Address" variant="outlined" name="address"
                            value={this.state.address} onChange={this.handleChange} />
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined" name="phone"
                            value={this.state.phone} onChange={this.handleChange} />
                        <br />
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" name="email"
                            value={this.state.email} onChange={this.handleChange} />
                        <TextField id="outlined-basic" label="Password" type="password" variant="outlined" name="password"
                            value={this.state.password} onChange={this.handleChange} />
                    </form>
                    <form noValidate autoComplete="off">
                        <div>
                            <TextField
                                id="outlined-select-role"
                                select
                                label="Role Selection"
                                variant="outlined"
                                helperText="Please specify if your are a Buyer or a Seller">
                                {roles.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>))}
                            </TextField>
                        </div>
                    </form>
                    <br />
                    <div className="BtnSign">
                        <button className="InBtn" onClick={this.registerNow}>Sign Up</button>
                    </div>
                    <hr />
                    <Link id="LinkItem" to="/login">Already have an acount?</Link>
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
Register.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, { setAlert, removeAlert, register, clearError })
    (withStyles(styles)(Register))