import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../components/layout/Spinner';
import DashboardAction from '../dashboard/DashboardAction';
import { getLoads } from '../../actions/load';
import LoadItem from './LoadItem';

const Loads = ({ getLoads, load: { loads, loading } }) => {
  useEffect(() => {
    getLoads();
  }, [getLoads]);
  return (
    <Fragment>
      {loading || loads === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <DashboardAction />
          <div>
            {loads.length > 0 ? (
              loads.map(load => <LoadItem key={load._id} load={load} />)
            ) : (
              <h4 className='text-center text-light mt-4'>No loads found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Loads.propTypes = {
  getLoads: PropTypes.func.isRequired,
  load: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  load: state.load
});

export default connect(mapStateToProps, { getLoads })(Loads);
