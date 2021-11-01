import {Button, Avatar, Image} from 'antd';

import React from 'react';
import '../userinfo/userinfo.css'
import {useSelector} from "react-redux";
import ParticlesBg from "particles-bg";


const UserInfo = () => {
    const userinfo = useSelector(state => state.userinfo)
    {/*
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
    */
    }
    return (
        <div>
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
            <ParticlesBg type="random" bg={true}/>
        </div>
    )
};


export default UserInfo;
