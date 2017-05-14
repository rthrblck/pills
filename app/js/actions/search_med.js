/* @flow */
import type { PromiseAction } from './types';
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants';
import getMeds from '../api/search_med';

export function getData(term: string): Action {
  return {
    type: FETCHING_DATA,
    term,
  };
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  };
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE,
  };
}

export function searchMed(term: string) {
  return (dispatch) => {
    dispatch(getData(term));
    getMeds()
      .then((data) => {
        dispatch(getDataSuccess(data));
      })
      .catch((err) => console.log('err:', err));
  };
}
