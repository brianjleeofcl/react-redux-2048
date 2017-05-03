import * as React from 'react';
import BlankSquare from './squares/Blank';
import Square from './squares/Square';
import Button from '../button/button';

class BoardComponent extends React.Component<{}, null> {

  render() {

    return <div className="Board-background">
      {/*<Link to="/scores">High Scores</Link>*/}
      <div className="Board-buttons">
        <Button click={() => {}}>
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
      {!status
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

export default BoardComponent;