import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux"
import authReducer from "./authReducer"
import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"
import usersReducer from "./usersReducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import { appReducer } from "./appReducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.__store__ = store

export default store