import {List, message, Avatar} from 'antd';
import React from 'react';


// const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class ProblemList extends React.Component {
    state = {
        data: [

        ],
        loading: false,
        hasMore: true,

    };

    componentDidMount() {
        this.fetchData(res => {
            this.setState({
                data: res.results,
            });
        });
        for (let i = 0; i < 23; i++) {
            this.state.data.push({
                href: 'https://ant.design',
                title: `ant design part ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description:
                    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content:
                    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            })
        }
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
            <List
                itemLayout={"horizontal"}
                dataSource={this.state.data}
                pagination={{
                    onChange:page=>{
                        console.log(page);
                    },
                    pageSize:8,
                }}
                renderItem={item=>(
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}


                        />

                    </List.Item>
                )}
            />
        );
    }
}

export default ProblemList;
