import { ADD_PRODUCT, DELETE_PRODUCT, PRODUCT_ERROR, GET_PRODUCT, REMOVE_CURRENT_PRODUCT, SAVE_PRODUCT, UPDATE_PRODUCT, CLEAR_PRODUCT,GET_KEYWORD } from '../actions/types'

const initState = {
    product: null,
    saved: null,
    error: null,
    keyword: ""
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
        case GET_KEYWORD:
            return {
                 ...state, 
                 keyword: action.payload }
        default:
            return state
    }
}
export default ProductReducer