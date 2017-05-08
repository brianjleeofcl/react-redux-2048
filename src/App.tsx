import * as React from 'react';
// import { bindActionCreators, Dispatch } from 'redux';
import './App.css';
import Board from './board/Board';

import { State } from './classes/state.interface';

import { connect } from 'react-redux';

// import * as keyboardActions from './store/actions/keyboard'

interface ConnectedState {
  board: any
}

class App extends React.Component<ConnectedState, {}> {
  render() {
    const {board} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <h1>2048</h1>
        </div>
        <Board board={board}/>
      </div>
    );
  }
}

function mapStatetoProps(state: State): ConnectedState {
  return { board: state.board }
}

// function mapDispatchtoProps(dispatch: Dispatch<any>) {
//   return {
//     action: bindActionCreators(keyboardActions ,dispatch)
//   }
// }

export default connect(mapStatetoProps)(App);
