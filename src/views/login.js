import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { setHeaders } from '../lib/api';
import { setPath, setAuth } from '../store/actions';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    padding: `${theme.spacing(2)}px`,
    // marginLeft: theme.spacing.unit * 3,
    // marginRight: theme.spacing.unit * 3,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  buttons: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
  },
});

// const PathsLink = props => <Link to="/paths" {...props} />

const mapStateToProps = state => ({
  path: state.path,
  loggedIn: false,
  user: {},
});

const mapDispatchToProps = dispatch => ({
  setPath: path => dispatch(setPath(path)),
  setAuth: (loggedIn, user) => dispatch(setAuth(loggedIn, user)),
});

class LogIn extends Component {
    state = {
      email: '',
      password: '',
    }

    componentDidMount() {
      // console.log(this.props);
      /*
        axios.get('http://localhost:8000/api/paths')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log('dcm error', error);
            });
        */
    }

    handleLogin = () => {
      // console.log('login button event: ', event);
    }

    handleSubmit = (event) => {
      const { email, password } = this.state;
      // console.log('props is: ', this.props);
      axios.post('http://localhost:8000/oauth/token', {
        username: email,
        password,
        grant_type: 'password',
        client_id: 'Qpkk94pMCnsHCNCHJk7KqRwmsmPtqn8k',
        client_secret: '2uVw5icCjbqw4zRKdgoe2o55gfl21kBzrbNAUW1ghIqtNylkazSdKHK2xxvQlRnm',
      })
        .then(async (response) => {
          console.log(response.data);
          await setHeaders(response.data.access_token);
          // this.props.history.push('/paths');
          // this.props.setAuth(true, response.data.user);
        })
        .catch((error) => {
          throw error;
          // console.log('dcm error', error);
        });
      event.preventDefault();
    }

    handleInputChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }

    render() {
      const { classes } = this.props;
      return (
        <main className={classes.main}>
          <CssBaseline />
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h6">
                Log In
          </Typography>
          <form className="form" onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.handleInputChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleInputChange}
              />
            </FormControl>
            <FormControl margin="dense" fullWidth>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="submit"
                onClick={this.handleSubmit}
              >
                      Login
              </Button>
            </FormControl>
            <div className={classes.buttons}>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  alert("I'm a button.");
                }}
              >
                      Forgot Password?
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  alert("I'm a button.");
                }}
              >
                      Sign Up
              </Link>
            </div>
          </form>
        </main>
      );
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(LogIn));
