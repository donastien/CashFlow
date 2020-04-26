import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteMonth } from '../../actions/dashboard';
import MonthExpense from './MonthExpense';
import MonthLoad from './MonthLoad';

const MonthItem = ({
  month: { _id, date, balance, pay, extra, expenses },
  load: { loads },
  deleteMonth,
  tabExp,
  tabLoad,
  tabFromLoad,
  tabToLoad,
  sumBalance,
}) => {
  // Compteur Expense
  tabExp = expenses.map((expense) => expense.howMuch);
  var sumExp = 0;
  for (var i = 0; i < tabExp.length; i++) {
    sumExp += tabExp[i];
  }
  sumExp = Math.round(sumExp * 100) / 100;

  // Compteur Load
  tabLoad = loads.map((load) => load.howMuch);
  tabFromLoad = loads.map((load) => load.from);
  tabToLoad = loads.map((load) => load.to);
  var sumLoad = 0;

  for (var j = 0; j < tabLoad.length; j++) {
    if (
      (date >= tabFromLoad[j] && date <= tabToLoad[j]) ||
      (date >= tabFromLoad[j] && !tabToLoad[j])
    ) {
      sumLoad += tabLoad[j];
    }
  }
  sumLoad = Math.round(sumLoad * 100) / 100;

  sumBalance = balance + pay + extra - sumExp - sumLoad;
  sumBalance = Math.round(sumBalance * 100) / 100;

  return (
    <div className='container text-dark mt-4'>
      <div className='row justify-content-end'>
        <div className='col-sm-10'>
          <h5 className='text-center bg-dark shadow rounded-pill text-white text-uppercase h3'>
            <Moment format='MMMM YYYY'>{date}</Moment>
          </h5>
          <div className='card shadow bg-cardmonth'>
            <h5 className='text-right m-2'>
              <i
                onClick={() => deleteMonth(_id)}
                className='fas fa-times'
                type='button'
              ></i>
            </h5>
            <div className='card-title'>
              <div className='row'>
                <div className='col-sm'>
                  <div className='card-text text-center h5'>
                    Dépenses:
                    <h4 className="text-info">{sumExp}</h4>
                  </div>
                </div>
                <div className='col-sm'>
                  <div className='h5 card-text text-center'>
                    Revenus: <h4 className="text-info">{pay}</h4>
                  </div>
                </div>
                <div className='col-sm'>
                  <div className='card-text text-center h5'>
                    Votre Solde: <h4 className="text-info">{sumBalance}</h4>
                  </div>
                </div>
                <div className='col-sm'>
                  <div className='h5 card-text text-center'>
                    Extra: <h4 className="text-info">{extra}</h4>
                  </div>
                </div>

                <div className='col-sm'>
                  <div className='card-text text-center h5'>
                    Charges:
                    <h4 className="text-info">{sumLoad}</h4>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm mt-4 text-center'>
                  <p>
                    <button
                      className='btn btn-dark shadow'
                      data-toggle='collapse'
                      data-target={'#exp' + _id}
                      type='button'
                      aria-expanded='false'
                      aria-controls={'exp' + _id}
                    >
                      Voir Dépenses <i className='fas fa-angle-down ml-2'></i>
                    </button>
                  </p>
                </div>

                <div className='col-sm mt-4 text-center'>
                  <Link
                    to={`/add-expense/${_id}`}
                    className='btn btn-warning shadow'
                  >
                    <i className='fas fa-cart-plus'></i> Ajouter Dépense
                  </Link>
                </div>
                <div className='col-sm mt-4 text-center'>
                  <a
                    href={`/edit-month/${_id}`}
                    className='btn btn-warning shadow'
                  >
                    <i className='fas fa-wrench'></i> Modifier le Mois
                  </a>
                </div>
                <div className='col-sm mt-4 text-center'>
                  <p>
                    <button
                      className='btn btn-dark shadow'
                      data-toggle='collapse'
                      data-target={'#loads' + _id}
                      type='button'
                      aria-expanded='false'
                      aria-controls={'loads' + _id}
                    >
                      Voir Charges <i className='fas fa-angle-down ml-2'></i>
                    </button>
                  </p>
                </div>
              </div>
              <div className='collapse m-1' id={'loads' + _id}>
                <div className='card collexp card-body bg-dark'>
                  {loads && loads.length > 0 ? (
                    <Fragment>
                      {loads.map((load) => (
                        <MonthLoad
                          key={load._id}
                          load={load}
                          monthDate={date}
                        />
                      ))}
                    </Fragment>
                  ) : (
                    <h4> Pas de charge...</h4>
                  )}
                </div>
              </div>
              <div className='collapse m-1' id={'exp' + _id}>
                <div className='card collexp card-body bg-dark'>
                  {expenses && expenses.length > 0 ? (
                    <Fragment>
                      {expenses.map((expense) => (
                        <MonthExpense
                          key={expense._id}
                          expense={expense}
                          monthId={_id}
                        />
                      ))}
                    </Fragment>
                  ) : (
                    <h4>Pas de dépense...</h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MonthItem.propTypes = {
  month: PropTypes.object.isRequired,
  deleteMonth: PropTypes.func.isRequired,
  load: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  months: state.dashboard,
  load: state.load,
});

export default connect(mapStateToProps, { deleteMonth })(MonthItem);
