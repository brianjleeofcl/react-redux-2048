import { createStore, Store, applyMiddleware } from 'redux';
import apiMiddleware from './middleware/API';
import reducers from './reducers/root';
import State from '../classes/state.interface';

export const store: Store<State> = createStore(reducers, applyMiddleware(apiMiddleware));