import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import LogIn from '../views/login';
import Paths from '../views/paths';

const mapStateToProps = state => ({
    path: state.path
});

const styles = theme => ({
    demo: {
        backgroundColor: theme.palette.background.paper
    },
});

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LogIn} />
                    <Route path="/paths" component={Paths} />
                    <Route component={LogIn} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default connect(
    mapStateToProps,
    null
)(withStyles(styles)(Routes));
