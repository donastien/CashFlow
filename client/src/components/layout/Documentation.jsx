import React from 'react';
import dashboard from '../../img/dashboard.png';
import addmonth from '../../img/addmonth.png';
import addload from '../../img/addload.png';
import month from '../../img/month.png';
import showload from '../../img/showload.png';
import showexpenses from '../../img/showexpenses.png';

const docDashboard = () => {
  return (
    <section className='container fontMontserrat border'>
      <ul class='nav nav-pills m-4' id='pills-tab' role='tablist'>
        <li class='nav-item'>
          <a
            class='nav-link active'
            id='pills-dash-tab'
            data-toggle='pill'
            href='#pills-dash'
            role='tab'
            aria-controls='pills-dash'
            aria-selected='true'
          >
            Le Dashboard
          </a>
        </li>
        <li class='nav-item'>
          <a
            class='nav-link'
            id='pills-month-tab'
            data-toggle='pill'
            href='#pills-month'
            role='tab'
            aria-controls='pills-month'
            aria-selected='false'
          >
            Les Mois
          </a>
        </li>
        <li class='nav-item'>
          <a
            class='nav-link'
            id='pills-load-tab'
            data-toggle='pill'
            href='#pills-load'
            role='tab'
            aria-controls='pills-load'
            aria-selected='false'
          >
            Les Charges
          </a>
        </li>
        <li class='nav-item'>
          <a
            class='nav-link'
            id='pills-exp-tab'
            data-toggle='pill'
            href='#pills-exp'
            role='tab'
            aria-controls='pills-exp'
            aria-selected='false'
          >
            Les Dépenses
          </a>
        </li>
      </ul>
      <div class='tab-content' id='pills-tabContent'>
        <div
          class='tab-pane fade show active'
          id='pills-dash'
          role='tabpanel'
          aria-labelledby='pills-dash-tab'
        >
          dashboard
        </div>
        <div
          class='tab-pane fade'
          id='pills-month'
          role='tabpanel'
          aria-labelledby='pills-month-tab'
        >
          month
        </div>
        <div
          class='tab-pane fade'
          id='pills-load'
          role='tabpanel'
          aria-labelledby='pills-load-tab'
        >
          load
        </div>
        <div
          class='tab-pane fade'
          id='pills-exp'
          role='tabpanel'
          aria-labelledby='pills-exp-tab'
        >
          exp
        </div>
      </div>
    </section>
  );
};

export default docDashboard;
