import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MonthLoad = ({
  load: { label, howMuch, from, to },
  monthDate,
  sumLoad,
}) => {
  return (
    <Fragment>
      {(monthDate >= from && monthDate <= to) || (monthDate >= from && !to) ? (
        <div>
          <div className='row text-light'>
            <div className='col-sm-6'>
              <h5 className='m-0 col-sm text-center'>{label}</h5>
            </div>
            <div className='col-sm-6'>
              {' '}
              <h5 className='m-0 text-center'> Amount: {howMuch}</h5>
            </div>
          </div>
          <hr className='bg-white' />
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

MonthLoad.propTypes = {
  load: PropTypes.object.isRequired,
};

export default connect(null)(MonthLoad);
