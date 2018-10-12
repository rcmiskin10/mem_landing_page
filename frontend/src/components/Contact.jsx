import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {compose} from 'recompose';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Snackbar from '@material-ui/core/Snackbar';
import ContactForm from './ContactForm';

const styles = {
  
  main: {
    backgroundImage: `url(https://s3.amazonaws.com/miskin-event-management/static/bundles/media/grass.jpg)`,
    backgroundRepeat: "no-repeat",
    minHeight: 200,
    backgroundPosition: "50% 50%",
    backgroundSize: "cover"
  },
  mainText: {
    color: "white",
    paddingTop:100,
    textAlign: "center",
    paddingBottom: 30
  },
  icons: {
    color: "black",
    margin:10,
    fontSize: 50,
  },
  
  caption: {
    color: "#858383",
    marginBottom: 20
  },

  subSection: {
    paddingTop:20,
    paddingBottom: 50,
    backgroundColor: "white",
    
  },
  footer: {
    paddingTop:20,
    minHeight: 50,
    backgroundColor: "#f0f0f0",
    textAlign: "center"
  },
  form: {
    paddingTop:20,
    minHeight: 650,
    backgroundColor: "white",
    
  },
  rowButton: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin:20,
    backgroundColor: "rgb(230, 126, 34)",
    color: "white",
    borderRadius: 0,
  },
};

class About extends Component {
  state = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
    open: false,
    vertical: 'top',
    horizontal: 'center',
    snackMessage: ''
  }
  
  handleChange=(e)=>{
    this.setState(
        {
          [e.target.name]: e.target.value
        }
    )
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    
    this.createContactMessage(this.state.fullName, this.state.email, this.state.phone, this.state.message);
  }

  clearForm = () => {
    this.setState({
      fullName: "",
      email: "",
      phone: "",
      message: ""
    })
  }

  createContactMessage = (fullName, email, phone, message) => {
    
      let headers = {"Content-Type": "application/json"};
      let body = JSON.stringify({
        full_name: fullName, 
        email: email, 
        phone: phone, 
        message: message
      });
      
      fetch("/api/contact/create/message", {headers, body, method: "POST"})
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return {status: res.status, data};
          })
        } else {
          console.log("Server Error!");
          return res;
        }
      })
      .then(res => {
        if (res.status === 201 || res.status === 200) {
          this.clearForm();
          const message = "Success! Thank you for you're interest.";
          this.handleOpen(message);
          return res.data;
        } else  {
          if (res.data.non_field_errors) {
            let message = res.data.non_field_errors[0];
            this.handleOpen(message);
          } else if (res.data.email){
            let message = res.data.email[0];
            this.handleOpen(message);
          } else if (res.data.phone){
            let message = res.data.phone[0];
            this.handleOpen(message);
          } else {
            this.handleOpen("Something went wrong.");
          }
          
          return res.data
        }
      })
    
  }
  handleOpen = (message) => {
    this.setState({ open: true, snackMessage: message });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount = () => {
    document.body.style.overflowX = 'hidden'// Set the style
    window.scrollTo(0, 0)
    
  }
  render() {
    const { classes } = this.props;
    const { vertical, horizontal, open, snackMessage } = this.state;
    

    return (
      <div style={{margin:'0px'}}>
      	<Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{snackMessage}</span>}
        />
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <div className={classes.main}>
              <Typography className={classes.mainText} variant="display1">
              Contact Miskin Event Management Today!
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid justify="center"  style={{textAlign:"center", paddingTop:50}} container spacing={0}>
          <Grid item xs={12}>
            <Typography variant="display1">
              Get in touch today!
            </Typography>
          </Grid>
        </Grid>
        <Grid style={{paddingTop:50}} justify="center" container spacing={0}>
          <Grid item xs={8}>
            <ContactForm
              {...this.state}
              handleFormSubmit={this.handleFormSubmit} 
              handleChange={this.handleChange}
            />
          </Grid>
        </Grid>
        
        <Grid className={classes.footer} style={{paddingTop:50}} justify="center" container spacing={0}>
          <Grid className={classes.caption} item lg={12} md={12} sm={12} xs={12} >
            <FontAwesomeIcon className={classes.icons} icon={['fab', 'facebook']} />
            <FontAwesomeIcon className={classes.icons} icon={['fab', 'twitter']} />
            <FontAwesomeIcon className={classes.icons} icon={['fab', 'linkedin']} />
          </Grid>
          <Grid className={classes.caption} item lg={12} md={12} sm={12} xs={12} >
            <Typography  variant="caption">
                © 2018 Miskin Event Management LLC.
            </Typography>
          </Grid>
        </Grid> 
      </div>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles, {
  name: 'About',
}), withWidth())(About);