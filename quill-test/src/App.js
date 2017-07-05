import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/quill/dist/quill.snow.css';
import Quill from 'quill';


class App extends Component {
  componentDidMount() {
    this._quill = new Quill('#editor', {
      theme: 'snow'
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div id="editor">
          <p>Hello World!</p>
          <p>Some initial <strong>bold</strong> text</p>
          <p><br /></p>
        </div>
      </div>
    );
  }
}

export default App;
