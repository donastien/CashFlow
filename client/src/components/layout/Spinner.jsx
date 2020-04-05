import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    <div className='d-flex justify-content-center mt-5'>
      <div className='spinner-border text-light' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  </Fragment>
);
