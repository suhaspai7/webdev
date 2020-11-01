import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Login from '../pages/Login';
import CheckOut from '../pages/Checkout';


export const history=createBrowserHistory();

const Routes=()=>{
    return(
        <Router>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/checkout" component={CheckOut}/>
            
            </Switch>

       </Router>
    



    )
}
export default Routes;
