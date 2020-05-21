import React from 'react';

import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';
import Cover from './components/Cover';

import './App.css';

function App() {
    return (
        <div className="App">
            <Cover />
            <div id="container">
                <Nav />
                <Landing />
                <Footer />
            </div>
        </div>
    );
}

export default App;
