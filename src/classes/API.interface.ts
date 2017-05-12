import { Action } from 'redux'

export interface APIInstructions {
  url: string;
  method: string;
  data?: any;
}

export interface APIAction extends Action {
  instructions: APIInstructions;
  handler: string;
}

export interface APIResponseAction extends Action {
  data: any;
}