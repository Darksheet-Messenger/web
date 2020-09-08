import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} />
        </BrowserRouter>
    );
}

export default Routes;