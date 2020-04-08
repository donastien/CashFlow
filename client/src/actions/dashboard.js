import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_MONTHS,
  DASHBOARD_ERROR,
  GET_MONTH,
  UPDATE_MONTH,
  CLEAR_DASHBOARD,
  ACCOUNT_DELETED,
  DELETE_MONTH,
  DELETE_EXPENSE,
} from './types';

// Get Months
export const getMonths = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/dashboard/month');

    dispatch({
      type: GET_MONTHS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DASHBOARD_ERROR,
      payload: { msg: err.response.statusText, status: err.reponse.status },
    });
  }
};

// Get month by id
export const getMonth = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/dashboard/month/${id}`);

    dispatch({
      type: GET_MONTH,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DASHBOARD_ERROR,
      payload: { msg: err.response.statusText, status: err.reponse.status },
    });
  }
};

// Add month
export const addMonth = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/dashboard/month', formData, config);

    dispatch({
      type: GET_MONTHS,
      payload: res.data,
    });

    dispatch(setAlert('Month created', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: DASHBOARD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Edit month
export const editMonth = (formData, history, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`/api/dashboard/month/${id}`, formData, config);

    dispatch({
      type: UPDATE_MONTH,
      payload: res.data,
    });

    dispatch(setAlert('Month updated', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: DASHBOARD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Expense

export const addExpense = (formData, history, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      `/api/dashboard/month/expense/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_MONTH,
      payload: res.data,
    });

    dispatch(setAlert('Expense added', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: DASHBOARD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete month
export const deleteMonth = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/dashboard/month/${id}`);

    dispatch({
      type: DELETE_MONTH,
      payload: id,
    });

    dispatch(setAlert('Month Removed ', 'success'));
  } catch (err) {
    dispatch({
      type: DASHBOARD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete expense
export const deleteExpense = (monthId, expId) => async (dispatch) => {
  try {
    await axios.delete(`api/dashboard/month/${monthId}/${expId}`);
    const res = await axios.get('/api/dashboard/month');
    dispatch({
      type: DELETE_EXPENSE,
      payload: res.data,
    });
    dispatch(setAlert('Expense Removed ', 'success'));
  } catch (err) {
    dispatch({
      type: DASHBOARD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete Account
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete(`api/dashboard/delete`);

      dispatch({
        type: CLEAR_DASHBOARD,
      });
      dispatch({
        type: ACCOUNT_DELETED,
      });

      dispatch(setAlert('Your account has been permanantly deleted', 'light'));
    } catch (err) {
      dispatch({
        type: DASHBOARD_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
