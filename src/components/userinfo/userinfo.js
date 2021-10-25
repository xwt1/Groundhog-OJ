import {Button,Avatar, DatePicker, Image} from 'antd';

import React, {useState} from 'react';
import useFetch from "./useFetch";
import '../userinfo/userinfo.css'
import {Route,Switch,Link} from "react-router-dom";
import Userinfochange from "./Userinfochange";
// import {hashHistory} from 'react-router'

const UserInfo =()=> {
    // 是用来获取用户信息的函数
    // const {data:users, isPending ,error} = useFetch('/api/v/user')
    const {data: users, isPending, error} = useFetch('http://localhost:8000/user');
    // var data = {id:users.id,name:users.name,email:users.email};
    // var path = {
    //     pathname:'/home/userinfo/Userinfochange',
    //     state:data,
    // }
    // const id = users.id;
    return (
        <Switch>
            <Route exact path="/home/userinfo" component={() => {
                return (<div className="userinfo">
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
                        {
                            users?.map((users) => (
                                <div className="userinfo-text" key={users.id}>
                                    <p>姓名：{users.username}</p>
                                    <p>邮箱：{users.email}</p>
                                    <Button size="large" href="/home/userinfo/Userinfochange">修改信息</Button>
                                    {/*{hash}*/}
                                    {/*<Link size="large" to="/home/userinfo/userinfochange">修改信息</Link>*/}
                                </div>
                            ))
                        }
                    </div>
                </div>)
            }}>
            </Route>
            {/*<Route exact path="/home/userinfo/Userinfochange/:id" component={Userinfochange} >*/}
            <Route exact path="/home/userinfo/Userinfochange" >
                <Userinfochange/>
            </Route>
        </Switch>
    )
}


export default UserInfo ;
