import { Action } from 'redux';
import { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, INIT } from '../constants';
import Board from '../../classes/board.class';
import movements from './transformations';
const {up, down, left, right} = movements;

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
      return up(board);
    case MOVE_DOWN:
      return down(board);
    case MOVE_LEFT:
      return left(board);
    case MOVE_RIGHT:
      return right(board);
  }
  return board;
}