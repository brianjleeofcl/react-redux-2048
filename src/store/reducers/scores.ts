import { API_RESPONSE_SCORES } from '../constants';
import { APIResponseAction } from '../../classes/API.interface';
import { Action } from 'redux';
import Score from '../../classes/score.class';

export default function ScoresReducer(scores: Score[] = [], action: Action): Score[] {
  switch(action.type) {
    case API_RESPONSE_SCORES:
      return (action as APIResponseAction).data
  }
  return scores;
}