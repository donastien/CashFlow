import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='navbar-nav ml-auto h5'>
      <li className='nav-item active'>
        <Link className='nav-link hide-sm text-dark' to='/dashboard'>
          Dashboard
        </Link>
      </li>
      <li className='ml-3 mt-2'>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt text-dark'></i>
          <span className='hide-sm nav-item text-dark '> Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='navbar-nav text-dark ml-auto h5'>
      <li className='nav-item active'>
        <Link className='nav-link text-dark ' to='/register'>
          Sign Up
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link text-dark' to='/login'>
          Sign In
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar navbar-expand-md navbar-dark fontMontserrat p-0 sticky-top'>
      <i className='fas fa-money-check-alt fa-w-20 fa-2x text-dark ml-4 mb-1'></i>
      <div className='navbar-brand font-weight-bold'>
        <div className='nav-link ml-3 mt-1 h2'>
          <Link to='/' className='text-dark'>
            CashFlow
          </Link>
          <Link to='/tutorial' className='text-secondary h5 ml-4'>
            Tutorial
          </Link>
        </div>
      </div>

      <button
        className='navbar-toggler bg-dark mr-3'
        data-toggle='collapse'
        data-target='#navbar'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse mr-4' id='navbar'>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
