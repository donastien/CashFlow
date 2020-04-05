import React, { useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardAction from '../dashboard/DashboardAction';
import { addLoad } from '../../actions/load';

const AddLoad = ({ addLoad, history }) => {
  const [formData, setFormData] = useState({
    label: '',
    howMuch: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { label, howMuch, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addLoad(formData, history);
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
                  <i className='far fa-calendar-plus'></i> Add a Load (Per
                  Month)
                </h5>
                <form className='form-signin' onSubmit={e => onSubmit(e)}>
                  <div className='form-label-group'>
                    <input
                      type='text'
                      id='inputLabel'
                      className='form-control'
                      placeholder='Label'
                      name='label'
                      value={label}
                      onChange={e => onChange(e)}
                    />
                    <label htmlFor='inputLabel'>Label</label>
                  </div>
                  <div className='form-label-group'>
                    <input
                      type='number'
                      id='inputhowMuch'
                      className='form-control'
                      placeholder='howMuch'
                      name='howMuch'
                      value={howMuch}
                      onChange={e => onChange(e)}
                    />
                    <label htmlFor='inputhowMuch'>How Much ?</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='month'
                      id='inputFrom'
                      className='form-control'
                      placeholder='From'
                      name='from'
                      value={from}
                      onChange={e => onChange(e)}
                    />
                    <label htmlFor='inputFrom'>From</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='checkbox'
                      id='inputCurrent'
                      className='text-center'
                      placeholder='Current'
                      name='current'
                      value={current}
                      onChange={e => {
                        setFormData({ ...formData, current: !current });
                        toggleDisabled(!toDateDisabled);
                      }}
                    />
                    <label htmlFor='inputCurrent'>No end date</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='month'
                      id='inputTo'
                      className='form-control'
                      placeholder='To'
                      name='to'
                      value={to}
                      onChange={e => onChange(e)}
                      disabled={toDateDisabled ? 'disabled' : ''}
                    />
                    <label htmlFor='inputTo'>To</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='text'
                      id='inputDescription'
                      className='form-control'
                      placeholder='Description'
                      name='description'
                      value={description}
                      onChange={e => onChange(e)}
                    />
                    <label htmlFor='inputDescription'>Description</label>
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

AddLoad.propTypes = {
  addLoad: PropTypes.func.isRequired
};

export default connect(null, { addLoad })(withRouter(AddLoad));
