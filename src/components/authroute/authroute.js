import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute(props) {
    const {backUrl} = props;

    // 如果用户登录了,渲染
    if (localStorage.getItem('jwt') ) {
        return <Route {...props} />
    } else {
        // 如果没有登录，返回配置的默认路由
        return <Redirect to={backUrl} />
    }
}

export default AuthRoute;
