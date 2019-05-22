import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import ACTIONS from '../store/actions';
import LogIn from '../views/login';
import Paths from '../views/paths';

const mapStateToProps = state => ({
    path: state.path
});

const mapDispatchToProps = dispatch => ({
    setPath: path => dispatch(ACTIONS.setPath(path)),
});

const styles = theme => ({
    demo: {
        backgroundColor: theme.palette.background.paper
    },
});

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={LogIn} />
                <Route path="/paths" component={Paths} />
            </Switch>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Routes));
