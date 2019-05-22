import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';
import Header from '../components/Header';
import configureStore from '../store';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
const initialState = {
    path: '/'
}

const reduxStore = configureStore(initialState);

class Index extends Component {
    render() {
        return (
            <Provider store={reduxStore}>
                <BrowserRouter>
                    <Header />
                    <Routes />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default Index;
