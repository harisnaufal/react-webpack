import React, { Component } from 'react';
import { Route } from 'react-router';

import Header from './components/header/HeaderMenu';

// Pages
import HomePage from './pages/home/Home';

class Routes extends Component {

    render() {
        return (
            <div>
                <Header />
                <Route exact path="/" component={HomePage}/>
            </div>
        );
    }
}

export default Routes;
