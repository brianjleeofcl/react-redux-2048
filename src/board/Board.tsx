import * as React from 'react';
import { store } from '../store/store';
import { moveBoard } from '../store/actions/keyboard';
import { reinitBoard } from '../store/actions/reinitialize';
import BlankSquare from './squares/Blank';
import Square from './squares/Square';
import Button from '../button/Button';
import GameOver from './GameOver/GameOver';
import Scores from './Scores/Scores';
import Board from '../classes/board.class';
import './Board.css'

interface State {
  scoreModal: boolean;
};

interface Props {
  board: Board;
};

class BoardComponent extends React.Component<Props, State> {
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
    if (event.which >= 37 && event.which <= 40) store.dispatch(moveBoard(event.which));
  };

  resetBoard(): void {
    store.dispatch(reinitBoard());
  };

  showModal(): void{
    this.setState({ scoreModal: true });
  };

  closeModal(): void {
    this.setState({ scoreModal: false });
  };

  render(): JSX.Element {
    const {board} = this.props;
    return <div className="Board-background">
      <div className="Board-buttons">
        <Button click={this.showModal}>
          Current score: {board.score}
        </Button>
        <Button click={this.resetBoard}>Reset</Button>
      </div>
      <div className="Board">
        {board.array.map((num: number, i: number) => num
          ? <Square key={i}>{num}</Square>
          : <BlankSquare key={`blank-${i}`}/>
        )}
      </div>
      {!board.status? <GameOver score={board.score} resetBoard={this.resetBoard}/> : ''}
      {this.state.scoreModal? <Scores closeModal={this.closeModal}/> : ''}
    </div>
  };
};

export default BoardComponent;