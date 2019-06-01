import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { setPath, setAuth } from '../store/actions';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        padding: `${theme.spacing.unit * 2}px`,
        // marginLeft: theme.spacing.unit * 3,
        // marginRight: theme.spacing.unit * 3,
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        // marginTop: theme.spacing.unit * 3,
    },
});

// const PathsLink = props => <Link to="/paths" {...props} />

const mapStateToProps = state => ({
    path: state.path,
    loggedIn: state.loggedIn,
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    setPath: path => dispatch(setPath(path)),
    setAuth: (loggedIn, user) => dispatch(setAuth(loggedIn, user)),
});

class LogIn extends Component {
    handleLogin = event => {
        console.log('props is: ', this.props);
        console.log('event is: ', event);
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/paths')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log('dcm error', error);
            });
    }

    render() {
      const { classes } = this.props
      return (
        <main className={classes.main}>
            <CssBaseline />
            <Avatar className="avatar">
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h6">
                Log In
            </Typography>
            <form className="form">
              <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input id="email" name="email" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
              </FormControl>
              <FormControl margin="dense">
                  <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      className="submit"
                      onClick={this.handleLogin}
                  >
                      Login
                  </Button>
              </FormControl>
            </form>
        </main>
      );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(LogIn));
