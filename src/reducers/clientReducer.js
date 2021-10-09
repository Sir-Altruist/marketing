import { 
    
    CLIENT_LOGIN_REQUEST, 
    CLIENT_LOGIN_SUCCESS, 
    CLIENT_LOGIN_FAILURE,
    CLIENT_LOGOUT, 
    CLIENT_REGISTER_REQUEST,
    CLIENT_REGISTER_SUCCESS,
    CLIENT_REGISTER_FAILURE,
    CLIENT_DETAILS_REQUEST,
    CLIENT_DETAILS_SUCCESS,
    CLIENT_DETAILS_FAILURE,
    CLEAR_TOKEN

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
        case CLEAR_TOKEN:
            return { }
        default:
            return state
    }
}

export const clientDetailsReducer = (state = { user: {}}, action) => {
    switch(action.type){
        case CLIENT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CLIENT_DETAILS_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case CLIENT_DETAILS_FAILURE:
            return {
                loading: false,
                error: action.payload
                }
        default:
            return state
    }
}


export const clientRegisterReducer = (state = {}, action) => {
    switch(action.type){
        case CLIENT_REGISTER_REQUEST:
            return {
                loading: true
            }
        case CLIENT_REGISTER_SUCCESS:
            return {
                loading: false,
                clientInfo: action.payload
            }
        case CLIENT_REGISTER_FAILURE:
            return {
                loading: false,
                error: action.payload
                }
        default:
            return state
    }
}