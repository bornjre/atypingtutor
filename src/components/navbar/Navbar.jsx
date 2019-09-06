import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Container, Button,IconButton, Badge, Grid } from '@material-ui/core';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import {ControlContext} from '../eventlogic/EventLogic'; 




function Navbar(props) {
  return (
  <React.Fragment>
    <AppBar position="static" color="default" elevation={0} >
      <Toolbar>
        <Container component="main">
        <Typography variant="h6" color="inherit" noWrap >
         TYPING TUTOR
        </Typography>
        
        </Container>
        <ControlContext.Consumer >
          {values => {
            return (
              <React.Fragment>
              <IconButton color="inherit" onClick={values.start}>
              <PlayArrowRoundedIcon/>
              </IconButton>
    
              <IconButton color="inherit" onClick={values.stop}>
              <StopRoundedIcon/>
              </IconButton>
              </React.Fragment>
            )

          }}
        </ControlContext.Consumer>
        </Toolbar>
        </AppBar>
      </React.Fragment>
  )}

export default Navbar;
