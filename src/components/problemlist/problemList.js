import {List, message, Avatar, Spin} from 'antd';
import React from 'react';


const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';


const mockdata = {

}

class ProblemList extends React.Component {
    state = {
        data: [],
        loading: false,
        hasMore: true,
    };

    componentDidMount() {
        this.fetchData(res => {
            this.setState({
                data: res.results,
            });
        });
    }

    fetchData = callback => {

    };

    handleInfiniteOnLoad = () => {
        let {data} = this.state;
        this.setState({
            loading: true,
        });
        if (data.length > 14) {
            message.warning('Infinite List loaded all');
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
        this.fetchData(res => {
            data = data.concat(res.results);
            this.setState({
                data,
                loading: false,
            });
        });
    };

    render() {
        return (
            <div>
                <List
                    dataSource={this.state.data}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description={item.email}
                            />
                            <div>Content</div>
                        </List.Item>
                    )}
                >
                    {this.state.loading && this.state.hasMore && (
                        <div className="demo-loading-container">
                            <Spin />
                        </div>
                    )}
                </List>
            </div>
        );
    }
}

export default ProblemList;
