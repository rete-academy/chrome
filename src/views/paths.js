/* global chrome */
import React from 'react';
// import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Button from '@material-ui/core/Button';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    padding: `${theme.spacing(2)}px`,
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
  submit: {
  },
});

const Paths = () => {
  chrome.storage.sync.get(['token'], (result) => {
    console.log(`Value currently is ${result.token}`);
  });

  return (
    <main className={styles.main}>
      <CssBaseline />
      <Avatar className={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <h6>Paths</h6>
    </main>
  );
};

Paths.propTypes = {
};

Paths.defaultProps = {
};

export default withStyles(styles)(Paths);
