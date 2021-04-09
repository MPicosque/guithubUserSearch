import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Search from 'pages/Search/Search';
import NavBar from 'core/components/NavBar/NavBar';

const Routes = () => (
    <BrowserRouter>
        <NavBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/search" exact>
                    <Search />
                </Route>
            </Switch>
    </BrowserRouter>
);

export default Routes;