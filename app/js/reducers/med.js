/* @flow */
import type { Action } from '../actions/types';
import { SET_MED } from '../actions/med';

export type State = { med: object };

const initialState = {
  med: {},
};

export default function (state: State = initialState, action: Action): State {
  if (action.type === SET_MED) {
    return {
      ...state,
      med: action.payload,
    };
  }
  return state;
}
