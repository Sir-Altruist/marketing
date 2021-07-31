import { 
    CLIENT_DETAILS_FAILURE,
    CLIENT_DETAILS_REQUEST,
    CLIENT_DETAILS_SUCCESS,
    CLIENT_LOGIN_FAILURE, 
    CLIENT_LOGIN_REQUEST, 
    CLIENT_LOGIN_SUCCESS, 
    CLIENT_LOGOUT, 
    CLIENT_REGISTER_FAILURE, 
    CLIENT_REGISTER_REQUEST, 
    CLIENT_REGISTER_SUCCESS
} from "../constants/clientConstant"
import axios from 'axios'

export const login = (username, email, password) => async (dispatch) => {
    try {

        dispatch({
            type: CLIENT_LOGIN_REQUEST
        })

        const config = ({
            headers: {
                'Content-Type': "application/json"
            }
        })

        const { data } = await axios.post('/login/client', { username, email, password }, config)

        dispatch({
            type: CLIENT_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('clientInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: CLIENT_LOGIN_FAILURE,
            payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg
        })
    }
}

export const details = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: CLIENT_DETAILS_REQUEST
        })

        const {
            clientLoginReducer: { clientInfo }
        } = getState()
        const config = ({
            headers: {
                'Content-Type': "application/json",
                "x-auth-token": `${clientInfo.token}` 
            }
        })

        const { data } = await axios.get(`/dashboard/client/`, config)

        dispatch({
            type: CLIENT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CLIENT_DETAILS_FAILURE,
            payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg
        })
    }
}

export const register = (username, email, password, confirm) => async (dispatch) => {
    try {

        dispatch({
            type: CLIENT_REGISTER_REQUEST
        })

        const config = ({
            headers: {
                'Content-Type': "application/json"
            }
        })

        const { data } = await axios.post('/register/client', { username, email, password, confirm }, config)

        dispatch({
            type: CLIENT_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('clientInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: CLIENT_REGISTER_FAILURE,
            payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg
        })
    }
}


export const logout = () => (dispatch) => {

    localStorage.removeItem('clientInfo')
    dispatch({
        type: CLIENT_LOGOUT
    })

}