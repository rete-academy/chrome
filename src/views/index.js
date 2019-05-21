import React from 'react';
// import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Login from './login';
import Header from '../components/Header';

class Index extends React.Component {
    render() {
        return (
            <HashRouter hashType="noslash">
                <Header />
                <Login />
            </HashRouter>
        );
    }
}

export default Index;
