import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import {EventLogicContext} from '../eventlogic/EventLogic';

function Metricsboard(props) {
  return (
    <Card>
      <CardContent>
      <EventLogicContext.Consumer>
        {values => {
        return (
          <React.Fragment>
            <Typography variant="h7" color="textSecondary" gutterBottom>
              WPM
            </Typography>
            <Typography variant="h7" component="h3">
            { Math.floor(values.metrics.WPM) }
            </Typography>

            <Typography variant="h7" color="textSecondary" gutterBottom>
              CPM
            </Typography>
            <Typography variant="h7" component="h3">
            { Math.floor(values.metrics.CPM) }
            </Typography>


            <Typography variant="h7" color="textSecondary" gutterBottom>
            Accuracy
            </Typography>
            <Typography variant="h7" component="h3">
            { Math.floor( values.metrics.Accuracy) }
            </Typography>
            {/* rawmetrics */}

            </React.Fragment>
          )
        }}
      </EventLogicContext.Consumer>
      </CardContent>
    </Card>
    );
}

export default Metricsboard;



