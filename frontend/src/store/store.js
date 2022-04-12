import {applyMiddleware, createStore, combineReducers} from "redux"
import thunk from "redux-thunk"


const middlewares = applyMiddleware(thunk)

const reducer = combineReducers({
  
})

export const store = createStore(reducer,middlewares);
