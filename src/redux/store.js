import {combineReducers, createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import userinfoReducer from './reducers/Userinfo'
import {composeWithDevTools} from 'redux-devtools-extension'

const storageConfig = {
    key: 'root',
    storage:storage,
}
const Reducers = combineReducers({
    userinfo:userinfoReducer
})
const persistReducers = persistReducer(storageConfig,Reducers)
const  store = createStore(persistReducers,composeWithDevTools())
export const persistor = persistStore(store)
export default store
