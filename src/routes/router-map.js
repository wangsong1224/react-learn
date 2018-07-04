import React from 'react'
import { Route,Switch } from 'dva/router';
import Products from '../pages/Products';
const Map = function () {
    return (
        <Switch>
            <Route path="/products" exact component={Products}/>
        </Switch>
    )
}
export default Map