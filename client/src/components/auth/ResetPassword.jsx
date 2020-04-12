import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { reset } from '../../actions/auth';

const ResetPassword = ({ setAlert, reset, match }) => {
  const [formData, setFormData] = useState({
    password: '',
    password2: '',
  });

  const { password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match.', 'danger');
    } else {
      reset({ password }, match.params.reset_password_token);
    }
  };

  return (
    <Fragment>
      <section className='container mt-5'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card card-signin my-5'>
              <div className='card-body'>
                <h5 className='card-title text-center'>
                  <i class='fas fa-user-cog'></i> Reset Password
                </h5>
                <form className='form-signin' onSubmit={(e) => onSubmit(e)}>
                  <div className='form-label-group'>
                    <input
                      type='password'
                      id='inputPassword'
                      className='form-control'
                      placeholder='Password'
                      name='password'
                      value={password}
                      onChange={(e) => onChange(e)}
                    />
                    <label htmlFor='inputPassword'>Password</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='password'
                      id='inputPassword2'
                      className='form-control'
                      placeholder='Confirm Password'
                      name='password2'
                      value={password2}
                      onChange={(e) => onChange(e)}
                    />
                    <label htmlFor='inputPassword2'>Confirm Password</label>
                  </div>

                  <button
                    className='btn btn-lg btn-info btn-block text-uppercase'
                    type='submit'
                    value='Reset'
                  >
                    Save
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

ResetPassword.propTypes = {
  setAlert: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, reset })(ResetPassword);
