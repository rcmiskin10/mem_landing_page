import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

export default class Example extends Component {

  render() {

    return (
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <p>Boilerplate!!!</p>
            </Grid>
        </Grid>
    )
  }
}