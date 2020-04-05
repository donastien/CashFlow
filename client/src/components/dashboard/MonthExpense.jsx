import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExpense } from '../../actions/dashboard';

const MonthExpense = ({
  monthId,
  expense: { _id, label, howMuch, date },
  deleteExpense,
}) => {
  return (
    <div className='row text-light'>
      <div className='col-sm-1'>
        <i
          className='fas fa-times'
          type='button'
          onClick={() => deleteExpense(monthId, _id)}
        ></i>
      </div>
      <div className='col-sm-3'>
        <h5 className='m-0 col-sm text-center'>{label}</h5>
      </div>
      <div className='col-sm-4'>
        {' '}
        <p className='m-0 text-center'> Amount: {howMuch}</p>
      </div>

      <div className='col-sm-4'>
        <p className='m-0 text-center'>
          <Moment format='DD/MM/YYYY'>{date}</Moment>
        </p>
      </div>

      <hr className='bg-white' />
    </div>
  );
};

MonthExpense.propTypes = {
  expense: PropTypes.object.isRequired,
  monthId: PropTypes.string.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(null, { deleteExpense })(MonthExpense);
