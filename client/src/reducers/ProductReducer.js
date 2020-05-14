import { ADD_PRODUCT, DELETE_PRODUCT, PRODUCT_ERROR, GET_PRODUCT, REMOVE_CURRENT_PRODUCT, SAVE_PRODUCT, UPDATE_PRODUCT, CLEAR_PRODUCT } from '../actions/types'

const initState = {
    product: [{ name: 'orange', image: 'orange.photo', category: 'fruit', quantity: 150, unit: 'kg', price: 12, location: 'hms', description: 'nice orange'}],
    saved: null,
    error: null
}

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                product: [action.payload, ...state.product]
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                product: state.product.filter(el => el._id !== action.payload)
            }
        case SAVE_PRODUCT:
            return {
                ...state,
                saved: action.payload
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                product: state.product.map(el => el._id === action.payload._id ? action.payload : el)
            }
        case CLEAR_PRODUCT:
            return {
                ...state,
                saved: null
            }
        case PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case REMOVE_CURRENT_PRODUCT:
            return {
                ...state,
                product: []
            }
        default:
            return state
    }
}
export default ProductReducer