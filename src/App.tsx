import * as React from 'react';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';
import './App.css';

// const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h1>2048</h1>
        </div>
        <Router>
          <Route path="/" component={Wrapper}>
            <IndexRoute component={GameBoard} />
            <Route path="/scores" component={HighScores} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
