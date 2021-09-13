import { 
    BUTTON_CLICK_REQUEST, 
    BUTTON_CLICK_SUCCESS, 
    BUTTON_CLICK_FAIL, 
    CLICK_COUNT_REQUEST,
    CLICK_COUNT_SUCCESS,
    CLICK_COUNT_FAIL
    } from '../constants/clickConstant'
import axios from 'axios'

export const addClick = () => async (dispatch) => {
    try {
        dispatch({
            type: BUTTON_CLICK_REQUEST
        })

        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/clicks`) 
        dispatch({
            type: BUTTON_CLICK_SUCCESS,
            payload: data 
        })
    } catch (error) {
        dispatch({
            type: BUTTON_CLICK_FAIL,
            payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg
        })
    }
}

export const getClickCount = () => async (dispatch) => {
    try {
        dispatch({
            type: CLICK_COUNT_REQUEST
        })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/clicks`)
        dispatch({
            type: CLICK_COUNT_SUCCESS,
            payload: data
        })
    } catch (error) {
         dispatch({
            type: CLICK_COUNT_FAIL,
            payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg
        })
    }
}