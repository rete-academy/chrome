import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';
// import ACTIONS from '../store/actions'; 
import Header from '../components/Header';
import configureStore from '../store/index';
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
                <Header />
                <Routes />
            </Provider>
        );
    }
}

export default Index;
