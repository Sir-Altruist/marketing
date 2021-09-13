import { 
    BUTTON_CLICK_REQUEST, 
    BUTTON_CLICK_SUCCESS, 
    BUTTON_CLICK_FAIL,
    CLICK_COUNT_REQUEST,
    CLICK_COUNT_SUCCESS,
    CLICK_COUNT_FAIL

} from '../constants/clickConstant'

const initialState = {
    click: []
}

export const addClickReducer = (state = {}, action) => {
    switch(action.type){
        case BUTTON_CLICK_REQUEST:
            return {
                loading: true
            }
        case BUTTON_CLICK_SUCCESS:
            return {
                loading: false,
                click: action.payload
            }
        case BUTTON_CLICK_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state
    }
}

export const getClickReducer = (state = initialState, action) => {
    switch(action.type){
        case CLICK_COUNT_REQUEST:
            return {
                loading: true,
                click: []
            }
        case CLICK_COUNT_SUCCESS:
            return {
               loading: false,
               click: action.payload 
            }
        case CLICK_COUNT_FAIL:
            return {
                loading: false,
                error: action.payload  
            }
        default:
            return state
    }
}