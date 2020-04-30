import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteAccount } from '../../actions/dashboard';

const DashboardAction = ({ auth: { user }, deleteAccount }) => {
  return (
    <div className='sidebar shadow mb-2'>
      <div className='text-center mt-3'>
        <i className='fas fa-user-astronaut'></i> Hello {user && user.name}
      </div>
      <div className='text-center mt-3'>
        <img
          src={user && user.avatar}
          alt='avatarpik'
          className='rounded-circle'
        />
      </div>
      <div className='text-center mt-3'>
        Member since{' '}
        <Moment locale='fr' format='MMMM, DD YYYY'>
          {user && user.date}
        </Moment>
      </div>
      <hr />

      <Link to='/dashboard' className='btn btn-transparent mt-2 rounded'>
        <i className='fas fa-tachometer-alt'></i> Dashboard
      </Link>
      <Link to='/add-month' className='btn btn-transparent rounded mt-2'>
        <i className='fas fa-calendar-plus'></i> Ajouter un Mois
      </Link>
      <Link to='/add-load' className='btn btn-transparent rounded mt-2'>
        <i className='fas fa-plus'></i> Ajouter une Charge
      </Link>
      <Link to='/load' className='btn btn-transparent rounded mt-2'>
        <i className='fas fa-redo'></i> Voir les Charges
      </Link>
      {user && user.name !== 'John Doe' ? (
        <button
          className='btn btn-danger rounded mt-3 ml-1'
          onClick={() => deleteAccount()}
        >
          <i className='fas fa-trash'></i> Supprimer mon Compte
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

DashboardAction.propTypes = {
  auth: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteAccount })(DashboardAction);
