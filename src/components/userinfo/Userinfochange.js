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

const Userinfochange = () => {

    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setMail] = useState('');
    const history = useHistory()

    const handlesubmit = (e) => {
        e.preventDefault();
        const users = {username, password, email}
        axios.put(HOST_URL + '/api/user', {
            username:users.username,
            password:users.password,
            email:users.email,
        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem('jwt') || ''
            },
        }).then(res => {
            if (res.data.err==='ok'){
                alert('修改成功')
                getUserInfo()
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
            <ParticlesBg type={"random"} />
        </form>
    )

}
export default Userinfochange;
