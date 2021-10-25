import {UPDATE_USER_INFO} from "../constant";


const initialState = {};

function UserInfoReducer(state=initialState, action) {
    switch (action.type) {
        case UPDATE_USER_INFO:
            return {...state,...action.data}
        default:
            return state
    }
}

export default UserInfoReducer
