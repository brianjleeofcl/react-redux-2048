import { combineReducers } from 'redux';
import board from './board';
import topScores from './scores';
import user from './user';

export default combineReducers({ board, topScores, user });