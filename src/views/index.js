import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Routes from '../routes';
import Header from '../components/Header';
import configureStore from '../store/index';
import reteTheme from '../theme';
const initialState = {
    path: '/'
}

const reduxStore = configureStore(initialState);

class Index extends Component {
    render() {
        return (
            <MuiThemeProvider theme={reteTheme}>
                <Provider store={reduxStore}>
                    <BrowserRouter>
                        <Header />
                        <Routes />
                    </BrowserRouter>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default Index;
