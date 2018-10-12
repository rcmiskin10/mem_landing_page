import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventCreation from '../images/event_creation.png';
import GrowEvent from '../images/grow_event.png';
import { withStyles } from '@material-ui/core/styles';
import {compose} from 'recompose';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    minHeight: 400,
    backgroundColor: "white",
    
  },
  pillarsSection: {
    paddingTop:20,
    minHeight: 575,
    backgroundColor: "white",
    
  },
  footer: {
    paddingTop:20,
    minHeight: 50,
    backgroundColor: "#f0f0f0",
    textAlign: "center"
  },
  rowAvatar: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 0,
    boxShadow:'none'
  },
  bigAvatar: {
    margin:10,
    width: 200,
    height: 200,
    
  },
  chip: {
    margin:10,
    color: "white",
    backgroundColor: "#00658b"
    
  },
};

class Services extends Component {
  state = {
    
  }

  componentDidMount = () => {
    document.body.style.overflowX = 'hidden'// Set the style
    window.scrollTo(0, 0)
  }
  render() {
    const { classes } = this.props;
    

    return (
      <div style={{margin:'0px'}}>
      
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.main}>
            <Typography className={classes.mainText} variant="display1">
            What can Miskin Event Management do for you?
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid justify="center"  style={{textAlign:"center", paddingTop:50}} container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="display1">
            Our Services
          </Typography>
        </Grid>
      </Grid>
      <Grid justify="center" style={{textAlign:"center"}} container spacing={0}>
        <Grid style={{ margin: 20}} item lg={8} md={8} sm={12} xs={12}>
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
          <Typography style={{paddingTop: 20}}>
            Work with MEM to help strategically plan and organize your sporting event. 
            We work with all clients to understand every aspect of your vision and goals for your individual event.
          </Typography>
          <Typography style={{fontWeight:500, marginLeft:50, marginRight:50, paddingTop: 20}}>
            We know every detail and action that needs to be done in order to jump-start an excellent event. 
            Here are just a few that we will execute for your event:
          </Typography>
        </Grid>
      </Grid>
      
      <Grid container justify="center" spacing={0}>
        <Grid  style={{textAlign:"center"}} item  lg={8} md={8} sm={10} xs={10} >
          <Chip label="Contract Venues" className={classes.chip} />
          <Chip label="Software Management" className={classes.chip} />
          <Chip label="Hotel Management" className={classes.chip} />
          <Chip label="Logo Creation" className={classes.chip} />
          <Chip label="Athletic Trainers" className={classes.chip} />
          <Chip label="Vendors/Sponsorship" className={classes.chip} />
          <Chip label="Seeding/Scheduling" className={classes.chip} />
          <Chip label="Financial Management" className={classes.chip} />
          <Chip label="Referee Management" className={classes.chip} />
          <Chip label="Website Creation" className={classes.chip} />
        </Grid>
      </Grid>

      <Divider style={{marginTop:45}}/>

      <Grid justify="center" style={{textAlign:"center"}} container spacing={0}>
        <Grid style={{ margin: 20}} item lg={8} md={8} sm={12} xs={12}>
          <div className={classes.rowAvatar}>
            <Avatar
              alt="grow your event"
              src={GrowEvent}
              className={ classes.bigAvatar}
            />
          </div>

          <Typography style={{color:"#00658b", fontWeight:"bold"}} variant="headline">
            Grow an Existing Event
          </Typography>
          <Typography style={{paddingTop: 20}}>
            Work with MEM to help you strategically expand and grow your event. 
            We will look at the current landscape of your event and come up with the best approach to take your event to the next level. 
          </Typography>
          <Typography style={{fontWeight:500, marginLeft:50, marginRight:50, paddingTop: 20}}>
            We have several approaches and strategies gained through our experience in the industry. 
            Here are just a few strategies we could implement:
          </Typography>

        </Grid>
      </Grid>

      <Grid container justify="center" spacing={0}>
        <Grid  style={{textAlign:"center"}} item  lg={8} md={8} sm={10} xs={10} >
          <Chip label="Corporate Partnerships" className={classes.chip} />
          <Chip label="Creating New Segment(s)" className={classes.chip} />
          <Chip label="City/Town Partnership(s)" className={classes.chip} />
          <Chip label="Event Marketing" className={classes.chip} />
          <Chip label="Branding" className={classes.chip} />
        </Grid>
      </Grid>

      <Divider style={{marginTop:45}}/>

      <Grid justify="center" style={{textAlign:"center"}} container spacing={0}>
        <Grid style={{ margin: 20}} item lg={8} md={8} sm={12} xs={12}>
          <div className={classes.rowAvatar}>
            <Avatar
              alt="full-service management"
              src="https://s3.amazonaws.com/miskin-event-management/static/bundles/media/event_management.png"
              className={ classes.bigAvatar}
            />
          </div>
          <Typography style={{color:"#00658b", fontWeight:"bold"}} variant="headline">
            Full Event Management
          </Typography>
          <Typography style={{paddingTop: 20}}>
            Let MEM create, organize, and execute your sporting event. 
            Come to us with a vision and goal in mind, and sit back and watch our team create a magnificent event under your name.
          </Typography>
          <Typography style={{fontWeight:500, marginLeft:50, marginRight:50, paddingTop: 20}}>
            Come to us with a vision and an end goal and we will take care of the rest:
          </Typography>

        </Grid>
      </Grid>

      <Grid style={{paddingBottom:45}} container justify="center" spacing={0}>
        <Grid  style={{textAlign:"center"}} item  lg={8} md={8} sm={10} xs={10} >
          <Chip label="Event Sanctioning" className={classes.chip} />
          <Chip label="Select/Contract w/ Best Venues" className={classes.chip} />
          <Chip label="Setup Schedule/Application Software" className={classes.chip} />
          
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

Services.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles, {
  name: 'Services',
}), withWidth())(Services);