import axios from "axios";
import {createUpdateInfoAction} from "../redux/actions/Userinfo";

export const HOST_URL='http://localhost:3000'
export const getUserInfo=async function (){
    await axios.get(HOST_URL + '/api/user/status', {
        headers: {
            'Authorization': 'Bearer' + localStorage.getItem('jwt') || ''
        }
    }).then(res => {
        if (res.data.err === 'ok') {
            createUpdateInfoAction({
                username:res.data.username,
                email:res.data.email,
            })
        } else {
            alert("获取用户信息失败")
        }
    }).catch(err => {
        console.log(err)
        alert("网络请求异常")
    })
}
