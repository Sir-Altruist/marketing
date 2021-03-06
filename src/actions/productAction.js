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
    PRODUCT_DETAILS_FAILURE,
    PRODUCT_EDIT_REQUEST,
    PRODUCT_EDIT_SUCCESS,
    PRODUCT_EDIT_FAILURE
} from '../constants/products'
import axios from 'axios'

export const productList = () => async (dispatch) => {
    try {

        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data  } = await axios.get(`${process.env.REACT_APP_API_URL}/products`)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {

        dispatch({
            type: PRODUCT_LIST_FAILURE,
            payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg
        })
    }
}

export const userProductList = () => async (dispatch, getState) => {
    try {

        const {
            clientLoginReducer: { clientInfo }
        } = getState()
        
        const config = ({
            headers: {
                'Content-Type': "application/json",
                "x-auth-token": `${clientInfo.token}` 
            }
        })

        dispatch({ type: USER_PRODUCT_LIST_REQUEST })

        const { data  } = await axios.get(`${process.env.REACT_APP_API_URL}/products/user`, config)

        dispatch({
            type: USER_PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {

        dispatch({
            type: USER_PRODUCT_LIST_FAILURE,
            payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg
        })
    }
}

export const productUpload = (
    name, 
    amount, 
    budget, 
    commission, 
    rating, 
    productImg, 
    link1,
    link2, 
    description
    ) => async (dispatch, getState) => {
    try {


        const {
            clientLoginReducer: { clientInfo }
        } = getState()

        const config = ({
            headers: {
                'Content-Type': "application/json",
                "x-auth-token": `${clientInfo.token}` 
            }
        })

            dispatch({ type: PRODUCT_UPLOAD_REQUEST })

        const { data  } = await axios.post(`${process.env.REACT_APP_API_URL}/products/addproduct`, 
        {name, amount, budget, commission, rating, productImg, link1, link2, description}, config)

        dispatch({
            type: PRODUCT_UPLOAD_SUCCESS,
            payload: data
        })  
    } catch (error) {

        dispatch({
            type: PRODUCT_UPLOAD_FAILURE,
            payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg
        })
    }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {

        const {
            clientLoginReducer: { clientInfo }
        } = getState()

        const config = ({
            headers: {
                'Content-Type': "application/json",
                "x-auth-token": `${clientInfo.token}` 
            }
        })

        dispatch({ type: PRODUCT_DELETE_REQUEST })

        await axios.delete(`${process.env.REACT_APP_API_URL}/products/${id}`, config)

        dispatch({ type: PRODUCT_DELETE_SUCCESS })
    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAILURE,
            payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg
        })
    }
}

export const singleProductDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`)

        dispatch({ 
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data 
    })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAILURE,
            payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg
        })
    }
}

export const editProduct = product => async (dispatch, getState) => {
    try {

        const {
            clientLoginReducer: { clientInfo }
        } = getState()

        const config = ({
            headers: {
                'Content-Type': "application/json",
                "x-auth-token": `${clientInfo.token}` 
            }
        })

        dispatch({ type: PRODUCT_EDIT_REQUEST })

        const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/products/update/${product._id}`, product,
        config)

        dispatch({ 
            type: PRODUCT_EDIT_SUCCESS,
            payload: data 
    })
    } catch (error) {
        dispatch({
            type: PRODUCT_EDIT_FAILURE,
            payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg
        })
    }
}