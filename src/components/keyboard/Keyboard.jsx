import React from 'react';
import {Container, Button,IconButton, Badge, Grid, Paper } from '@material-ui/core';
import Key from './Key';
import {EventLogicContext} from '../eventlogic/EventLogic';
import './keyboard.css';

const keymap = [
  [
      {"keyval":"`", "modval":"~", "name":"row1"},

      {"keyval":"1", "modval":"!", "name":"row1"},
      {"keyval":"2", "modval":"@", "name":"row1"},
      {"keyval":"3", "modval":"#", "name":"row1"},
      {"keyval":"4", "modval":"$", "name":"row1"},
      {"keyval":"5", "modval":"%", "name":"row1"},
      {"keyval":"6", "modval":"^", "name":"row1"},
      {"keyval":"7", "modval":"&", "name":"row1"},
      {"keyval":"8", "modval":"*", "name":"row1"},
      {"keyval":"9", "modval":"(", "name":"row1"},
      {"keyval":"0", "modval":")", "name":"row1"},
      {"keyval":"-", "modval":"_", "name":"row1"},
      {"keyval":"=", "modval":"+", "name":"row1"},
      {"keyval":"Backspace", "modval":"XX" , "name":"backspace"},
      
  ],
  [
      {"keyval":"tab", "modval":"XX" , "name":"tab"},
      {"keyval":"q", "modval":"Q" , "name":"row2"},
      {"keyval":"w", "modval":"W", "name":"row2"},
      {"keyval":"e", "modval":"E",  "name":"row2"},
      {"keyval":"r", "modval":"R", "name":"row2"},
      {"keyval":"t", "modval":"T", "name":"row2"},
      {"keyval":"y", "modval":"Y", "name":"row2"},
      {"keyval":"u", "modval":"U", "name":"row2"},
      {"keyval":"i", "modval":"I", "name":"row2"},
      {"keyval":"o", "modval":"O", "name":"row2"},
      {"keyval":"p", "modval":"P", "name":"row2"},
      {"keyval":"{", "modval":"{", "name":"row2"},
      {"keyval":"}", "modval":"}", "name":"row2"},
      {"keyval":"\\", "modval":"|", "name":"row2"},
  ],
  [
      {"keyval":"cap", "modval":"XX", "name":"cap"},
      {"keyval":"a", "modval":"A", "name":"row2"},
      {"keyval":"s", "modval":"S", "name":"row2"},
      {"keyval":"d", "modval":"D", "name":"row2"},
      {"keyval":"f", "modval":"F", "name":"row2"},
      {"keyval":"g", "modval":"G", "name":"row2"},
      {"keyval":"h", "modval":"H", "name":"row2"},
      {"keyval":"j", "modval":"J", "name":"row2"},
      {"keyval":"k", "modval":"K", "name":"row2"},
      {"keyval":"l", "modval":"L", "name":"row2"},
      {"keyval":";", "modval":":", "name":"row2"},
      {"keyval":"'", "modval":"\"", "name":"row2"},
      {"keyval":"Enter", "modval":"XX", "name":"enter"},
  ],
  [
      {"keyval":"Shift", "modval":"XX", "name":"shift"},
      {"keyval":"z", "modval":"Z", "name":"row3"},
      {"keyval":"x", "modval":"X", "name":"row3"},
      {"keyval":"c", "modval":"C", "name":"row3"},
      {"keyval":"v", "modval":"V", "name":"row3"},
      {"keyval":"b", "modval":"B", "name":"row3"},
      {"keyval":"n", "modval":"N", "name":"row3"},
      {"keyval":"m", "modval":"M", "name":"row3"},
      {"keyval":",", "modval":"<", "name":"row3"},
      {"keyval":".", "modval":">", "name":"row3"},
      {"keyval":"/", "modval":"?", "name":"row3"},
      {"keyval":"Shift", "modval":"XX", "name":"shift"},
  ],
  [
      {"keyval":"ctrl", "modval":"XX", "name":"row3"},
      {"keyval":"win", "modval":"XX", "name":"row3"},
      {"keyval":"alt", "modval":"XX", "name":"row3"},
      {"keyval":" ", "modval":"XX", "name":"space"},
      {"keyval":"alt", "modval":"XX", "name":"row3"},
      {"keyval":"ctrl", "modval":"XX", "name":"row3"},
  ]
]

export default function Keyboard() {
  return (
    <Grid>
        <EventLogicContext.Consumer>
        {(value) => {
                    console.log(value)
                    console.log("Consumer")
                    return (
                        keymap.map((key) =>{
                            return (
                            <div>
                            {  key.map( _key => {
                                return (
                                    
                                    <Key mykey={_key} data={value.key} />
                                )
                            }) }
                            </div>
                            )
                        })
                    )}}
      </EventLogicContext.Consumer>
  </Grid>
    );
  }

  
