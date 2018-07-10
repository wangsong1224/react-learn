import React from 'react'
import { Route } from 'dva/router';

// 动态路由组件
import AsyncCompnent from '@/components/AsyncComponent'
// 动态路由的写法
const Products = AsyncCompnent(()=>import(/* webpackChunkName: "Products" */'../pages/ProductsPage'))

// 这种写法貌似不支持
// class products extends React.Component {
// 	render(){
// 		return(
// 			<Route path="/products" exact component={Products}/>
// 		)
// 	}
// }

// TODO:这种写法生命周期的配置
const products = (
	<Route key='products' path="/products" exact component={Products}/>
)

export default products
