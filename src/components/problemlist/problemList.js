import {List, message, Avatar, Spin} from 'antd';
import React from 'react';
import axios from "axios";
import {Link, Route, Switch} from "react-router-dom";
import ProblemDetail from "../problemdetail/problemdetail";
import {Redirect} from "react-router";
import {HOST_URL} from "../../utils/utils";
import ParticlesBg from "particles-bg";

class ProblemList extends React.Component {

    state = {
        problems: [],
        loading: false,
        hasMore: true,
    };

    constructor(props) {
        super(props);
        axios.get(HOST_URL + '/api/programs'
        ).then(res => {
            if (res.data.err==='ok'){
                this.setState({problems: res.data.programs})
            }else{
                alert("获取数据出错")
            }

        }).catch(err =>{
            console.log("failed to get problem list")
            console.log(err.response)
        })
    }

    render() {
        return (
            <div>
                <List
                    itemLayout={"horizontal"}
                    dataSource={this.state.problems}
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 15,
                    }}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.status ? "/right.png" : "/wrong.png"}/>}
                                title={
                                    <Link
                                        to={'/home/problem/detail?id=' + item.program_id }> {"题目" + item.program_id + " " + item.difficulty}</Link>
                                }
                                description={item.name}
                            />
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default ProblemList;
