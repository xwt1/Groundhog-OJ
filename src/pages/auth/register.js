import React from 'react';
import axios from "axios";
import {Button, Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {HOST_URL} from "../../utils/utils";

class  RegisterForm extends React.Component {


    onFinish = (values) => {
        console.log('Received values of form: ', values);
        let reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if(!reg.test(values.email)){
            alert("邮箱格式不正确");
            return;
        }
        if (values.confirm!==values.password){
            alert("两次输入的密码不一致")
            return;
        }
        reg =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if (!reg.test(values.password)){
            alert("密码格式不正确"+reg);
            return;
        }
        axios.post(HOST_URL+'/api/register', {
            username: values.username,
            password: values.password,
            email: values.email,
        }).then(response => {
            if (response.status===200){
                localStorage.setItem('jwt',response.data.jwt)
                this.props.history.replace('/home')
            }
        }).catch(error => {
            alert("注册失败")
            console.log(error);
        });
    }


    render() {
        return (
            <Form
                name="normal_login"
                className="login-form"
                initialValues= { {
                    username:'',
                    password:'',
                    confirm:'',
                    email:'',
                    remember: true
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
                    help="字母和数字组合"
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                    help="字母和数字组合，至少八位"
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="confirm password"
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
                        Register
                    </Button>
                    Or <Link to='/auth/login'>login now!</Link>
                </Form.Item>
            </Form>
        );
    }
}

export default RegisterForm;



