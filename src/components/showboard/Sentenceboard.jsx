import React from 'react';
import {EventLogicContext, STOPPED, RUNNING, FINISHED} from '../eventlogic/EventLogic';
import { Card, Typography, CardContent } from '@material-ui/core';
 

export default class Sentenceboard extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <EventLogicContext.Consumer>
        {values => {
          switch (values.sentence.state) {
            case STOPPED:
                return (
                  <Card>
                  <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                      Press Start icon to type your way out
                    </Typography>
                  </CardContent>
                </Card>
                )
            case RUNNING:
                return (
                  <Card>
                  <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                      Sentence
                    </Typography>
                    <Typography variant="h5" component="h2"> <span  className="done"> { values.sentence.doneSentence}</span>
                    <span className="current"> { values.sentence.nextChar }</span>
                    { values.sentence.otherSentence}
                    </Typography>
                  </CardContent>
                </Card>
                )
            case FINISHED:
                return (
                  <Card>
                  <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                    Finished. Press Start icon to try again.
                    </Typography>>
                  </CardContent>
                </Card>
                )
          }
            }
          }
      </EventLogicContext.Consumer>
    )}
}