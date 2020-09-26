import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LogInPage from './Pages/LogInPage';
import SignUpPage from './Pages/SignUpPage';

export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path = "/Home">

                    </Route>

                    <Route path = "/login">
                        <LogInPage/>
                    </Route>

                    <Route path = "/">
                        <SignUpPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
