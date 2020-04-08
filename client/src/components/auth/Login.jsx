import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='container fontMontserrat mt-5'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card card-signin my-5'>
              <div className='card-body'>
                <h5 className='card-title text-center'>
                  <i className='fas fa-user mr-2'></i>Sign In
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

                  <div className='form-label-group'>
                    <input
                      type='password'
                      id='inputPassword'
                      className='form-control'
                      placeholder='Password'
                      name='password'
                      value={password}
                      onChange={(e) => onChange(e)}
                      minLength='8'
                    />
                    <label htmlFor='inputPassword'>Password</label>
                  </div>

                  {/*<div className='custom-control custom-checkbox mb-3'>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='customCheck1'
                  />
                  <label className='custom-control-label' htmlFor='customCheck1'>
                    Remember password
  </label>
                </div>*/}

                  <button
                    className='btn btn-lg btn-primary btn-block text-uppercase'
                    type='submit'
                    value='Login'
                  >
                    Sign In
                  </button>

                  <p className='text-center'>
                    Don't have an account? <Link to='/register'>Sign Up</Link>
                  </p>

                  {/*<hr className='my-4' />
                <button
                  className='btn btn-lg btn-google btn-block text-uppercase'
                  type='submit'
                >
                  <i className='fab fa-google mr-2'></i> Sign in with Google
              </button>*/}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
