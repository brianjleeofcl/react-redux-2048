import * as React from 'react';
import {connect} from 'react-redux';

import BlankSquare from './squares/Blank';
import Square from './squares/Square';
import Button from '../button/Button';
import GameOver from './GameOver/GameOver';
import Scores from './Scores/Scores';

import CallAPI from '../store/actions/API';
import keyboardActions from '../store/actions/keyboard';
import reinitialize from '../store/actions/reinitialize';

import Board from '../classes/board.class';
import Score from '../classes/score.class';
import State from '../classes/state.interface';
import './Board.css'

interface LocalState {
  scoreModal: boolean;
};

interface StateProps {
  board: Board;
  scores: Score[];
};
interface DispatchProps {
  keyboard: (key: number) => void;
  restart: () => void;
  getScores: () => void;
}

class BoardComponent extends React.Component<StateProps & DispatchProps, LocalState> {
  constructor(props: any) {
    super(props);
    window.addEventListener('keydown', this.handleKey.bind(this));
    this.state = {
      scoreModal: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
  };

  handleKey(event: React.KeyboardEvent<Window>): void {
    if (event.which >= 37 && event.which <= 40) this.props.keyboard(event.which);
  };

  showModal(): void{
    this.props.getScores();
    this.setState({ scoreModal: true });
  };

  closeModal(): void {
    this.setState({ scoreModal: false });
  };

  render(): JSX.Element {
    const { board, restart, scores } = this.props;
    return <div className="Board-background">
      <div className="Board-buttons">
        <Button click={this.showModal}>
          Current score: {board.score}
        </Button>
        <Button click={restart}>Reset</Button>
      </div>
      <div className="Board">
        {board.array.map((num: number, i: number) => num
          ? <Square key={i}>{num}</Square>
          : <BlankSquare key={`blank-${i}`}/>
        )}
      </div>
      {!board.status? <GameOver score={board.score} resetBoard={restart}/> : ''}
      {this.state.scoreModal? <Scores scores={scores} closeModal={this.closeModal} /> : ''}
    </div>
  };
};

function mapStatetoProps(state: State): StateProps {
  return { board: state.board, scores: state.topScores }
}

function mapDispatchtoProps(dispatch:any) {
  return {
    keyboard: (key: number): void => dispatch(keyboardActions(key)),
    restart: (): void => dispatch(reinitialize()),
    getScores: (): void => dispatch(CallAPI({url: '/api/scores/', method: 'GET', handler:'SCORES'}))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(BoardComponent);