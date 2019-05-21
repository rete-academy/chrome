import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Login from '../views/login';
import Header from './Header';
import './App.scss';

function App() {
    console.log(window.localStorage.setItem('test', 'demo'))
    return (
        <div className="App">
            <Header />
            <Login />
        </div>
    );
}

export default App;
