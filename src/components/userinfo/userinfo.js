import {Button, Avatar, Image} from 'antd';

import React from 'react';
import '../userinfo/userinfo.css'
import {useSelector} from "react-redux";
import ParticlesBg from "particles-bg";


const UserInfo = () => {
    const userinfo = useSelector(state => state.userinfo)

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
        </div>
    )
};


export default UserInfo;
