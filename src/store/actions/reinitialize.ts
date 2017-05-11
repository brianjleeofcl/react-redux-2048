import { Action } from 'redux';
import { INIT } from '../constants';

export default function reinitBoard(): Action {
  return { type: INIT };
};