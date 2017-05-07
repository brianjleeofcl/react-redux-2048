import * as React from 'react';
import BlankSquare from './squares/Blank';
import Square from './squares/Square';
import Board from '../classes/board.class';
import './Board.css'

interface Prop {
  board: Board
}

const BoardComponent: React.StatelessComponent<Prop> = function(prop: Prop):React.ReactElement<any> {
  const {board} = prop;
  return <div className="Board">
        {board.array.map((num: number, i: number) => num
          ? <Square key={i}>{num}</Square>
          : <BlankSquare key={`-${i}`}/>
        )}
      </div>
}


export default BoardComponent;