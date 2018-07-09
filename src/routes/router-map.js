import React from 'react'
import { Route } from 'dva/router';
import MapPage from '../pages/map/MapPage';
const routes = (
  <Route component={MapRouter}>
    <Route path="groups" component={MapPage}/>
  </Route>
)
class MapRouter extends React.Component {
	render(){
    return (
      <div>
				{ routes }
			</div>
    )
	}
}
export default MapRouter
