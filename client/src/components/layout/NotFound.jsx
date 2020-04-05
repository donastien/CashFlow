import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='text-light text-center mt-5'>
        <i className='fas fa-exclamation-triangle'></i> Page Not Found
      </h1>

      <p className='large text-light text-center'>
        {' '}
        Sorry, this page does not exist.
      </p>
    </Fragment>
  );
};

export default NotFound;
