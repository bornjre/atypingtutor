import React from 'react';
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from  'recharts';
import {EventLogicContext} from '../eventlogic/EventLogic'; 


class Chartboard  extends React.Component{
  constructor(props){
    super(props);
    this.datawpm = [
        { wpm: 0}
      ]
    this.dataAccuracy = [
        { Accuracy: 0}
      ]
    }

  
  render () {
  	return (
      <EventLogicContext.Consumer >
        { values => {
          console.log("Update called")
          if(this.datawpm.length > 5) {
            this.datawpm.shift()
          }
          this.datawpm.push({
            wpm: values.metrics.WPM
          })
          if(this.dataAccuracy.length > 5) {
            this.dataAccuracy.shift()
          }
          this.dataAccuracy.push({
            Accuracy: values.metrics.Accuracy
          })
          //this.key = Math.random()

          return (
            <React.Fragment key={this.key}>            
                  <LineChart width={300} height={200} data={ [...this.dataAccuracy]}
                        margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                  <XAxis dataKey="name"/>
                  { console.log(" ___******________" )}
                  <YAxis/>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <Tooltip/>
                  <Legend />
                  <Line type="monotone" dataKey="Accuracy" stroke="#82ca9d" />
                  </LineChart>

                  <LineChart width={300} height={200} data={[...this.datawpm]}
                        margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <Tooltip/>
                  <Legend />
                  <Line type="monotone" dataKey="wpm" stroke="#8884d8" activeDot={{r: 8}}/>
                  </LineChart>
            </React.Fragment>
          )
        }}
        </EventLogicContext.Consumer >
    );
  }
}

export default Chartboard;

/*
  metrics:{
    WPM:0,
    CPM:0,
    Accuracy:0,
  

*/