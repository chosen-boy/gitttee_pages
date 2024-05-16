import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/Login'; // 假设 Login 页面的组件在 Login.js 文件中


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} /> {/* 将 Login 页面设置为主页面 */}
                {/* 其他路由配置 */}
            </Switch>
        </Router>
    );
}

export default App;