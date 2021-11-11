import {Button, Input, Space} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import React from "react";
import {Route, Switch} from "react-router-dom";
import '../userinfo/userinfo.css'
import {useState} from "react";
import useFetch from "./useFetch";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {getUserInfo, HOST_URL} from "../../utils/utils";
import ParticlesBg from "particles-bg";
import {connect, useDispatch, useSelector} from "react-redux";
import jwt_decode from "jwt-decode";
import * as constants from "constants";
import {UPDATE_USER_INFO} from "../../redux/constant";

const Userinfochange = () => {
    const userinfo = useSelector(state => state.userinfo)
    const dispatch =useDispatch()
    const [username, setName] = useState(userinfo.username);
    const [password, setPassword] = useState('');
    const [email, setMail] = useState(userinfo.email);
    const history = useHistory()

    const handlesubmit = (e) => {
        e.preventDefault();
        const users = {username, password, email}
        console.log(userinfo.id)
        axios.put(HOST_URL + '/api/users', {
            userid:userinfo.id,
            username:users.username,
            password:users.password,
            email:users.email,
        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwt') || ''
            },
        }).then(res => {
            if (res.data.err==='ok'){
                alert('修改成功')
                localStorage.setItem('jwt', res.data.token)
                //解析用户信息
                let decoded = jwt_decode(res.data.token);
                dispatch({type:UPDATE_USER_INFO,data:{
                        privilege: decoded.privilege,
                        email: decoded.email,
                        username: decoded.name,
                        id:decoded.userid
                    }})
                history.push('/home/userinfo')
            }else {
                console.log(res)
                alert('修改失败')
            }
        }).catch(err=>{
                alert('网络请求失败')
                console.log(err.response)
            })
    }
    return (
        <div>
            <form
                className="userinfo-text"
                // onSubmit={test}
            >
                <Space direction="vertical">
                    <Input
                        placeholder="昵称"
                        required
                        value={username}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input.Password
                        placeholder="密码"
                        iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)
                        }
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        placeholder="邮箱"
                        required
                        value={email}
                        onChange={(e) => setMail(e.target.value)}
                    />
                    <Button
                        size="large"
                        htmlType="submit"
                        name="submit"
                        onClick={
                            handlesubmit
                        }
                    >确认修改</Button>
                </Space>
            </form>
            {/*<ParticlesBg type={"random"} />*/}
        </div>

    )

}
export default Userinfochange;
