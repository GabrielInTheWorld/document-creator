import React from 'react';

import Document from './components/document/Document';

import './App.css';
import AuthHandler from './components/auth/AuthHandler';

function App() {
    return (
        <div className="App">
            <AuthHandler />
            <Document />
        </div>
    );
}

export default App;
