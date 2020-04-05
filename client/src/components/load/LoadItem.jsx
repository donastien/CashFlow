import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteLoad } from '../../actions/load';

const LoadItem = ({
  load: { _id, label, howMuch, from, to, current, description },
  deleteLoad,
}) => {
  return (
    <div className='container text-light mt-4'>
      <div className='row justify-content-end'>
        <div className='col-sm-10'>
          <div className='text-center text-uppercase h3'>{label}</div>
          <div className='card bg-cardmonth'>
            <h5 className='text-right m-2'>
              <i
                onClick={() => deleteLoad(_id)}
                className='fas fa-times'
                type='button'
              ></i>
            </h5>
            <div className='card-title'>
              <div className='row'>
                <div className='col-sm'>
                  <div className='h5 card-text text-center'>
                    Amount: <h4>{howMuch}</h4>
                  </div>
                </div>

                <div className='col-sm'>
                  <div className='h5 card-text text-center'>
                    <Moment format='MMMM YYYY'>{from}</Moment> -{' '}
                    {!to ? (
                      ' No end date. '
                    ) : (
                      <Moment format='MMMM YYYY'>{to}</Moment>
                    )}
                  </div>
                </div>
                <div className='col-sm'>
                  <div className='card-text text-center h5'>{description}</div>
                </div>
              </div>
              <div className='mr-3 text-right'>
                <a href={`/edit-load/${_id}`} className='btn btn-light'>
                  <i className='fas fa-wrench'></i> Update Load
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoadItem.propTypes = {
  load: PropTypes.object.isRequired,
  deleteLoad: PropTypes.func.isRequired,
};

export default connect(null, { deleteLoad })(LoadItem);
