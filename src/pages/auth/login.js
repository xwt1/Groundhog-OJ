import React from 'react';
import axios from "axios";
import {Button, Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {getUserInfo, HOST_URL} from "../../utils/utils";
import {connect} from "react-redux";
import {createUpdateInfoAction} from "../../redux/actions/Userinfo";


class LoginForm extends React.Component {

    onFinish = (values) => {
        axios.post(HOST_URL + '/api/register', {
            username: values.username,
            password: values.password
        }).then(response => {
            if (response.data.err === 'ok') {
                localStorage.setItem('jwt', response.data.jwt)
                //异步请求用户信息
                getUserInfo().then(r =>{console.log(r)} )
                this.props.history.replace('/home')
            }
        }).catch(error => {
            alert("登录失败")
            console.log(error);
        });
    }

    render() {
        return (
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }
                }

                onFinish={this.onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="http://localhost:3000/">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <Link to='/auth/register'>register now!</Link>

                </Form.Item>
            </Form>
        );
    }
}

export default LoginForm



