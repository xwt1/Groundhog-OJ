import React from "react";
import {Layout, Menu, Breadcrumb, Avatar, Modal, Image, Button} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import {Route, Redirect, Switch} from "react-router-dom";
import ProblemList from "../../components/problemlist/problemList";
import './main.css'
import UserInfo from "../../components/userinfo/userinfo";
import Welcome from "../../components/welcome/welcome";
import ProblemDetail from "../../components/problemdetail/problemdetail";
import Userinfochange from "../../components/userinfo/Userinfochange";


const {Header, Content, Footer, Sider} = Layout;


class HomePage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            IsModalVisible: false
        };
    }

    showModal = () => {
        this.setState({IsModalVisible: true})
    }


    handleCancel = () => {
        this.setState({IsModalVisible: false})
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    }

    handleOk = () => {
        this.setState({IsModalVisible: false})
    }

    avatarClick = () => {
        this.showModal()
    }

    render() {
        const {collapsed} = this.state;
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" style={{textAlign: "center", lineHeight: '20px%'}}>GroundHog OJ</div>
                    <Menu theme="dark" mode="inline" onSelect={(info) => {
                        switch (info.key) {
                            case '1':
                                this.props.history.push(`/home/userinfo`);
                                break;
                            case '2':
                                this.props.history.push(`/home/problems`);
                                break;
                            default:
                                console.log('default')
                                break;
                        }
                    }}>
                        <Menu.Item key="1" icon={<PieChartOutlined/>}>
                            用户信息
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined/>}>
                            题目列表
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background"
                            style={{padding: 0, paddingTop: '15px', paddingRight: '3%'}}>
                        <div onClick={this.avatarClick}>
                            <Avatar className="avatar" src="https://joeschmoe.io/api/v1/random"/>
                        </div>
                        <Modal title="Basic Modal" visible={this.state.IsModalVisible} onOk={this.handleOk}
                               onCancel={this.handleCancel}>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item> </Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            <Switch>
                                <Route exact path="/home/userinfo/moddify" component={Userinfochange}/>
                                <Route exact path="/home/userinfo" component={UserInfo}/>
                                <Route exact path="/home/problem/detail" component={ProblemDetail}/>
                                <Route path="/home/problems" component={ProblemList}/>
                                <Route path="/home/welcome" component={Welcome}/>
                                <Redirect to='/home/welcome'/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer className="Footer">made by group03</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default HomePage;
