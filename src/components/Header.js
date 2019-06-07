import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
    AppBar,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const mapStateToProps = state => ({
    path: state.path
});

const PathLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/paths" {...props} />
));

class MenuAppBar extends React.Component {
    state = {
        auth: false,
        anchorElPages: null,
        anchorElProfile: null,
    };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handlePagesMenu = event => {
    this.setState({ anchorElPages: event.currentTarget });
  };

  handleProfileMenu = event => {
    this.setState({ anchorElPages: event.currentTarget });
  };

  handleClose = () => {
      this.setState({ 
          anchorElPages: null,
          anchorElProfile: null,
      });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorElPages, anchorElProfile } = this.state;
      const pageOpen = Boolean(anchorElPages);
      const profileOpen = Boolean(anchorElProfile);

    return (
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar>
              <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={this.handlePagesMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorElPages}
                keepMounted
                open={Boolean(anchorElPages)}
                onClose={this.handleClose}
              >
                    <Router>
                        <MenuItem
                            component={PathLink}
                        >Browse Paths</MenuItem>
                    </Router>
              </Menu>
            <Typography variant="h6" color="inherit" className={classes.grow}>
                Rete Academy
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={profileOpen ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElProfile}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={profileOpen}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    null
)(withStyles(styles)(MenuAppBar));

