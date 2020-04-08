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
            Welcome to CashFlow.
          </div>
        </div>
        <div className='row'>
          <div className='col-sm text-center mt-1'>
            <button
              class='btn btn-outline-danger'
              data-toggle='collapse'
              data-target='#spoilerEN'
            >
              English
            </button>
            <button
              class='btn btn-outline-danger ml-2'
              data-toggle='collapse'
              data-target='#spoilerFR'
            >
              Français
            </button>
          </div>
        </div>
        <div id='spoilerEN' className='collapse'>
          <div className='row'>
            <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
            <div className='col-sm-6 text-dark text-center h5 mt-5'>
              CashFlow will allow you to manage your money yourself, no need to
              automate expenses or connect to your bank. The goal : to have an
              instant eye on your balance, avoid the 2 or 3 days of waiting
              before an expense appears on your account or the date of monthly
              expenses, add them yourself. Here, everything is calculated at the
              beginning of the month and you have in your balance all you can
              spend without worrying about not being able to pay a monthly
              expense or ending the month in negative.
            </div>
            <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
          </div>
          <div className='row'>
            <div className='col-sm text-dark text-center h5 mt-5'>
              This is your Dashboard.
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
              The Principle : add a month, add your starting sum in "balance".
              Add your salary in "paycheck" and if you have exceptional income
              in "extra". You have created a month, excellent !{' '}
              <img
                src={addmonth}
                className='card shadow  w-75 mx-auto d-block mt-3'
                alt='addmonth'
              />
            </div>
            <div className='col-sm-6 text-dark text-center h5 mt-5'>
              Now that you are on your dashboard your month appears with the
              corresponding data.
              <img
                src={month}
                className='card shadow  w-75 mx-auto d-block mt-5'
                alt='month'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
            <div className='col-sm-6 text-dark text-center h5 mt-5'>
              The loads are the expenses that are repeated each month (Example:
              rent, telephone, ...). To add one click on the "Add Load" button,
              add the title, the amount and when it starts and when it ends or
              check "no end date". When it is added it will be subtracted from
              each month's balance of the corresponding months directly. You
              will be able to view the different charges per month in "show
              loads".
            </div>
            <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
          </div>
          <div className='row'>
            <div className='col-sm-6 text-dark text-center h5 mt-5'>
              <img
                src={addload}
                className='card shadow  w-75 mx-auto d-block mt-3'
                alt='addload'
              />
            </div>
            <div className='col-sm-6 text-dark text-center h5 mt-5'>
              <img
                src={showload}
                className='card shadow  w-75 mx-auto d-block mt-5'
                alt='showload'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
            <div className='col-sm-6 text-dark text-center h5 mt-5'>
              Likewise to see the month's expenses in "Show Expenses".
              <img
                src={showexpenses}
                className='card shadow  w-75 mx-auto d-block mt-3'
                alt='showexpenses'
              />
            </div>
            <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
          </div>
          <div className='row'>
            <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
            <div className='col-sm-6 text-dark text-center h2 mt-5 mb-5'>
              So on and so forth. It's up to you !
            </div>
            <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
          </div>
        </div>

        <div id='spoilerFR' className='collapse'>
          <div className='row'>
            <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
            <div className='col-sm-6 text-dark text-center h5 mt-5'>
              CashFlow va vous permettre de gérer votre argent vous-même, pas de
              dépenses automatiser ni de connexion à votre banque. Le but :
              avoir un œil instantanément sur votre solde, éviter les 2 ou 3
              jours d'attente avant qu'une dépense apparaisse sur votre compte
              ou la date des dépenses mensuels, ajouter-les vous-même. Ici, tout
              est calculé au début du mois et il vous reste dans votre "balance"
              tout ce que vous pouvez dépenser sans craindre de pas pouvoir
              payer une dépense mensuelle ou de finir le mois en négatif.
            </div>
            <div className='col-sm-3 text-dark text-center h5 mt-5'></div>
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
              "balance". Ajouter votre salaire dans "paycheck" et si jamais vous
              avez des revenus exceptionnel dans "extra". Vous avez créé un
              mois, excellent !
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
              Les charges sont les dépenses qui se répètent chaque mois
              (Exemple: loyer, téléphone, ...). Pour en ajouter une cliquez sur
              le bouton "Add Load", ajouter l'intitulé, le montant et quand
              est-ce qu'elle commence et quand elle finit ou cocher "no end
              date" si elle ne termine pas. Quand elle est ajoutée elle sera
              soustrait de chaque solde des mois correspondant directement. Vous
              pourrai consulter les différentes charges par mois dans “show
              loads”.{' '}
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
              De même pour consulter les dépenses du mois dans “Show Expenses”.{' '}
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
