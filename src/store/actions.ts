// actions.ts
import { Dispatch } from 'redux';

// Example action types
const SET_DATA = 'SET_DATA';
const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

interface SetDataAction {
  type: typeof SET_DATA;
  payload: string;
}

interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: string;
}

interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

export type ActionTypes = SetDataAction | FetchDataRequestAction | FetchDataSuccessAction | FetchDataFailureAction;

// Async action creator using redux-thunk
export const fetchData = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (error) {
      //dispatch({ type: FETCH_DATA_FAILURE, payload: error });
    }
  };
};
