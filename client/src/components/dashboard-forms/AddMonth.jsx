import React, { useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardAction from '../dashboard/DashboardAction';
import { addMonth } from '../../actions/dashboard';

const AddMonth = ({ addMonth, history }) => {
  const [formData, setFormData] = useState({
    date: '',
    balance: '',
    pay: '',
    extra: ''
  });

  const { date, balance, pay, extra } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addMonth(formData, history);
  };

  return (
    <Fragment>
      <DashboardAction />
      <section className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card card-signin my-5'>
              <div className='card-body'>
                <h5 className='card-title text-center'>
                  <i className='far fa-calendar-plus'></i> Add a Month
                </h5>
                <form className='form-signin' onSubmit={e => onSubmit(e)}>
                  <div className='form-label-group'>
                    <input
                      type='month'
                      id='inputMonth'
                      className='form-control'
                      placeholder='Month'
                      name='date'
                      value={date}
                      onChange={e => onChange(e)}
                    />
                    <label htmlFor='inputMonth'>Month</label>
                  </div>
                  <div className='form-label-group'>
                    <input
                      type='number'
                      id='inputBalance'
                      className='form-control'
                      placeholder='Balance'
                      name='balance'
                      value={balance}
                      onChange={e => onChange(e)}
                    />
                    <label htmlFor='inputBalance'>Balance</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='number'
                      id='inputPay'
                      className='form-control'
                      placeholder='Pay'
                      name='pay'
                      value={pay}
                      onChange={e => onChange(e)}
                    />
                    <label htmlFor='inputPay'>PayCheck</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='number'
                      id='inputExtra'
                      className='form-control'
                      placeholder='Extra'
                      name='extra'
                      value={extra}
                      onChange={e => onChange(e)}
                    />
                    <label htmlFor='inputExtra'>Extra</label>
                  </div>

                  <button
                    className='btn btn-lg btn-primary btn-block text-uppercase'
                    type='submit'
                  >
                    Add
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

AddMonth.propTypes = {
  addMonth: PropTypes.func.isRequired
};

export default connect(null, { addMonth })(withRouter(AddMonth));
