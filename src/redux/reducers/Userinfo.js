import {UPDATE_USER_INFO} from "../constant";


const initialState = {username:'default',email:'default@default.com',type:'user',id:0};

function userinfoReducer(state=initialState, action) {
    switch (action.type) {
        case UPDATE_USER_INFO:
            return {...state,...action.data}
        default:
            return state
    }
}

export default userinfoReducer
