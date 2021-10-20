import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import * as path from "path";
import {BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import ProblemList from "../../components/problemlist/problemList";

import UserInfo from "../../components/userinfo/userinfo";
import Welcome from "../../components/welcome/welcome";
const { Header, Content, Footer, Sider } = Layout;


class HomePage extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark"  mode="inline" onSelect={(info)=>{
                        switch (info.key){
                            case '1':
                                this.props.history.push(`/home/userinfo`);
                                break;
                            case '2':
                                this.props.history.push(`/home/problem`);
                                break;
                            default:
                                console.log('default')
                                break;
                        }
                    }}>
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            用户信息
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            题目列表
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item> </Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Route path="/home/problem" component={ProblemList}/>
                            <Route path="/home/userinfo" component={UserInfo}/>
                            <Route path="/home/welcome" component={Welcome}/>
                            <Redirect to='/home/welcome'/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}
export default HomePage;
