import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from './Signin';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Signin />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

