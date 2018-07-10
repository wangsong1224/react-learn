import React from 'react'
import { Route,Switch } from 'dva/router';
import AsyncCompnent from '@/components/AsyncComponent'
// 动态路由的写法
const MapPage = AsyncCompnent(()=>import(/* webpackChunkName: "MapPage" */'../pages/map/MapPage'))

// 需要配置 key
const MapRouter = (
	<Route key='map' path="/map" exact component={MapPage}/>
)

export default MapRouter
