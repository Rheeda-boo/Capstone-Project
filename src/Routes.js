import React from 'react';
import LandingPage from './Pages/LandingPage';
import LogInPage from './Pages/LogInPage';
import SignUpPage from './Pages/SignUpPage';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path = "/home">
                    <LandingPage/>
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
