import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, CLEAR_ERROR, LOGOUT, USER_LOADED } from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

//Load user
export const loadUser = () => dispatch => {
    //Put the token in the request header
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    axios.get('/api/auth')
        .then(user => dispatch({
            type: USER_LOADED,
            payload: user.data
        }))
        .catch(() => dispatch({
            type: AUTH_ERROR
        }))

}
//Register user
export const register = formData => dispatch => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    axios.post('/api/user', formData, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
            dispatch(loadUser())
        })
        .catch(error => dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data.msg
        }))
}
//Login user
export const login = formData => dispatch => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    axios.post('/api/auth', formData, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            dispatch(loadUser())
        })
        .catch(error => dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.msg
        }))
}
//Logout user
export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}
//Clear errors
export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_ERROR,
    })
}