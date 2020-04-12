import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { forgot } from '../../actions/auth';

const ForgotPassword = ({ forgot }) => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    forgot(email);
  };

  return (
    <Fragment>
      <section className='container fontMontserrat mt-5'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card card-signin my-5'>
              <div className='card-body'>
                <h5 className='card-title text-center'>
                  <i class='fas fa-paper-plane'></i> Enter your email
                </h5>
                <form className='form-signin' onSubmit={(e) => onSubmit(e)}>
                  <div className='form-label-group'>
                    <input
                      type='email'
                      id='inputEmail'
                      className='form-control'
                      placeholder='Email address'
                      name='email'
                      value={email}
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <label htmlFor='inputEmail'>Email address</label>
                  </div>

                  <button
                    className='btn btn-lg btn-info btn-block text-uppercase'
                    type='submit'
                    value='Forgot'
                  >
                    Send
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

ForgotPassword.propTypes = {
  forgot: PropTypes.func.isRequired,
};

export default connect(null, { forgot })(ForgotPassword);
