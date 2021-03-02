import React from 'react';

import Header from './components/Header';
import Facts from './components/Facts';

import './components/css/layout.css'

const App = () => {
    return (
        <div className="container">
            <Header/>
            <Facts/>
        </div>
    )
}

export default App;