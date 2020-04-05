import axios from 'axios';
import { setAlert } from './alert';

import {
  DELETE_LOAD,
  UPDATE_LOAD,
  GET_LOAD,
  GET_LOADS,
  LOAD_ERROR,
} from './types';

// Add Load
export const addLoad = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/dashboard/load', formData, config);

    dispatch({
      type: GET_LOADS,
      payload: res.data,
    });

    dispatch(setAlert('Load created', 'success'));

    history.push('/load');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOAD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get Loads
export const getLoads = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/dashboard/load');

    dispatch({
      type: GET_LOADS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOAD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete load
export const deleteLoad = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/dashboard/load/${id}`);

    dispatch({
      type: DELETE_LOAD,
      payload: id,
    });

    dispatch(setAlert('Load Removed ', 'success'));
  } catch (err) {
    dispatch({
      type: LOAD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update load
export const editLoad = (formData, history, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`/api/dashboard/load/${id}`, formData, config);

    dispatch({
      type: UPDATE_LOAD,
      payload: res.data,
    });

    dispatch(setAlert('Load updated', 'success'));

    history.push('/load');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOAD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get load
export const getLoad = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/dashboard/load/${id}`);

    dispatch({
      type: GET_LOAD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOAD_ERROR,
      payload: { msg: err.response.statusText, status: err.reponse.status },
    });
  }
};
