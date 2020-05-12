import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import AlertReducer from './AlertReducer'
import ProductReducer from './ProductReducer'

export default combineReducers({ auth: AuthReducer, alert: AlertReducer, product: ProductReducer })