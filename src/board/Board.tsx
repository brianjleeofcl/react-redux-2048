import * as React from 'react';
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
  keyboard: (num:number) => void;
  restart: () => void;
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
    if (event.which >= 37 && event.which <= 40) this.props.keyboard(event.which);
  };

  showModal(): void{
    this.setState({ scoreModal: true });
  };

  closeModal(): void {
    this.setState({ scoreModal: false });
  };

  render(): JSX.Element {
    const { board, restart } = this.props;
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
      {this.state.scoreModal? <Scores closeModal={this.closeModal}/> : ''}
    </div>
  };
};

export default BoardComponent;