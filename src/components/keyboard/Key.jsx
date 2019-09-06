import React from 'react';
import {Container, Button,IconButton, Badge, Grid, Paper } from '@material-ui/core';

const myClasses = (data, key) => {
    let classes =  "key-" + key.name + " btnkey ";

    if( data.type != 1 && (data.codechar == key.keyval || data.codechar == key.modval) ) {
      classes =  classes + "keyactive "
    }
    return classes
  }

export default function Key(props) {
    return (
        <button className={ myClasses( props.data, props.mykey)}>{
            props.mykey.name == "space" ? "space" : props.mykey.keyval
        }</button>
    )
}