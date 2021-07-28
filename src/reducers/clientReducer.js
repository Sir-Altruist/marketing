import { 
    
    CLIENT_LOGIN_REQUEST, 
    CLIENT_LOGIN_SUCCESS, 
    CLIENT_LOGIN_FAILURE,
    CLIENT_LOGOUT 

} from "../constants/clientConstant"



export const clientLoginReducer = (state = {}, action) => {
    switch(action.type){
        case CLIENT_LOGIN_REQUEST:
            return {
                loading: true
            }
        case CLIENT_LOGIN_SUCCESS:
            return {
                loading: false,
                clientInfo: action.payload
            }
        case CLIENT_LOGIN_FAILURE:
            return {
                loading: false,
                error: action.payload
                }
        case CLIENT_LOGOUT:
            return { }
        default:
            return state
    }
}