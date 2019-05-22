import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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
import ACTIONS from '../store/actions';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
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

const PathsLink = props => <Link to="/paths" {...props} />

const mapStateToProps = state => ({
    path: state.path
});

const mapDispatchToProps = dispatch => ({
    setPath: path => dispatch(ACTIONS.setPath(path)),
});

class LogIn extends Component {
    handleClick = event => {
        console.log('props is: ', this.props);
        console.log('event is: ', event);
        this.props.setPath('/paths');
    }

    render() {
      return (
        <main className="main">
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
              <FormControl margin="normal" required fullWidth>
                  <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                  />
              </FormControl>
              <FormControl margin="dense">
                  <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      className="submit"
                      component={PathsLink} // why I can not simply use like this?
                      onClick={this.handleClick}
                  >
                      Log In
                  </Button>
              </FormControl>
            </form>
        </main>
      );
    }
}

// export default withStyles(styles)(LogIn);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(LogIn));
