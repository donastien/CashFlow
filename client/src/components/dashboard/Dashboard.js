import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../components/layout/Spinner';
import DashboardAction from './DashboardAction';
import MonthItem from './MonthItem';
import { getLoads } from '../../actions/load';
import { getMonths } from '../../actions/dashboard';
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
          <div>
            {months.length > 0 ? (
              months.map((month) => <MonthItem key={month._id} month={month} />)
            ) : (
              <h4 className='text-center text-dark  mt-4'>
                No months found... Add a month or consult the tutorial.
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
