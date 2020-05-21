import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';
import Work from './components/work/Work';
import About from './components/about/About';
import Cover from './components/Cover';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                {/* <Cover /> */}
                <div id="container">
                    <Nav />
                    <Switch>
                        <Route exact path="/">
                            <Landing />
                        </Route>
                        <Route exact path="/work">
                            <Work />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
