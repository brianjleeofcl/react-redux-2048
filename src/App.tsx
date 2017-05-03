import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Board from './board/Board';

// const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>2048</h1>
        </div>
        <Router>
          <Route exact path="/" component={Board} />
        </Router>
      </div>
    );
  }
}

export default App;
