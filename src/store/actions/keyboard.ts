import {MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT} from '../constants';
import { Action } from 'redux';

export default function moveBoard(key: number): Action {
  let type: string = 'DEFAULT';
    if (key === 37) type = MOVE_LEFT;
    if (key === 38) type = MOVE_UP;
    if (key === 39) type = MOVE_RIGHT;
    if (key === 40) type = MOVE_DOWN;
  return { type };
}