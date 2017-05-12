import { Store, Dispatch, Action } from 'redux';
import { API, API_RESPONSE, API_ERROR } from '../constants';
import { APIAction } from '../../classes/API.interface';
import State from '../../classes/state.interface';
import axios from 'axios';

const apiMiddleware = ({dispatch}: Store<State>) => (next: Dispatch<Action>) => (action: Action) => {
  if (action.type === API) {
    const {instructions, handler} = action as APIAction;
    axios(instructions).then(response => {
      if (response.status !== 200) return next({type: API_ERROR});
      return next({type: `${API_RESPONSE}_${handler}`, data: response.data});
    });
  }
  return next(action);
};

export default apiMiddleware;