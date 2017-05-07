import * as React from 'react';
import { store } from '../store/store';
import { moveBoard } from '../store/actions/keyboard';
import BlankSquare from './squares/Blank';
import Square from './squares/Square';
import Button from '../button/Button';
import Board from '../classes/board.class';
import './Board.css'

interface State {
  name:string;
}

interface Props {
  board: Board;
}

class BoardContainedComponent extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    window.addEventListener('keydown', this.handleKey.bind(this));

  }

  handleKey(event: React.KeyboardEvent<any>) {
    if (event.which >= 37 && event.which <= 40) store.dispatch(moveBoard(event.which));
  }

  render() {
    const {board} = this.props;
    function resetBoard() {}
    return <div className="Board-background">
      {/*<Link to="/scores">High Scores</Link>*/}
      <div className="Board-buttons">
        <Button click={() => {console.log(this.state)}}>
          Current score: {board.score}
        </Button>
        <Button click={resetBoard}>Reset</Button>
      </div>
      <div className="Board">
        {board.array.map((num: number, i: number) => num
          ? <Square key={i}>{num}</Square>
          : <BlankSquare key={-i}/>
        )}
      </div>
      {!board.status
        ? <div>
          <h3>Game Over</h3>
          <p>Final Score: {board.score}</p>
          <Button click={resetBoard}>Reset</Button>
        </div>
        : ''
      }
    </div>
  }
}

export default BoardContainedComponent;