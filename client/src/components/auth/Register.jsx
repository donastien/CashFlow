import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match.', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='container mt-5'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card card-signin my-5'>
              <div className='card-body'>
                <h5 className='card-title text-center'>
                  <i className='fas fa-user mr-2'></i>Commencer dès maintenant
                </h5>
                <form className='form-signin' onSubmit={(e) => onSubmit(e)}>
                  <div className='form-label-group'>
                    <input
                      type='text'
                      id='inputName'
                      name='name'
                      className='form-control'
                      placeholder='Name'
                      value={name}
                      onChange={(e) => onChange(e)}
                    />
                    <label htmlFor='inputName'>Name</label>
                  </div>
                  <div className='form-label-group'>
                    <input
                      type='email'
                      id='inputEmail'
                      className='form-control'
                      placeholder='Email address'
                      name='email'
                      value={email}
                      onChange={(e) => onChange(e)}
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
                    value='Register'
                  >
                    Start
                  </button>

                  <p className='text-center'>
                    Déjà un compte? <Link to='/login'>Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
