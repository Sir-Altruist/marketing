import { 
    MARKETER_LOGIN_FAILURE, 
    MARKETER_LOGIN_REQUEST, 
    MARKETER_LOGIN_SUCCESS, 
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

        const { data } = await axios.post('/register/marketer', 
        { name, email, website, category, password, confirm },
        config)

        dispatch({
            type: MARKETER_REGISTER_SUCCESS,
            payload: data 
        })

        localStorage.setItem('marketerInfo', JSON.stringify(data))

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

        const { data } = await axios.post('/login/marketer', 
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