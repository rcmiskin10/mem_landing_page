import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import EventCreation from '../images/event_creation.png';
import GrowEvent from '../images/grow_event.png';
import { withStyles } from '@material-ui/core/styles';
import {withRouter} from "react-router-dom";
import {compose} from 'recompose';
import withWidth from '@material-ui/core/withWidth';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from '@material-ui/core/Grid';
import Img from 'react-image'

const styles = {
  
  main: {
    backgroundImage: `url(https://s3.amazonaws.com/miskin-event-management/static/bundles/media/soccer.jpg)`,
    backgroundRepeat: "no-repeat",
    height: 750,
    backgroundPosition: "50% 50%",
    backgroundSize: "cover",
    width: "100%",
    margin:0,
    padding:0,
    
  },
  services: {
    paddingTop:20,
    minHeight: 650,
    backgroundColor: "white",
  },

  form: {
    paddingTop:20,
    minHeight: 500,
    backgroundColor: "white",
    
  },

  team: {
    paddingTop:20,
    minHeight: 500,
    backgroundColor: "#e8ecf8",
  },

  footer: {
    paddingTop:20,
    minHeight: 50,
    backgroundColor: "#f0f0f0",
    textAlign: "center"
  },
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(153, 140, 75, 0.32)',
  },
  mainText: {
    color: "white",
    
    fontSize: "2.5em",
    textAlign: "center",

    
  },
  
  servicesTitle: {
    color: "#858383",
    margin: 10
  },
  bigAvatar: {
    margin:10,
    width: 100,
    height: 100,
    
  },
  logo: {
    width: 400,
    height: 400,
  
    
  },
  rowAvatar: {
    display: 'flex',
    justifyContent: 'center',
  },
  rowButton: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
  
    backgroundColor: "rgb(230, 126, 34)",
    color: "white",
    borderRadius: 0,
    marginBottom:40
  },
  teamButton: {
    
    backgroundColor: "rgb(230, 126, 34)",
    color: "white",
    borderRadius: 0,
  },
  card: {
    borderRadius: 0,
    boxShadow:'none',
    textAlign: "center"
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
  media: {
    height: 250,
    width:250
  },
  cardImage:{
    
  }

};

class Home extends Component {
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

  learnMore = (page) => {
    if(page==="team"){
      this.props.history.push("/team");
    } else if (page==="services"){
      this.props.history.push("/services");
    }
  }
  componentDidMount = () => {
    document.body.style.overflowX = 'hidden'// Set the style
    window.scrollTo(0, 0)
    
  }

  render() {
    const { classes } = this.props;
    const { vertical, horizontal, open, snackMessage } = this.state;

    return (
    <div style={{marginTop:'0px', paddingTop:'0px'}}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{snackMessage}</span>}
      />
      
      
        <div className={classes.main}>
          <div className={classes.overlay}>
             
            <div style={{paddingTop:50}}>
              <div className={classes.rowAvatar}>
                <Img
                  style={{width:400,height:400}}
                  src="https://s3.amazonaws.com/miskin-event-management/static/bundles/media/logo_orange.png"
                />
              </div> 
            
            
            <Typography className={classes.mainText}>
              Miskin Event Management
            </Typography>   

             </div>          
              
          </div>
        </div>
      
      <Grid style={{paddingTop:50}} container spacing={0}>
      
        <Grid item xs={12}>
          <Typography style={{ marginBottom:30, textAlign:"center", fontSize:"2em"}} variant="display1">
              Our Services
          </Typography>
        </Grid>  
        <Grid item xs={12} sm={12} md={4} lg={4}   >
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.rowAvatar}>
                <Avatar
                  alt="event creation"
                  src={EventCreation}
                  className={ classes.bigAvatar}
                />
              </div>
              <Typography style={{color:"#00658b", fontWeight:"bold"}} variant="subheading">
              Event Creation
              </Typography>
              <Typography style={{height:140}} component="p">
                Interested in creating your own sports tournament? 
                Work with MEM to help strategically plan and organize your sporting event. 
                We work with all clients to understand every aspect of their their individual event.
              </Typography>
            </CardContent>
            <CardActions className={classes.rowButton}>
              <Button onClick={() => {this.learnMore("services")}} variant="contained" className={classes.button}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.rowAvatar}>
                <Avatar
                  alt="grow your event"
                  src={GrowEvent}
                  className={ classes.bigAvatar}
                />
              </div>
              <Typography style={{color:"#00658b", fontWeight:"bold"}} variant="subheading">
              Grow Your Event
              </Typography>
              <Typography style={{height:140}} component="p">
                Do you have an existing sporting event, but want to take it to the next level? 
                Work with MEM to help you strategically expand and grow and watch your profit margin increase. 
              </Typography>
            </CardContent>
            <CardActions className={classes.rowButton}>
              <Button onClick={() => {this.learnMore("services")}} variant="contained" className={classes.button}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.rowAvatar}>
                <Avatar
                  alt="full-service management"
                  src="https://s3.amazonaws.com/miskin-event-management/static/bundles/media/event_management.png"
                  className={ classes.bigAvatar}
                />
              </div>
              <Typography style={{color:"#00658b", fontWeight:"bold"}} variant="subheading">
              Full-service Management
              </Typography>
              <Typography style={{height:140}} component="p">
              Let MEM create, organize, and execute your sporting event. 
              Come to us with a vision and goal in mind, and sit back and watch our team create a magnificent event under your name.
              </Typography>
            </CardContent>
            <CardActions className={classes.rowButton}>
              <Button onClick={() => {this.learnMore("services")}} variant="contained" className={classes.button}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid style={{paddingTop:50, backgroundColor:"#e8ecf8"}} justify="center" container spacing={0}>
        
            <Grid item style={{margin:50, textAlign: "left"}} lg={4} md={4} sm={10} xs={10}>
              <Typography  style={{paddingTop: 40, paddingBottom: 40 }} variant="display1">
                  Our Team
              </Typography>
              <Typography  style={{paddingBottom: 25 }} component="p">
                Let MEM create, organize, and execute your sporting event. 
                Come to us with a vision and goal in mind, and sit back and watch our team create a magnificent event under your name.
              </Typography>
              <Button onClick={() => {this.learnMore("team")}} variant="contained" className={classes.teamButton}>
                Learn More
              </Button>
            </Grid>
            <Grid style={{margin:30}} item lg={4} md={4} sm={10} xs={10}>
              <img style={{textAlign:"center", paddingTop:40}} height="80%" width="100%" alt="desk" src="https://s3.amazonaws.com/miskin-event-management/static/bundles/media/business.jpg"/>
            </Grid>
          
        
      </Grid>

      <Grid style={{paddingTop:50}} justify="center" container spacing={0}>
        
        <Grid item xs={12}>
          <Typography style={{ marginTop:50, marginBottom:30, textAlign:"center"}} variant="display1" >
              Get In Touch Today
          </Typography>
        </Grid>
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

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles, {
  name: 'Home',
}), withRouter, withWidth())(Home);