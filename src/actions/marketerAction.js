import { 
    MARKETER_DETAILS_FAILURE,
    MARKETER_DETAILS_REQUEST,
    MARKETER_DETAILS_SUCCESS,
    MARKETER_LOGIN_FAILURE, 
    MARKETER_LOGIN_REQUEST, 
    MARKETER_LOGIN_SUCCESS, 
    MARKETER_LOGOUT, 
    MARKETER_REGISTER_FAILURE, 
    MARKETER_REGISTER_REQUEST, 
    MARKETER_REGISTER_SUCCESS 
} from "../constants/marketerConstant"
import axios from 'axios'

export const register = (name, email, website, category, password, confirm) => async (dispatch) => {

    try {

        dispatch({
            type: MARKETER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/register/marketer`, 
        { name, email, website, category, password, confirm },
        config)

        dispatch({
            type: MARKETER_REGISTER_SUCCESS,
            payload: data 
        })

    } catch (error) {

        dispatch({
            type: MARKETER_REGISTER_FAILURE,
            payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg
        })
    }
}

export const login = (email, password) => async (dispatch) => {

    try {

        dispatch({
            type: MARKETER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/login/marketer`, 
        { email, password },
        config)

        dispatch({
            type: MARKETER_LOGIN_SUCCESS,
            payload: data 
        })

        localStorage.setItem('marketerInfo', JSON.stringify(data))

    } catch (error) {

        dispatch({
            type: MARKETER_LOGIN_FAILURE,
            payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg
        })
    }
}

export const details = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: MARKETER_DETAILS_REQUEST
        })

        const {
            marketerLoginReducer: { marketerInfo }
        } = getState()
        const config = ({
            headers: {
                'Content-Type': "application/json",
                "x-auth-token": `${marketerInfo.token}` 
            }
        })

        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/dashboard/marketer`, config)

        dispatch({
            type: MARKETER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: MARKETER_DETAILS_FAILURE,
            payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg
        })
    }
}

export const logout = () => (dispatch) => {

    localStorage.removeItem('marketerInfo')
    localStorage.removeItem('userInfo')
    dispatch({
        type: MARKETER_LOGOUT

    })

}