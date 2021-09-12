import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAILURE, 
    PRODUCT_UPLOAD_REQUEST, 
    PRODUCT_UPLOAD_SUCCESS, 
    PRODUCT_UPLOAD_FAILURE,
    USER_PRODUCT_LIST_REQUEST,
    USER_PRODUCT_LIST_SUCCESS,
    USER_PRODUCT_LIST_FAILURE,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAILURE,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILURE
 } from '../constants/products'

const initialState = {
    products: []
}

export const productReducers = (state = initialState, action) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: []
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case PRODUCT_LIST_FAILURE:
            return {
                loading: false,
                error: action.payload
            } 
        default:
            return state
    }
}

export const userProductReducers = (state = { products: []}, action) => {
    switch(action.type){
        case USER_PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: []
            }
        case USER_PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case USER_PRODUCT_LIST_FAILURE:
            return {
                loading: false,
                error: action.payload
            } 
        default:
            return state
    }
}

export const productUploadReducers = (state = {}, action) => {
    switch(action.type){
        case PRODUCT_UPLOAD_REQUEST:
            return {
                loading: true
            }
        case PRODUCT_UPLOAD_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case PRODUCT_UPLOAD_FAILURE:
            return {
                loading: false,
                error: action.payload
            } 
        default:
            return state
    }
}

export const productDeleteReducer = (state = {}, action) => {
    switch(action.type){
        case PRODUCT_DELETE_REQUEST:
            return {
                loading: true
            }
        case PRODUCT_DELETE_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case PRODUCT_DELETE_FAILURE:
            return {
                loading: false,
                error: action.payload
            } 
        default:
            return state
    }
}

export const productDetailsReducer = (state = { product: {}}, action) => {
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                product: {}
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case PRODUCT_DETAILS_FAILURE:
            return {
                loading: false,
                error: action.payload
            } 
        default:
            return state
    }
}