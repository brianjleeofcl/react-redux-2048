import { API } from '../constants';
import { APIAction, APIInstructions } from '../../classes/API.interface';

interface Options extends APIInstructions {
  handler: string;
}

export default function APICall(options: Options): APIAction {
  const { handler, ...rest } = options;
  const instructions: APIInstructions = rest;
  return {type: API, instructions, handler}
}