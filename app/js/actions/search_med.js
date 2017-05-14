/* @flow */
import type { PromiseAction } from './types';

export const SEARCH_MED = 'SEARCH_MED';

export function searchMed(term: string): Action {
  return {
    type: SEARCH_MED,
    payload: {
      term,
    },
  };
}

