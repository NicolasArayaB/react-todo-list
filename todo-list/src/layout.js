import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/home"
import TodoList from "./App";

const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/index.html" component={Home} />
                        <Route exact path="/list" component={TodoList} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Layout;