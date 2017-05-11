import { Store, Dispatch, Action } from 'redux';
import { API, API_RESPONSE, API_ERROR } from '../constants';
import State from '../../classes/state.interface';
import axios from 'axios';

interface APIAction extends Action {
  instructions?: {url: string; method: string; data?: any};
  handler?: string;
}

const apiMiddleware = ({dispatch}: Store<State>) => (next: Dispatch<Action>) => (action: APIAction) => {
  if (action.type === API && action.instructions) {
    axios(action.instructions).then(response => {
      if (response.status !== 400) return next({type: API_ERROR});
      return next({type: API_RESPONSE, handler: action.handler, data: response.data});
    });
  }
  return next(action);
};

export default apiMiddleware;