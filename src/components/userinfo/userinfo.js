import {Button, Avatar, DatePicker, Image} from 'antd';

import React, {useEffect, useState} from 'react';
import '../userinfo/userinfo.css'
import {Route, Switch, Link} from "react-router-dom";
import Userinfochange from "./Userinfochange";
import {HOST_URL} from "../../utils/utils";
import axios from "axios";


const UserInfo = () => {
    //初始为空对象
    const [userinfo, setUserInfo] = useState({});
    //获取用户信息,  useEffect第二个参数为空表示这个函数只执行一次
    useEffect(() => {
        //同步执行
        axios.get(HOST_URL + '/api/user/status', {
            headers: {
                'Authorization': 'Bearer' + localStorage.getItem('jwt') || ''
            }
        }).then(res => {
            if (res.data.err === 'ok') {
                setUserInfo(res.data.userinfo)
            } else {
                alert("获取用户信息失败")
            }
        }).catch(err => {
            console.log(err)
            alert("网络请求异常")
        })
    }, [])

    return (
        <div className="userinfo">
            <Avatar
                size={200}
                src={
                    <Image
                        src="https://joeschmoe.io/api/v1/random"
                        style={{
                            width: 100,
                        }}
                    />
                }
            />
            <div>
                <div className="userinfo-text">
                    <p>姓名：{userinfo.username}</p>
                    <p>邮箱：{userinfo.email}</p>
                    <Button size="large" href="/home/userinfo/moddify">修改信息</Button>
                </div>
            </div>
        </div>
    )
}


export default UserInfo;
