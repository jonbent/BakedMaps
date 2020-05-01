import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import {AuthRoute} from "../util/RouteUtil";
import SignupFormContainer from "./auth/SignupFormContainer";
import LoginFormContainer from "./auth/LoginFormContainer";
import App from './App';
const Routes = () => {
    return (
        <Switch>
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <Route path="/" component={App} />
        </Switch>
    );
};

export default Routes;