import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Demo = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: 'jdoe@gmail.com',
    password: '12345678',
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
                  <i className='fas fa-user-astronaut'></i> Démo
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
                    <label htmlFor='inputEmail'>jdoe@gmail.com</label>
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

                  <button
                    className='btn btn-lg btn-info btn-block text-uppercase'
                    type='submit'
                    value='Login'
                  >
                    DEMO
                  </button>

                  <p className='text-center mt-2'>
                    <Link to='/forgot_password'>Mot de passe perdu ?</Link>
                  </p>
                  <p className='text-center'>
                    Vous n'avez pas de compte?{' '}
                    <Link to='/register'>S'enregistrer</Link>
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

Demo.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Demo);
