import { Action } from 'redux';
import { INIT } from '../constants';

export function reinitBoard(): Action {
  return { type: INIT };
};