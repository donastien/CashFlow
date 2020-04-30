import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../components/layout/Spinner';
import DashboardAction from './DashboardAction';
import MonthItem from './MonthItem';
import { getLoads } from '../../actions/load';
import { getMonths } from '../../actions/dashboard';
import { Link } from 'react-router-dom';

const Dashboard = ({
  getMonths,
  getLoads,
  auth: { user },
  month: { months, loading },
}) => {
  useEffect(() => {
    getLoads();
    getMonths();
  }, [getLoads, getMonths]);

  return (
    <Fragment>
      {loading || months === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <DashboardAction />
          {user && user.name === 'John Doe' ? (
            <div className='container text-dark mt-4'>
              <div className='row justify-content-end'>
                <div className='col-sm-10'>
                  Bienvenue sur un compte démo. Ici vous pourrai tester toutes
                  les fonctionnalités que vous offre l'application. Créer un
                  mois y insérer des dépenses et voir comment fonctionne les
                  charges. <br />
                  Pour en savoir plus consulter{' '}
                  <Link to='/documentation'>la documentation.</Link>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
          <div>
            {months.length > 0 ? (
              months.map((month) => <MonthItem key={month._id} month={month} />)
            ) : (
              <h4 className='text-center text-dark  mt-4'>
                Vous n'avez pas encore de mois... Ajouter un mois.
              </h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getLoads: PropTypes.func.isRequired,
  getMonths: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  month: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  month: state.dashboard,
});

export default connect(mapStateToProps, { getLoads, getMonths })(Dashboard);
