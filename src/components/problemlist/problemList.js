import {List, message, Avatar, Spin} from 'antd';
import React from 'react';


const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

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
               problemlist

            </div>
        );
    }
}

export default ProblemList;
