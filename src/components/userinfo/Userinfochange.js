import {Button, Input, Space} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React from "react";
import {Route, Switch} from "react-router-dom";
import '../userinfo/userinfo.css'
import UserInfo from "./userinfo";
import {useState} from "react";
import useFetch from "./useFetch";
import {useHistory} from "react-router-dom";
import axios from "axios";
// <input onChange={(e)=>this.inputChange(e)}/>
// <button onClick={()=>this.getInputValue} >获取input的值</button>
//


const Userinfochange = () => {
    // const [Usrname,setName] = useState('');
    const [username,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email, setMail] = useState('');
    const {data:User,error,isPending} =useFetch('http://localhost:8000/user')
    const history = useHistory()
    // let ids = User.map(
    //     (e) => {
    //         return e.id
    //     }
    // )
    // let ids = User.value.id
    // let ids = User
    const handlesubmit= (e) => {
        e.preventDefault();
        const users = {username, password, email}
        //这个地方只会直接找到他们传送的数据，不会根据id筛选
        fetch('http://localhost:8000/user', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            Authorization :('Bearer'+localStorage.getItem('jwt')||''),
            // body: 'username=${usrname}$password=${usrpassword}$email=${usremail}'
            body: JSON.stringify(users)
        }).then(
            () => {
                history.push('/home')
            })
    }
    function test(){
        alert("ok")
    }
    return (
        <Switch>
            <Route exact path="/home/userinfo/userinfochange" render={() => {
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
                    </form>
                )
            }}/>
            {/*<Route path="/home/userinfo" component={UserInfo}/>*/}
        </Switch>
    )
}
export default Userinfochange;