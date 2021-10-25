import React from "react";
import {Layout, Menu, Breadcrumb, Avatar, Modal} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import {Route, Redirect} from "react-router-dom";
import ProblemList from "../../components/problemlist/problemList";
import './main.css'
import UserInfo from "../../components/userinfo/userinfo";
import Welcome from "../../components/welcome/welcome";

const {Header, Content, Footer, Sider} = Layout;


class HomePage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            IsModalVisible: false,
            avatarConfirmLoading:false,
            avatarConfirmText:'',
        };
    }

    showModal = () => {
        this.setState({IsModalVisible: true})
        this.setState({avatarConfirmLoading: true})
        this.setState({avatarConfirmText: '3'})
        setTimeout(()=>{
            this.setState({avatarConfirmText: '2'})
            setTimeout(()=>{
                this.setState({avatarConfirmText: '1'})
                setTimeout(()=>{
                    this.setState({avatarConfirmLoading: false})
                    this.setState({avatarConfirmText: 'ok'})
                },1000)
            },1000)
        }, 1000);
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
        localStorage.removeItem('jwt')
        this.props.history.replace('/auth/login')
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
                                this.props.history.push(`/home/problem`);
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
                               onCancel={this.handleCancel} confirmLoading={this.state.avatarConfirmLoading} okText={this.state.avatarConfirmText}>

                            <p>确定要退出吗？</p>

                        </Modal>


                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item> </Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            <Route path="/home/problem" component={ProblemList}/>
                            <Route path="/home/userinfo" component={UserInfo}/>
                            <Route path="/home/welcome" component={Welcome}/>
                            <Redirect to='/home/welcome'/>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default HomePage;
