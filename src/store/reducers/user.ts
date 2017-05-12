import { Action } from 'redux';
import { API_RESPONSE_USER } from '../constants';
import { APIResponseAction } from '../../classes/API.interface';
import User from '../../classes/user.interface';

export default function userReducer (user: User = {userId: 0, name: ''}, action: Action) {
  switch (action.type) {
    case API_RESPONSE_USER:
      return (action as APIResponseAction).data;
  }

  return user;
}