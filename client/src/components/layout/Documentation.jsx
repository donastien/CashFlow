import React from 'react';
import dashboard from '../../img/dashboard.png';
import addmonth from '../../img/addmonth.png';
import addload from '../../img/addload.png';
import month from '../../img/month.png';
import showload from '../../img/showload.png';
import showexpenses from '../../img/showexpenses.png';
import menuLoad from '../../img/menuLoad.png';
import Footer from './Footer';

const docDashboard = () => {
  return (
    <section className='container fontMontserrat'>
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
          <h5 className='text-center'>Je vous présente votre Dashboard.</h5>
          <img
            src={dashboard}
            className='card shadow w-100 mx-auto d-block'
            alt='dashboard'
          />
          <p className=' mt-3'>
            {' '}
            À gauche, vous avez un menu pour ajouter un mois, une charge ou
            consulter vos charges. Il vous permet aussi de supprimer
            définitivement votre compte.
            <br /> À droite, vous une vue d'ensemble de tout vos mois et vous
            permet de savoir où vous en êtes financièrement. Direction sur la
            doc des mois pour en savoir plus sur les données affichées.
          </p>
        </div>
        <div
          class='tab-pane fade'
          id='pills-month'
          role='tabpanel'
          aria-labelledby='pills-month-tab'
        >
          <h5 className='text-center'>Les Mois.</h5>
          <p className='text-center'>
            Pour commencer ajouter un mois en passant par le menu. Ce formulaire
            se présentera à vous.
          </p>
          <img
            src={addmonth}
            className='card shadow w-50 mx-auto d-block mt-3'
            alt='addmonth'
          />
          <p className='mt-3'>
            {' '}
            Remplissez le formulaire avec un mois (exemple: avril 2020),
            ajoutez-y un solde sans revenus si vous commencez le mois avec 100 €
            mettez-y 100. Le revenu correspond à votre revenu que vous avez
            gagné ce mois-ci (exemple: 1500 €) et en extra, ce sont vos revenus
            exceptionnels si vous en avez (exemple: prime, vente, ...). Cliquez
            sur "ajouter" et votre mois apparaît sur votre dashboard, excellent.
          </p>
          <img
            src={month}
            className='card shadow w-75 mx-auto d-block mt-5'
            alt='month'
          />
          <p className='mt-3'>
            De retour sur votre Dashboard avec un nouveau mois. Ce composant
            vous permet d'avoir un visuel sur votre mois. D'abord, on a les
            dépenses, on aura ici la somme de vos dépenses pour ce mois. Votre
            revenu qui est donc votre revenu saisis dans le formulaire ici 1500.
            Ensuite votre solde correspond à votre somme disponible réellement
            c'est-à-dire qu'ici sera affiché : revenus + solde + extra -
            dépenses - charges. Si vous avez mis 100 en solde dans le formulaire
            et 1500 en revenus votre solde est de 1600 car il n'y pas encore de
            dépenses ni de charges. Les extras sont donc les revenus
            exceptionnels saisies dans le formulaire et les charges sont la
            sommes des charges pour ce mois et seulement ce mois. Quand vous
            allez saisir une charge, vous devrez insérer une date de début et
            une date de fin, si le mois est dans cet intervalle la charge sera
            calculé dans ce mois.
          </p>
          <p className='mt-3'>
            Vous avez aussi 4 boutons en bas, 2 aux extrémités permettant
            d'afficher une liste déroulante des dépenses ou des charges. Le
            deuxième pour ajouter une dépense et le troisième pour modifier le
            mois soit pour modifier le revenu ou le solde ou éventuellement
            ajouter des extras.
          </p>
        </div>
        <div
          class='tab-pane fade'
          id='pills-load'
          role='tabpanel'
          aria-labelledby='pills-load-tab'
        >
          <h5 className='text-center'>Les Charges</h5>
          <p className='text-center'>
            Les charges sont les dépenses qui se répètent chaque mois (exemple:
            loyer, forfait, ...).
          </p>
          <p>
            Dans le menu, nous avons deux boutons concernés par les charges. On
            a d'abord le bouton pour ajouter une charge qui vous renverra un
            formulaire et un autre bouton qui vous renverra une page avec la
            liste de toutes vos charges. Cette page vous permettra aussi de
            modifier ou de supprimer une charge.
          </p>
          <img
            src={menuLoad}
            className='card shadow w-25 mx-auto d-block mt-3'
            alt='menuLoad'
          />
          <h5 className='mt-5 text-center'>Maintenant ajoutons une charge.</h5>
          <p className='text-center'>
            Cliquez sur le bouton "ajouter une charge" depuis le menu et vous
            vous retrouverai devant ce formulaire.
          </p>
          <img
            src={addload}
            className='card shadow w-50 mx-auto d-block mt-3'
            alt='addload'
          />
          <p className='mt-3'>
            Remplissez le formulaire avec un intitulé (exemple: Loyer), un
            montant (exemple: 300), une date de début (exemple: avril 2020).
            Ensuite vous avez deux possibilités : <br />
            <br />
            - Soit la charge possède une date et vous prenais pas en compte la
            case à cocher et dans la date de fin vous ajoutez une date (exemple:
            juin 2020). Dans ce cas-là, la charge sera soustraite de tous les
            mois entre cet intervalle y compris la date de fin.
            <br />
            Soit c'est une durée indéterminée et dans ce cas là vous cochez la
            case "no end date". La charge sera donc déduite de tous les mois
            après la date de début compris.
            <br />
            Pour la description ajoutez-y une note sur cette charge.
          </p>
          <p>
            Maintenant que la charge est ajoutée vous pouvez la voir dans tous
            les mois correspondant aux dates de cette charge et de plus
            soustraite du solde.
          </p>
          <img
            src={showload}
            className='card shadow w-75 mx-auto d-block mt-5'
            alt='showload'
          />
        </div>
        <div
          class='tab-pane fade'
          id='pills-exp'
          role='tabpanel'
          aria-labelledby='pills-exp-tab'
        >
          <h5 className='text-center'>Les Dépenses</h5>
          <p className='text-center'>
            Cliquez sur le bouton "ajouter une dépense" dans le mois concerné.
            Il vous renvoi un formulaire, ajoutez un intitulé (exemple: Course),
            un montant (exemple: 30) et une date (exemple: 01/04/2020).
          </p>
          <p className='text-center'>
            {' '}
            Une fois ajouté, vous pouvez le consulter dans "Voir Dépenses".
          </p>
          <img
            src={showexpenses}
            className='card shadow w-75 mx-auto d-block mt-3'
            alt='showexpenses'
          />
          <p className='text-center mt-4'>
            Et voilà, par exemple ici, il vous reste 1270 réellement pour tout
            ce que vous voulez faire.
            <i class='far fa-hand-peace fa-w-20 fa-2x '></i>
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default docDashboard;
