// reducers.ts
import { ActionTypes } from '../actions';

const initialState = {
  data: '',
  loading: false,
  error: ''
};

type State = typeof initialState;

const rootReducer = (state: State = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
