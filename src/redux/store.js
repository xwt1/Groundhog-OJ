import {combineReducers, createStore} from 'redux'
import userinfoReducer from './reducers/Userinfo'
const Reducers = combineReducers({
    userinfo:userinfoReducer
})
const store = createStore(Reducers)
export default store
