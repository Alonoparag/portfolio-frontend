#!/usr/bin/env bash

clear
echo "please enter component name"
read filename
echo "please enter path"
read path
echo "
        import React, {Component} from 'react'

        const $filename = ()=>(

        );

        class $filename extends Component{
          constructor(props){
            super(props);
          }
          render(){
            return(
            
            );
          }
        }

        export default $filename;
     ">>$path/$filename.js
