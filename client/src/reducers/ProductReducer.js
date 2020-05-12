import { ADD_PRODUCT, DELETE_PRODUCT, PRODUCT_ERROR, GET_PRODUCT, REMOVE_CURRENT_PRODUCT } from '../actions/types'

const initState = {
    product: [],
    error: null
}

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                PRODUCT: action.payload
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