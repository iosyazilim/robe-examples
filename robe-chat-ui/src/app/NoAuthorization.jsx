import React from "react";
import ShallowComponent from "robe-react-commons/lib/components/ShallowComponent";
import Router from "react-router/lib/Router";
import Route from "react-router/lib/Route";
import BrowserHistory from "react-router/lib/browserHistory";
import Main from "app/common/Main";
import Login from "app/login/Login";

export default class NoAuthorization extends ShallowComponent {
    render():Object {
        return (
            <Router history={BrowserHistory}>
                <Route path={"/"} component={Main}>
                    <Route path="*" component={Login}/>
                </Route>
            </Router>
        );
    }
}
