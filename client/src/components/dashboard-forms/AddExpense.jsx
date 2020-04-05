import React, { useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardAction from '../dashboard/DashboardAction';
import { addExpense } from '../../actions/dashboard';

const AddExpense = ({ addExpense, history, match }) => {
  const [formData, setFormData] = useState({
    label: '',
    howMuch: '',
    date: '',
  });

  const { label, howMuch, date } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <DashboardAction />
      <section className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card bg-dark card-signin my-5'>
              <div className='card-body'>
                <h5 className='card-title text-center text-light'>
                  <i className='far fa-calendar-plus'></i> Add a Expense
                </h5>
                <form
                  className='form-signin'
                  onSubmit={(e) => {
                    e.preventDefault();
                    addExpense(formData, history, match.params.id);
                  }}
                >
                  <div className='form-label-group'>
                    <input
                      type='text'
                      id='inputLabel'
                      className='form-control bg-dark text-light'
                      placeholder='Label'
                      name='label'
                      value={label}
                      onChange={(e) => onChange(e)}
                    />
                    <label className='text-light' htmlFor='inputLabel'>
                      Label
                    </label>
                  </div>
                  <div className='form-label-group'>
                    <input
                      type='number'
                      id='inputhowMuch'
                      className='form-control bg-dark text-light'
                      placeholder='howMuch'
                      name='howMuch'
                      value={howMuch}
                      onChange={(e) => onChange(e)}
                    />
                    <label className='text-light' htmlFor='inputhowMuch'>
                      How Much ?
                    </label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='date'
                      id='inputDate'
                      className='form-control bg-dark text-light'
                      placeholder='Date'
                      name='date'
                      value={date}
                      onChange={(e) => onChange(e)}
                    />
                    <label className='text-light' htmlFor='inputDate'>
                      Date
                    </label>
                  </div>

                  <button
                    className='btn btn-lg btn-light btn-block text-uppercase'
                    type='submit'
                  >
                    Add a Expense
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

AddExpense.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

export default connect(null, { addExpense })(withRouter(AddExpense));
