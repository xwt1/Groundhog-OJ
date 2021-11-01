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
import ParticlesBg from "particles-bg";



class ProblemDetail extends React.Component {

    constructor(props) {
        super(props);
        this.setState({})
        this.state={
            id:'',
            name:'',
            content:'',
            difficulty:'',
        }
        let id = querystring.parse(this.props.history.location.search.substr(1)).id
        this.setState({id :id })
        axios.get(
            HOST_URL + '/api/programs/'+id ,
            {
                headers:{
                    'Authorization' :'Bearer '+localStorage.getItem('jwt')
                }
            }
        ).then(res=>{
            console.log(res.data)
            if (res.data.err==='ok'){
                this.setState({
                    id:res.data.id,
                    name:res.data.name,
                    content:res.data.content,
                    difficulty:res.data.difficulty,
                })
                // this.state={
                //     id:res.data.id,
                //     name:res.data.name,
                //     content:res.data.content,
                //     difficulty:res.data.difficulty,
                // }
            }
            console.log(this.state.id)
        }).catch(err=>{
            console.log(err.response)
        })
    }

    handleContent=e=>{
        this.setState({
            answer:e.target.value
        })
    }

    confirm=e=>{
        // console.log(this.state)
        // console.log(localStorage.getItem('jwt'))
        axios.post(
            HOST_URL + '/api/programs/'+this.state.id,
            {
                // program_id: this.state.id,
                answer: ProblemDetail.answer,
            },
            {
                headers:{
                    'Authorization' :'Bearer'+localStorage.getItem('jwt')||'',
                }
            }
        ).then(Res=>{
            console.log(Res.data.err)
            // console.log(Res.data.status)
            if (Res.data.err==='ok'){
                message.success('提交成功');
                //message.success();
                console.log(Res.data.status)
            }else {
               message.success('提交失败');
            }
        }).catch(err=>{
            message.error('网络请求失败');
            console.log(err)
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
                    <Descriptions.Item label="题目序号">{this.state.id}</Descriptions.Item>
                    <Descriptions.Item label="题目名称">{this.state.name}</Descriptions.Item>
                    <Descriptions.Item label="题目难度">{this.state.difficulty}</Descriptions.Item>
                    <Descriptions.Item label="题目内容">
                        {this.state.content}
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
                <ParticlesBg type={"random"} />
            </div>

        );
    }
}

export default ProblemDetail ;
