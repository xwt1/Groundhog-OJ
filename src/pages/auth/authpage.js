import 'antd/dist/antd.css';
import './authpage.css';
import React from 'react';
import { Image} from 'antd';
import {Route} from "react-router-dom";
import LoginForm from "./login";
import RegisterForm from "./register";


class AuthPage extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="loginbox">
                    <div className="content">
                        <Image
                            width={'200px'}
                            src="http://img.tom61.com/file/shaoertuku/jianbihuatupian/2017-11-21/3b342b0d07fe4d77662fd0348aed143a.jpg"
                        />
                        <Route path='/auth/login' component={LoginForm}/>
                        <Route path='/auth/register' component={RegisterForm}/>
                    </div>
                </div>
            </div>)
    }


}

export default AuthPage;
