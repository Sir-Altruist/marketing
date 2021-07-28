import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducers";

const clientInfoFromStorage = localStorage.getItem('clientInfo')
 ? JSON.parse(localStorage.getItem('clientInfo')) 
 : null

const initialState = {
  clientInfoFromStorage
}

const middleware = [thunk]
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;