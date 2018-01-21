import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bm from './sounds/BeatMaker.mp3';
import snear from './sounds/snear.mp3';
import openSocket from 'socket.io-client';

const songs = [{name:'beat', url:'../sounds/BeatMaker.mp3', sound: new Audio(bm)}, {name:'snear', url:'../sounds/snear.mp3',sound: new Audio(snear)}]


class App extends Component {
  componentDidMount(){
    const  socket = openSocket('http://e6b36f46.ngrok.io');
    socket.on('play', data => console.log('data',data));
  }

  render() {
    return (
      <div className="App">
        hello
      </div>
    );
  }
}

export default App;
