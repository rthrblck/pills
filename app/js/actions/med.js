/* @flow */
import type { Action } from './types';

export const SET_MED = 'SET_MED';
export const UNSET_MED = 'UNSET_MED';

export function unsetMed(): Action {
  return {
    type: SET_MED,
    payload: {},
  };
}

export function setMed(med: object): Action {
  return {
    type: SET_MED,
    payload: med,
  };
}
