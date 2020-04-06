import {
  GET_MONTHS,
  DASHBOARD_ERROR,
  CLEAR_DASHBOARD,
  GET_MONTH,
  UPDATE_MONTH,
  DELETE_MONTH,
  DELETE_EXPENSE,
} from '../actions/types';

const initialState = {
  months: null,
  month: null,
  repos: [],
  loading: true,
  errors: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MONTH:
    case UPDATE_MONTH:
      return {
        ...state,
        month: payload,
        loading: false,
      };
    case GET_MONTHS:
      return {
        ...state,
        months: payload,
        loading: false,
      };
    case DASHBOARD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_DASHBOARD:
      return {
        ...state,
        months: null,
        month: null,
        repos: [],
        loading: false,
      };
    case DELETE_MONTH:
      return {
        ...state,
        months: state.months.filter((month) => month._id !== payload),
        loading: false,
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        months: payload,
        loading: false,
      };
    default:
      return state;
  }
}
