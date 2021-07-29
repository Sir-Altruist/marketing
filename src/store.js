import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducers";
import { persistStore } from 'redux-persist'



const middleware = [thunk]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
const persistor = persistStore(store)

export  {store, persistor};