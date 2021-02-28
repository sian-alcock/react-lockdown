import ReactDOM from 'react-dom'
import React from 'react'

export default class CountdownSound extends React.Component {
    render() {
     return (
        <audio ref={React.createRef()} src={'./assets/countdown-1.mp3'} autoPlay/>
      );
     }
    }