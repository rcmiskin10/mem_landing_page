import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {compose} from 'recompose';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

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
    width: 100,
    height: 100,
    
  },
};

class About extends Component {
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
              What is Miskin Event Management?
            </Typography>
          </div>
        </Grid>
      </Grid>
        
      <Grid justify="center" className={classes.subSection} style={{textAlign:"center", paddingTop:50}} container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="display1">
            Our Mission
          </Typography>
        </Grid>
        <Grid style={{ margin: 20, marginTop:50}} item xs={12} sm={12} md={6} lg={6}>
          <Typography component="p">
            We want to help organizations, foundations and professionals develop a vision and long term goal regarding 
            a specific sports tournament. From there we want to make that vision become a reality through following our 
            guidelines and philosophy. Depending on your specific vision we will come up with the best strategy to successfully 
            capture the goals you have set.
          </Typography>
          <Typography style={{paddingTop:40}} component="p">
            Miskin Event Management was created based off of years of experience in the soccer tournament industry. 
            The experience comes from a family and staff who have been in charge of running one of the oldest, and at one time 
            the largest single weekend tournament in the country. Leading the MEM team is Mark Miskin. Mark has been 
            tournament Director for 10+ years at the Needham Memorial Day Tournament. His expertise and passion in the youth sports 
            industry has made him one of the most knowledgeable directors in growing and expanding tournaments; while maintaining the quality a tournament demands. 
            The MEM philosophy is designed around 5 pillars that make up a fantastic tournament experience for the player, coach, and family. ​
          </Typography>
        </Grid>
        <Grid justify="center" className={classes.subSection} style={{textAlign:"center", paddingTop:50,}} container spacing={0}>
          <Grid className={classes.pillarsSection} item xs={12}>
            <Typography style={{paddingTop:40}} variant="display1">
                Our 5 Pillars to an Exceptional Tournament
            </Typography>
          </Grid>
          <Grid style={{ display: 'flex', justifyContent: 'center', marginTop:30}} item lg={2} md={2} sm={12} xs={12}>
            
            <Card className={classes.card}>
              <CardContent>
                <div style={{minHeight:60}}>
                <Typography gutterBottom variant="subheading" component="h2">
                Excellent Fields
                </Typography>
                </div>
                <div className={classes.rowAvatar}>
                  <Avatar
                    alt="Excellent Fields"
                    src={"https://s3.amazonaws.com/miskin-event-management/static/bundles/media/column.png"}
                    className={ classes.bigAvatar}
                  />
                </div>
                <Typography style={{minHeight:50}} component="p">
                  Excellent grass or artificial fields that create a tournament atmosphere as well
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid style={{ display: 'flex', justifyContent: 'center', marginTop:30}} item lg={2} md={2} sm={12} xs={12}>
            <Card className={classes.card}>
              <CardContent>
              <div style={{minHeight:60}}>
                <Typography gutterBottom variant="subheading" component="h2">
                Expierenced Refferees
                </Typography>
                </div>
                <div className={classes.rowAvatar}>
                  <Avatar
                    alt="Expierenced Refferees"
                    src={"https://s3.amazonaws.com/miskin-event-management/static/bundles/media/column.png"}
                    className={ classes.bigAvatar}
                  />
                </div>
                <Typography style={{minHeight:50}} component="p">
                  Experienced referees who know how to manage a competitive weekend tournament
                </Typography>
              </CardContent>
              
            </Card>
          </Grid>
          <Grid style={{ display: 'flex', justifyContent: 'center', marginTop:30}} item lg={2} md={2} sm={12} xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <div style={{minHeight:60}}>
                  <Typography gutterBottom variant="subheading" component="h2">
                    Knowledgeable Staff
                  </Typography>
                </div>
                <div className={classes.rowAvatar}>
                  <Avatar
                    alt="Knowledgeable Staff"
                    src={"https://s3.amazonaws.com/miskin-event-management/static/bundles/media/column.png"}
                    className={classes.bigAvatar}
                  />
                </div>
                <Typography style={{minHeight:50}} component="p">
                  Knowledgeable tournament staff from director all the way down to the volunteer staff
                </Typography>
              </CardContent>
              
            </Card>
          </Grid>
          <Grid style={{ display: 'flex', justifyContent: 'center', marginTop:30}} item lg={2} md={2} sm={12} xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <div style={{minHeight:60}}>
                  <Typography gutterBottom variant="subheading" component="h2">
                    Affordable Hotels
                  </Typography>
                </div>
                <div className={classes.rowAvatar}>
                  <Avatar
                    alt="Affordable Hotels"
                    src={"https://s3.amazonaws.com/miskin-event-management/static/bundles/media/column.png"}
                    className={ classes.bigAvatar}
                  />
                </div>
                
                <Typography style={{minHeight:50}} component="p">
                  Quality and affordable hotels near all field locations
                </Typography>
              </CardContent>
              
            </Card>
          </Grid>
          <Grid style={{ display: 'flex', justifyContent: 'center', marginTop:30}} item xs={12} lg={2} md={2} sm={12}>
            <Card className={classes.card}>
              <CardContent>
                <div style={{minHeight:60}}>
                  <Typography gutterBottom variant="subheading" component="h2">
                    Great Weather
                  </Typography>
                </div>
                <div className={classes.rowAvatar}>
                  <Avatar
                    alt="Great Weather"
                    src={"https://s3.amazonaws.com/miskin-event-management/static/bundles/media/column.png"}
                    className={ classes.bigAvatar}
                  />
                </div>
                
                <Typography style={{minHeight:50}} component="p">
                  Fantastic sports weather, which unfortunately we cannot control
                </Typography>
              </CardContent>
              
            </Card>
          </Grid>

      </Grid>
      
      </Grid>
      <Grid className={classes.footer} style={{paddingTop:50}} justify="center" container spacing={0}>
        <Grid className={classes.caption} item lg={12} md={12} sm={12} xs={12} >
          <a target="_blank" href="https://www.linkedin.com/company/miskin-event-management-llc/"><FontAwesomeIcon className={classes.icons} icon={['fab', 'facebook']} /></a>
          <a target="_blank" href="https://www.linkedin.com/company/miskin-event-management-llc/"><FontAwesomeIcon className={classes.icons} icon={['fab', 'twitter']} /></a>
          <a target="_blank" href="https://www.linkedin.com/company/miskin-event-management-llc/"><FontAwesomeIcon className={classes.icons} icon={['fab', 'linkedin']} /></a>
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