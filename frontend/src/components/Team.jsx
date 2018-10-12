import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {compose} from 'recompose';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from 'react-image'
import Divider from '@material-ui/core/Divider';

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
    marginBottom: 20,
    
  },
  subSection: {
    paddingTop:20,
    paddingBottom: 50,
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
    
    width: 200,
    height: 250,
    
  },

};

class Team extends Component {
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
              Who are we?
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid justify="center"  style={{textAlign:"center", paddingTop:75}} container spacing={0}>
          <Grid item style={{marginLeft:10, marginRight:10}} lg={4} md={4} sm={12} xs={12}>
            <Typography variant="subheading" style={{lineHeight:2.1, fontStyle:"italic"}}>
            Our team has 15 years of sports event management experience. 
            Whether that be creating, growing and managing sporting events, we have done it all. 
            We have built up an impressive network of contacts
             within the industry that helps us make our clients 
             events the very best they can be.
            </Typography>
            <Divider style={{marginTop:75, marginBottom:50}}/>
          </Grid>
        </Grid>
        
        <Grid container justify="center" spacing={0}>
          <Grid style={{textAlign:"center", marginLeft:10, marginRight:10, marginTop:45}} item lg={4} md={4} sm={12} xs={12}>
            <div className={classes.rowAvatar}>
              <Img
                src={"https://s3.amazonaws.com/miskin-event-management/static/bundles/media/mmiskin.jpg"}
                className={ classes.bigAvatar}
              />
            </div>
            <Typography variant="headline" style={{ paddingTop: 20}}>
                    Mark Miskin
            </Typography>
            <Typography style={{paddingTop: 20, fontWeight:"bold"}}>
              Chief Executive Officer
            </Typography>
            <Typography style={{paddingTop: 20, }}>
              Mark's experience and knowledge in the sports event industry is second to none. 
              He has been the tournament director of the Needham Memorial Day Tournament, one of the oldest youth sports tournaments in the country, 
              for 10+ years. Mark specializes in the preparation of events, hotel management, and financial management.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={0}>
          <Grid style={{textAlign:"center", marginLeft:10, marginRight:10, marginTop:45}} item lg={4} md={4} sm={12} xs={12}>
            <div className={classes.rowAvatar}>
            <Img
                src={"https://s3.amazonaws.com/miskin-event-management/static/bundles/media/brandon.png"}
                className={ classes.bigAvatar}
              />
            </div>
            <Typography variant="headline" style={{paddingTop: 20}}>
              Brandon Miskin
            </Typography>
            <Typography style={{paddingTop: 20, fontWeight:"bold"}}>
              Chief Strategy Officer
            </Typography>
            <Typography style={{paddingTop: 20}}>
              Brandon is a recent graduate from Brandeis University where he studied business. 
              Throughout his time at Brandeis he interned at the Boston Celtics in their corporate partnerships department. 
              He also has been the business development & marketing coordinator for the Needham Memorial Day Tournament for 2 years. 
              Brandon specializes in growing events through corporate partnerships, sponsors, and overall strategy.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={0}>
          <Grid style={{textAlign:"center", marginTop:45, marginLeft:10, marginRight:10, marginBottom:45}} item lg={4} md={4} sm={12} xs={12}>
            <div className={classes.rowAvatar}>
              <Img
                src={"https://s3.amazonaws.com/miskin-event-management/static/bundles/media/jake_miskin.jpg"}
                className={ classes.bigAvatar}
              />
            </div>
            <Typography variant="headline" style={{paddingTop: 20}}>
              Jake Miskin
            </Typography>
            <Typography style={{paddingTop: 20, fontWeight:"bold"}}>
              Chief Operations Officer
            </Typography>
            <Typography style={{paddingTop: 20}}>
              Jake Graduated from Springfield College where he majored in Sports Management. 
              Jake has had numerous positions within the sports industry including being one the assistant tournament directors for the Needham Memorial Day Tournament; 
              where he oversees the overall logistics and production of the college showcase division. 
              Jake specializes in the operations and production of events along with digital marketing.
            </Typography>
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

Team.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles, {
  name: 'Team',
}), withWidth())(Team);