import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardAction from '../dashboard/DashboardAction';
import { editMonth, getMonth } from '../../actions/dashboard';
import Moment from 'react-moment';

const EditMonth = ({
  month: { month, loading },
  editMonth,
  getMonth,
  history,
  match
}) => {
  const [formData, setFormData] = useState({
    date: '',
    balance: '',
    pay: '',
    extra: ''
  });

  useEffect(() => {
    getMonth(match.params.id);
    setFormData({
      date: loading || !month.date ? '' : month.date,
      balance: loading || !month.balance ? '' : month.balance,
      pay: loading || !month.pay ? '' : month.pay,
      extra: loading || !month.extra ? '' : month.extra
    });
  }, [loading, getMonth, match.params.id]);

  const { date, balance, pay, extra } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    editMonth(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <DashboardAction />
      <section className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card bg-dark card-signin my-5'>
              <div className='card-body'>
                <h5 className='card-title text-center text-light'>
                  <i className='far fa-calendar-plus'></i> Update{' '}
                  <Moment format='MMMM YYYY'>{date}</Moment>
                </h5>
                <form className='form-signin' onSubmit={e => onSubmit(e)}>
                  <div className='form-label-group'>
                    <input
                      type='number'
                      id='inputBalance'
                      className='form-control bg-dark text-light'
                      placeholder='Balance'
                      name='balance'
                      value={balance}
                      onChange={e => onChange(e)}
                    />
                    <label className='text-light' htmlFor='inputBalance'>
                      Balance
                    </label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='number'
                      id='inputPay'
                      className='form-control bg-dark text-light'
                      placeholder='Pay'
                      name='pay'
                      value={pay}
                      onChange={e => onChange(e)}
                    />
                    <label className='text-light' htmlFor='inputPay'>
                      PayCheck
                    </label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='number'
                      id='inputExtra'
                      className='form-control bg-dark text-light'
                      placeholder='Extra'
                      name='extra'
                      value={extra}
                      onChange={e => onChange(e)}
                    />
                    <label className='text-light' htmlFor='inputExtra'>
                      Extra
                    </label>
                  </div>

                  <button
                    className='btn btn-lg btn-warning btn-block text-uppercase'
                    type='submit'
                  >
                    Update
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

EditMonth.propTypes = {
  editMonth: PropTypes.func.isRequired,
  month: PropTypes.object.isRequired,
  getMonth: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  month: state.dashboard
});

export default connect(mapStateToProps, { editMonth, getMonth })(
  withRouter(EditMonth)
);
