
import 'antd/dist/antd.css';
import './login.css';
import axios from 'axios';
import {Form, Input, Button, Checkbox, Layout, Image, Space} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        axios.post("http://localhost:3000/api/register", {
            username: values.username,
            password: values.password
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        // eslint-disable-next-line react/style-prop-object


        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
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
                Or <a href="http://localhost:3000/">register now!</a>
            </Form.Item>
        </Form>


    );
};

function LoginPage(){
    return  (
        <Layout className="layout">
            <Space direction={"vertical"} size={25}>
                <Image
                    width={'300px'}
                    src="http://img.tom61.com/file/shaoertuku/jianbihuatupian/2017-11-21/3b342b0d07fe4d77662fd0348aed143a.jpg"
                />
                <LoginForm/>
            </Space>
        </Layout>
    )
}
export  default LoginPage;