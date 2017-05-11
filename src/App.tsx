import * as React from 'react';
import keyboardActions from './store/actions/keyboard';
import reinitialize from './store/actions/reinitialize';
import './App.css';
import Board from './board/Board';
import State from './classes/state.interface';
import { connect } from 'react-redux';

interface StateAsProps extends State {
  keyboard: (key: number) => void;
  restart: () => void;
}

class App extends React.Component<StateAsProps, {}> {
  render() {
    const {board, keyboard, restart} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <h1>2048</h1>
        </div>
        <Board board={board} keyboard={keyboard} restart={restart}/>
      </div>
    );
  }
}

function mapDispatchtoProps(dispatch:any) {
  return {
    keyboard: (key: number): void => dispatch(keyboardActions(key)),
    restart: (): void => dispatch(reinitialize())
  }
}

export default connect((state: State): State => state, mapDispatchtoProps)(App);
