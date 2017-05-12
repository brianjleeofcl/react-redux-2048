import { Action } from 'redux';
import { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, INIT } from '../constants';
import Board from '../../classes/board.class';

function initBoard(): Board {
  const blank = new Board(4);
  blank.init();
  return blank
}

export default function boardReducer(board: Board = initBoard(), action: Action): Board {
  switch(action.type) {
    case INIT:
      return initBoard();
    case MOVE_UP:
      return board.move('up');
    case MOVE_DOWN:
      return board.move('down');
    case MOVE_LEFT:
      return board.move('left');
    case MOVE_RIGHT:
      return board.move('right');
  }
  return board;
}