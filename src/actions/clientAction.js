import { CLIENT_LOGIN_FAILURE, CLIENT_LOGIN_REQUEST, CLIENT_LOGIN_SUCCESS } from "../constants/clientConstant"
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