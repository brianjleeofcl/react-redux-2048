import Board from './board.class';
import Score from './score.class';
import User from './user.interface';

interface State {
  board: Board;
  topScores: Score[];
  user: User;
}

export default State;