import React from 'react';
import dashboard from '../../img/dashboard.png';
import addmonth from '../../img/addmonth.png';
import addload from '../../img/addload.png';
import month from '../../img/month.png';
import showload from '../../img/showload.png';
import showexpenses from '../../img/showexpenses.png';

const Tutorial = () => {
  return (
    <section className='container-fluid fontMontserrat'>
      <div>
        <div className='row'>
          <div className='col-sm text-dark text-center h1 mt-5'>
            Bienvenue sur CashFlow.
          </div>
        </div>
        <div className='row'>
          <div className='col-sm text-dark text-center h5 mt-5'>
            Je vous présente votre Dashboard.
          </div>
        </div>
        <div className='row'>
          <div className='col-sm mt-1 text-center '>
            <img
              src={dashboard}
              className='card shadow w-75 mx-auto d-block'
              alt='dashboard'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6 text-dark text-center h5 mt-5'>
            Le principe : ajouter un mois, ajouter votre somme de départ dans
            "solde". Ajouter votre salaire et si jamais vous avez des revenus
            exceptionnel dans "extra". Excellent, votre premier mois est crée
            <img
              src={addmonth}
              className='card shadow w-75 mx-auto d-block mt-3'
              alt='addmonth'
            />
          </div>
          <div className='col-sm-6 text-dark text-center h5 mt-5'>
            Maintenant que vous êtes sur votre dashboard votre mois apparaît
            avec les données correspondantes.
            <img
              src={month}
              className='card shadow w-75 mx-auto d-block mt-5'
              alt='month'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
          <div className='col-sm-6 text-dark text-center h5 mt-5'>
            Les charges sont les dépenses qui se répètent chaque mois (Exemple:
            loyer, téléphone, ...). Pour en ajouter une cliquez sur le bouton
            "Ajouter Charge", ajouter l'intitulé, le montant et quand est-ce
            qu'elle commence et quand elle finit ou cocher "no end date" si elle
            ne termine pas. Quand elle est ajoutée elle sera soustrait de chaque
            solde des mois correspondant directement. Vous pourrai consulter les
            différentes charges par mois dans “Voir les charges”.{' '}
          </div>
          <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
        </div>
        <div className='row'>
          <div className='col-sm-6 text-dark text-center h5 mt-5'>
            <img
              src={addload}
              className='card shadow w-75 mx-auto d-block mt-3'
              alt='addload'
            />
          </div>
          <div className='col-sm-6 text-dark text-center h5 mt-5'>
            <img
              src={showload}
              className='card shadow w-75 mx-auto d-block mt-5'
              alt='showload'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
          <div className='col-sm-6 text-dark text-center h5 mt-5'>
            De même pour consulter les dépenses du mois dans “Voir les
            dépenses”.{' '}
            <img
              src={showexpenses}
              className='card shadow w-75 mx-auto d-block mt-3'
              alt='showexpenses'
            />
          </div>
          <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
        </div>
        <div className='row'>
          <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
          <div className='col-sm-6 text-dark text-center h2 mt-5 mb-5'>
            Ainsi de suite. À vous de jouer !
          </div>
          <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
        <div className='col-sm-6 text-dark text-center h2 mt-3 mb-5'>
          <i class='far fa-hand-peace fa-w-20 fa-2x '></i>
        </div>
        <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
      </div>
    </section>
  );
};

export default Tutorial;
