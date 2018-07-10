// 引入路由相关组件
import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import IndexPage from '../pages/IndexPage'; // 主页
import LoginPage from '../pages/login/LoginPage' // 登录页

// 侧边栏
import ProductsRouter from './router-products'
import MapRouter from './router-map'

//404
import NotFound from '@/pages/404/NotFound'

// 业务相关的路由
const routeList = [
	ProductsRouter,
	MapRouter,
]

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={LoginPage} />
				{routeList}
				<Route path='*' component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
