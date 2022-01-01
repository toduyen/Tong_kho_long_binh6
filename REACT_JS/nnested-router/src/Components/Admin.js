import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
class Admin extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/admin/admin1">Admin1</Link>
                    </li>
                    <li>
                        <Link to="/admin/admin2">Admin2</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Admin;