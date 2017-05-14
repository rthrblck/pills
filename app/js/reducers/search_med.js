/* @flow */
import type { Action } from '../actions/types';
import { SEARCH_MED } from '../actions/search_med';
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants';

export type State = {
  term: string,
  med_options: array,
  dataFetched: boolean,
  isFetching: boolean,
  error: boolean,
};

const initialState = {
  term: null,
  med_options: [],
  dataFetched: false,
  isFetching: false,
  error: false,
};

export default function (state: State = initialState, action: Action): State {
  switch (action.type) {
  case FETCHING_DATA:
    return {
      ...state,
      med_options: [],
      isFetching: true,
    };
  case FETCHING_DATA_SUCCESS:
    return {
      ...state,
      isFetching: false,
      med_options: action.med_options,
    };
  case FETCHING_DATA_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: true,
    };
  default:
    return state;
  }
}
