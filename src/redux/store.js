import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import articleReducer from './articles/articleReducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    articleReducer
})

const store = legacy_createStore(
    rootReducer, 
    applyMiddleware(thunk)
);

export default store;