import React from 'react';
import {Switch, Route} from "react-router-dom";
import Admin from '../Components/Admin';
import User from '../Components/User';
import Subrouter from '../Subrouter/Subrouter';
class rootRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/admin" component={Admin}></Route>
                <Route path="/user" component={User}></Route>
                <Subrouter/>
            </Switch>
        );
    }
}

export default rootRouter;