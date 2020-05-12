import { GET_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT, PRODUCT_ERROR, REMOVE_CURRENT_PRODUCT } from './types'
import axios from 'axios'

//GET PRODUCT
export const getProduct = () => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.get('/api/product', config)
        .then(res => dispatch({
            type: GET_PRODUCT,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: PRODUCT_ERROR,
            payload: err.response.msg
        })
        )
}
// REMOVE CURRENT PRODUCT
export const removeCurrentProduct = () => dispatch => {
    dispatch({
        type: REMOVE_CURRENT_PRODUCT
    })
}
// ADD PRODUCT
export const addProduct = newProduct => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('/api/product', newProduct, config)
        .then(res => dispatch({
            type: ADD_PRODUCT,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: PRODUCT_ERROR,
            payload: err.response.msg
        }))
}
// DELETE PRODUCT
export const deleteProduct = id => dispatch => {
    axios.delete(`/api/product/${id}`)
        .then(() => dispatch({
            type: DELETE_PRODUCT,
            payload: id
        }))
        .catch(err => dispatch({
            type: PRODUCT_ERROR,
            payload: err.response.msg
        }))
}
