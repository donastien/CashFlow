import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardAction from '../dashboard/DashboardAction';
import { editLoad, getLoad } from '../../actions/load';

const EditLoad = ({
  load: { load, loading },
  editLoad,
  getLoad,
  history,
  match,
}) => {
  const [formData, setFormData] = useState({
    label: '',
    howMuch: '',
    from: '',
    to: '',
    current: '',
    description: '',
  });

  useEffect(() => {
    getLoad(match.params.id);
    setFormData({
      label: loading || !load.label ? '' : load.label,
      howMuch: loading || !load.howMuch ? '' : load.howMuch,
      from: loading || !load.from ? '' : load.from,
      to: loading || !load.to ? '' : load.to,
      current: loading || !load.current ? false : load.current,
      description: loading || !load.description ? '' : load.description,
    });
  }, [loading, getLoad]);

  const { howMuch, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    editLoad(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <DashboardAction />
      <section className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
            <div className='card card-signin my-5'>
              <div className='card-body'>
                <h5 className='card-title text-center'>
                  <i className='far fa-calendar-plus'></i> Update a Load (Per
                  Month)
                </h5>
                <form className='form-signin' onSubmit={(e) => onSubmit(e)}>
                  <div className='form-label-group'>
                    <input
                      type='number'
                      id='inputhowMuch'
                      className='form-control'
                      placeholder='howMuch'
                      name='howMuch'
                      value={howMuch}
                      onChange={(e) => onChange(e)}
                    />
                    <label htmlFor='inputhowMuch'>How Much ?</label>
                  </div>

                  <div className='form-label-group'>
                    <input
                      type='text'
                      id='inputDescription'
                      className='form-control'
                      placeholder='Description'
                      name='description'
                      value={description}
                      onChange={(e) => onChange(e)}
                    />
                    <label htmlFor='inputDescription'>Description</label>
                  </div>

                  <button
                    className='btn btn-lg btn-primary btn-block text-uppercase'
                    type='submit'
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

EditLoad.propTypes = {
  editLoad: PropTypes.func.isRequired,
  load: PropTypes.object.isRequired,
  getLoad: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  load: state.load,
});

export default connect(mapStateToProps, { editLoad, getLoad })(
  withRouter(EditLoad)
);
