import {UPDATE_USER_INFO} from '../constant'

export const UpdateInfoAction=data=>{
    return  {
        type:UPDATE_USER_INFO,
        data:data
    }
}
