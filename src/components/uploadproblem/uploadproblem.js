import {Button, Select, Input, Space, Divider, Row, Col} from 'antd';

import React, {useState} from 'react';
import "./uploadproblem.css"
import axios from "axios";
import {getUserInfo, HOST_URL} from "../../utils/utils";
import {useHistory} from "react-router-dom";
import ParticlesBg from "particles-bg";


const {Option} = Select
const {TextArea} = Input

const UploadProblem = () => {
    const history = useHistory()
    const [program_name, setTitle] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [answer, setAnswer] = useState('');
    const [content,setContent] = useState('');

    function handlesubmit(e){
        e.preventDefault();
        const problem = {program_name, difficulty, answer,content}
        axios.post(HOST_URL + '/api/programs', {
            ...problem
        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem('jwt') || ''
            },
        }).then(res => {
            if (res.data.err==='ok'){
                alert('提交成功')
                history.go(0)
            }else {
                console.log(res)
                alert('提交失败')
            }
        }).catch(err=>{
            alert('网络请求失败')
            console.log(err.response)
        })
    }
    return (
            <div>
                <form style={{
                    position:'relative',
                    height:"100%",
                    padding:0,
                    width:'100%',
                }}>
                    <Row style={{display:"flex",alignItems:"center",width:'100%',height:"100%"}}>
                        <Col flex={2}  >
                            <Space direction="vertical" style={{width:"80%"}}>
                                <Input
                                    style={{margin:'10px'}}
                                    placeholder="题目标题"
                                    required
                                    value={program_name}
                                    onChange={(e) => setTitle(e.target.value)}/>
                                <Input
                                    style={{margin:'10px'}}
                                    placeholder="题目答案"
                                    required
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}/>
                                <Select
                                    showSearch
                                    style={{ margin:'10px'}}
                                    placeholder="选择难度"
                                    optionFilterProp="children"
                                    onChange={(value)=>{setDifficulty(value)}}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="easy">easy</Option>
                                    <Option value="normal">normal</Option>
                                    <Option value="difficult">difficult</Option>
                                </Select>
                            </Space>
                        </Col>
                        <Col flex={5} style={{height:"80%"}}>
                            <TextArea
                                required
                                showCount
                                autoSize={{minRows:24}}
                                style={{width:'auto',height:"100%",margin:'20px'}}
                                maxLength={1000}
                                placeholder={"题目内容"}
                                onChange={e=>{setContent(e.target.value)}}
                            />
                        </Col>
                        <Col flex={2}>
                            <Button
                                style={{float:"left",margin:'50px'}}
                                size="large"
                                htmlType="submit"
                                name="submit"
                                onClick={
                                    handlesubmit
                                }
                            >确认</Button>
                        </Col>
                    </Row>
                </form>
                <ParticlesBg type={"random"} />
            </div>

    )
}


export default UploadProblem;
