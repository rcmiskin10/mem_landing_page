import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {compose} from 'recompose';
import withWidth from '@material-ui/core/withWidth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  mainLink: {
    fontSize: 25,
    margin:10
  },
  navLink: {
    margin:10
  },
  bigAvatar: {
    width:100,
    height:50
  }
 
};

class NavBar extends Component {
  state = {
    anchorEl: null,
    isTop: true,
    pathName: "",
    link: null

  };
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ 
        link: this.props.location.pathname === "/" ? "home" : this.props.location.pathname.substr(1) 
      });
    }
  }
  componentDidMount = () => {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 25;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
    
  }
  
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleRedirect = (link) => {
    this.setState({ 
      anchorEl: null,
      link: link
    });
    if(link==="home"){
      this.props.history.push("/");
    }else if(link==="about"){
      this.props.history.push("/about");
    } else if (link==="services"){
      this.props.history.push("/services");
    } else if (link==="team"){
      this.props.history.push("/team");
    } else if (link==="contact"){
      this.props.history.push("/contact");
    }
  }

  render() {
    const { classes } = this.props;
    return (
        <div>
            <AppBar style={{ marginBottom:'0px', paddingBottom:'0px', background: this.state.isTop ? 'transparent' : 'rgba(230, 126, 34, .95)', boxShadow: 'none'}} position="fixed">
              <Toolbar>
                {this.props.width === "xs" ? (
                  <div>
                    <IconButton 
                      aria-owns={this.state.anchorEl ? 'simple-menu' : null}
                      aria-haspopup="true"
                      onClick={this.handleClick}
                      color="inherit" aria-label="Menu"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                      id="simple-menu"
                      anchorEl={this.state.anchorEl}
                      open={Boolean(this.state.anchorEl)}
                      onClose={this.handleClose}
                    >
                      <MenuItem  onClick={() => this.handleRedirect("about")} color="inherit">About</MenuItem>
                      <MenuItem  onClick={() => this.handleRedirect("services")} color="inherit">Services</MenuItem>
                      <MenuItem  onClick={() => this.handleRedirect("team")} color="inherit">Our Team</MenuItem>
                      <MenuItem  onClick={() => this.handleRedirect("contact")} color="inherit">Get in Touch</MenuItem>
                    </Menu>

                    <Button className={classes.mainLink} onClick={() => this.handleRedirect("home")} color="inherit">
                      <Avatar
                        alt="event creation"
                        src="https://s3.amazonaws.com/miskin-event-management/static/bundles/media/logo_blue.png"
                        className={ classes.bigAvatar}
                      />
                    </Button>
                  </div>
                ) : (
                  <Grid justify="center" container spacing={0}>
                    <Grid style={{textAlign:"center"}} item xs={12}>
                      <Button className={classes.mainLink} onClick={() => this.handleRedirect("home")} color="inherit">
                        <Avatar
                          alt="event creation"
                          src="https://s3.amazonaws.com/miskin-event-management/static/bundles/media/logo_blue.png"
                          className={ classes.bigAvatar}
                        />
                      </Button>
                      <Button style={{backgroundColor: this.state.link === "about" ? "rgba(0, 83, 115, .95)": "transparent"}} className={classes.navLink} onClick={() => this.handleRedirect("about")} color="inherit">About</Button>
                      <Button style={{backgroundColor: this.state.link === "services" ? "rgba(0, 83, 115, .95)": "transparent"}} className={classes.navLink} onClick={() => this.handleRedirect("services")} color="inherit">Services</Button>
                      <Button style={{backgroundColor: this.state.link === "team" ? "rgba(0, 83, 115, .95)": "transparent"}} className={classes.navLink} onClick={() => this.handleRedirect("team")} color="inherit">Our Team</Button>
                      <Button style={{backgroundColor: this.state.link === "contact" ? "rgba(0, 83, 115, .95)": "transparent"}} className={classes.navLink} onClick={() => this.handleRedirect("contact")} color="inherit">Get in Touch</Button>
                    </Grid>
                  </Grid>
                )}
              </Toolbar>
            </AppBar>
        </div>
    )
  }
}
NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles, {
  name: 'NavBar',
}), withRouter, withWidth())(NavBar);