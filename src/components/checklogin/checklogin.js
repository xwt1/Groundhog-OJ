import React from "react";
import {connect} from "react-redux";
import {UpdateInfoAction} from "../../redux/actions/Userinfo";
import {withRouter} from 'react-router-dom'
import axios from "axios";
import {HOST_URL} from "../../utils/utils";
class CheckLogin extends React.Component{

    componentWillMount() {
        if (!localStorage.getItem('jwt')) {
            this.props.history.replace('/auth/login')
        } else {
            //向后端发请求拿用户信息
            axios.get(HOST_URL + '/api/user/status', {}).then(response => {
                console.log(response.data)
                this.props.UpdateUserInfo(response.data.userinfo)
                this.props.history.replace('/home')
            }).catch(error => {
                alert("获取用户信息失败")
                console.log(error);
            });
        }
    }
    render() {
        return (<div></div>)
    }
}

export default connect(state=>({
        userinfo:state.userinfo,}),
    {UpdateUserInfo:UpdateInfoAction})(withRouter(CheckLogin))
