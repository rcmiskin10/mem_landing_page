import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  
  input: {
    margin: 10
  },

  sendButton: {
    margin:20,
    backgroundColor: "rgb(230, 126, 34)",
    color: "white",
    borderRadius: 0,
    marginBottom:60
  },
  rowSendButton: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const ContactForm = (props) => {

    const { classes } = props;
    return (
      <div>
         <Grid justify="center" container spacing={8}>
          <Grid item lg={6} md={6} sm={12} xs={12} >
            <TextField
              value={props.fullName}
              label="Full Name"
              onChange={(e) => props.handleChange(e)}
              name="fullName"
              className={classes.input}
              fullWidth={true}
              helperText="Please enter a full name."
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} >
            <TextField
              value={props.email}
              label="Email"
              onChange={(e) => props.handleChange(e)}
              name="email"
              className={classes.input}
              fullWidth={true}
              helperText="Please enter an email."
            />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} >
            <TextField
              value={props.phone}
              label="Phone #"
              onChange={(e) => props.handleChange(e)}
              name="phone"
              className={classes.input}
              fullWidth={true}
              helperText="Please enter a phone #."
            />
          </Grid>
        
        <Grid item lg={12} md={12} sm={12} xs={12} >
            <TextField
              value={props.message}
              label="Message"
              onChange={(e) => props.handleChange(e)}
              name="message"
              className={classes.input}
              fullWidth={true}
              multiline
              rows="3"
              rowsMax="10"
              helperText="Please enter a message."
            />
          </Grid>
        
        
          <Grid item className={classes.rowSendButton} lg={8} md={8} sm={8} xs={12}>
            <Button fullWidth={true} className={classes.sendButton} onClick={(e) => props.handleFormSubmit(e)} variant="contained">
              Send Message
            </Button>
          </Grid>     
       
        </Grid> 
        </div>
  )
}


ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,


};

export default withStyles(styles)(ContactForm);
