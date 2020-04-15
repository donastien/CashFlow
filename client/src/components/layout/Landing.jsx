import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='container-fluid fontMontserrat background'>
      <div className='row'>
        <div className='col-sm-7 text-center'>
          <h1 className='font-weight-light text-white display-5 landingText'>
            Managing your account has never been easier.
          </h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-7 text-center'>
          <Link to='/register' className='btn btn-warning btn-lg mt-3 ml-5'>
            Sign Up
          </Link>
          <Link to='/login' className='btn btn-outline-light btn-lg mt-3 ml-5'>
            Login
          </Link>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4 mt-5'></div>
        <div className='col-lg-4 mt-5 text-center'>
          <a href='http://www.freepik.com'>
            <h6 className='text-white footer'>Designed by Freepik.</h6>
          </a>
        </div>
        <div className='col-lg-4 mt-5 text-right'>
          <h6 className='text-white footer'>
            © 2020 DonastienKaroumbata{' '}
            <a href='https://www.linkedin.com/in/dkaroumbata/'>
              <i class='fab fa-linkedin fa-w-20 fa-2x'></i>
            </a>
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Landing;
