import { Avatar,  DatePicker} from 'antd';

import React from 'react';

import { AntDesignOutlined } from '@ant-design/icons';


class UserInfo extends React.Component {
    state={
        txt:'',
        content:'',
        sex:''
    }
    handleChange=e=>{
        this.setState({
            txt:e.target.value
        })
    }
    handleContent=e=>{
        this.setState({
            content:e.target.value
        })
    }
    handleSex=e=>{
        this.setState({
            sex:e.target.value
        })
    }

    render() {
        return (
            <div>
                <Avatar
                    size={{xs:24,sm:32,md:40,lg:64,xl:80,xxl:100}}
                    icon={<AntDesignOutlined/>}
                />
                <br/>
                {/*文本框*/}
                <input placeholder={"ID"} type={"text"} value={this.state.txt} onChange={this.handleChange}/>
                <br/>
                <input addonBefore={"123"} placeholder={"姓名"} type={"text"} value={this.state.txt} onChange={this.handleChange}/>
                <br/>
                {/*下拉框*/}
                <select value={this.state.sex} onChange={this.handleSex}>
                    <option value={"male"}>男</option>
                    <option value={"female"}>女</option>
                </select>
                <br/>
                <DatePicker
                    dateRender={current => {
                        const style = {};
                        if (current.date() === 1) {
                            style.border = '1px solid #1890ff';
                            style.borderRadius = '50%';
                        }
                        return (
                            <div className="ant-picker-cell-inner" style={style}>
                                {current.date()}
                            </div>
                        );
                    }}
                />
                <br/>
                <input placeholder={"手机号"} type={"text"} value={this.state.txt} onChange={this.handleChange}/>
                <br/>
                <input placeholder={"邮箱"} type={"text"} value={this.state.txt} onChange={this.handleChange}/>
                <br/>
                {/*富文本框*/}
                {/*<textarea value={this.state.content} onChange={this.handleContent}/>
                <br/>*/}


            </div>
        );
    }
}

export default UserInfo ;
