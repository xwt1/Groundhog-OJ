import {
    message,
    Descriptions,
    Popconfirm,
    Button,
    Affix,
    BackTop
} from 'antd';
import React, {useState} from 'react';
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import * as querystring from "querystring";
import {HOST_URL} from "../../utils/utils";



class ProblemDetail extends React.Component {

    constructor(props) {
        super(props);
        this.setState({})
        this.state={
            answer:'',
            data:{},
            id:'',
        }
        let id = querystring.parse(this.props.history.location.search.substr(1)).id
        this.setState({id:id})
        axios.get(
            HOST_URL + '/api/problem/'+id,
            {
                headers:{
                    'Authorization' :'Bearer '+localStorage.getItem('jwt')
                }
            }
        ).then(res=>{
            this.setState({data:res.data})
        }).catch(err=>{
            console.log(err.response)
        })
    }

    handleContent=e=>{
        this.setState({
            answer:e.target.value
        })
    }

    confirm=()=>{
        axios.post(
            HOST_URL + '/api/problem/'+this.state.id,
            {
                answer: ProblemDetail.answer,
                id:ProblemDetail.num
            },
            {
                headers:{
                    'Authorization' :'Bearer'+localStorage.getItem('jwt')||'',
                }
            }
        ).then(response=>{
            message.success('提交成功');
            console.log(response);
        }).catch(error=>{
            message.success('提交失败');
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                {/*题目信息*/}
                <Descriptions
                    bordered
                    column={{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                    datSource={this.state.data}
                >
                    <Descriptions.Item label="题目序号">{this.state.data.id}</Descriptions.Item>
                    <Descriptions.Item label="题目名称">{this.state.data.name}</Descriptions.Item>
                    <Descriptions.Item label="题目难度">{this.state.data.difficulty}</Descriptions.Item>
                    <Descriptions.Item label="题目内容">
                        {this.state.data.content}
                        <br />
                    </Descriptions.Item>
                </Descriptions>

                {/*答案 富文本框*/}
                <TextArea placeholder={"请输入您的答案"}  rows={40} showCount  value={this.state.answer} allowClear onChange={this.handleContent}/>
                <br/>
                {/*提交按钮*/}
                <Affix offsetBottom={10}>
                    <Popconfirm
                        title={"确认提交答案吗"}
                        onConfirm={this.confirm}
                        okText={"确认"}
                        cancelText={"取消"}
                    >
                        <Button type={"primary"}>提交</Button>
                    </Popconfirm>
                </Affix>
                {/*点击回到顶部*/}
                <BackTop>
                    <strong >BackTop</strong>
                </BackTop>

            </div>

        );
    }
}

export default ProblemDetail ;
