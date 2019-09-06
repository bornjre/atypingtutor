import React from 'react';
import Metricsboard from './Metricsboard';
import Sentenceboard from './Sentenceboard';
import {Container, Button,IconButton, Badge, Grid, Paper } from '@material-ui/core';


function Showboard(props) {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
          <Paper>
            <Metricsboard metrics={{wpm:0}}></Metricsboard>
          </Paper>
      </Grid>
      <Grid item xs={10}>
        <Paper>
          <Sentenceboard></Sentenceboard>
        </Paper>
      </Grid>
    </Grid>
    );
  }

export default Showboard;

/*

      <Grid item xs={4}>
        <Paper>
          <Chartboard></Chartboard>
        </Paper>
      </Grid>

*/