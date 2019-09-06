import React from 'react';
import Navbar from './navbar/Navbar';
import Showboard from './showboard/Showboard';
import Keyboard from './keyboard/Keyboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Container, Button,IconButton, Badge, Grid } from '@material-ui/core';
import EventLogic from './eventlogic/EventLogic';
import Chartboard from './showboard/Chartboard';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="md" component="main">
        <EventLogic>
            <Navbar/>
            <Grid container spacing={0} >
              <Grid  xs={8}>
                <Showboard/>
                <Keyboard/>
              </Grid>
              <Grid  xs={4}>
                <Chartboard></Chartboard>  
              </Grid>    
            </Grid>
          </EventLogic>
        </Container>
    </React.Fragment>
  )}

export default App;