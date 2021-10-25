import React from 'react';
import {UserOutlined} from '@ant-design/icons';
import './error.css';

/**
 * 显示错误信息
 * 可以当404页来用
 */
class NotFound extends React.PureComponent {


    render() {
        return (
            <div className="not-found">
                <div style={{ fontSize:32 }}><UserOutlined type="frown-o"/></div>
                <h1>{this.props.errorMsg || '404 Not Found'}</h1>
            </div>
        );
    }

}

export default NotFound;
