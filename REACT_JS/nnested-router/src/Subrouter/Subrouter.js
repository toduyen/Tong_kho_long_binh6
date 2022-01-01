import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Admin1 from '../Components/Admin1';
import Admin2 from '../Components/Admin2';
class Subrouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/admin/admin1" component={Admin1}></Route>
                    <Route path="/admin/admin2" component={Admin2}></Route>
                </Switch>
            </div>
        );
    }
}

export default Subrouter;