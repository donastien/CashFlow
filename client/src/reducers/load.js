import {
  DELETE_LOAD,
  UPDATE_LOAD,
  GET_LOAD,
  GET_LOADS,
  LOAD_ERROR,
  CLEAR_LOAD,
} from '../actions/types';

const initialState = {
  loads: null,
  load: null,
  repos: [],
  loading: true,
  errors: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LOAD:
    case UPDATE_LOAD:
      return {
        ...state,
        load: payload,
        loading: false,
      };
    case GET_LOADS:
      return {
        ...state,
        loads: payload,
        loading: false,
      };
    case LOAD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_LOAD:
      return {
        ...state,
        loads: null,
        load: null,
        repos: [],
        loading: false,
      };
    case DELETE_LOAD:
      return {
        ...state,
        loads: state.loads.filter((load) => load._id !== payload),
        loading: false,
      };
    default:
      return state;
  }
}
