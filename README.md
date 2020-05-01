# CashFlow

Une application qui comprend et facilite la gestion de votre trésorerie.

## Getting Started

Télécharger ou cloner le projet sur votre machine locale.

### Prerequisites

Il faut d'abord que vous ayez Node installé sur votre machine, rendez-vous sur ce lien vous installer Node.

```
https://nodejs.org
```

### Installing

Télécharger le zip ou faites un git clone du projet sur votre machine.

Dans le projet, exécutez la commande suivante pour installer les packages.

```
npm install
```
Ensuite configurez un cluster et un user sur MongoDB. Créez un fichier default.json dans config et insérez les lignes suivantes.

```
{
  "mongoURI": "mongodb+srv://{votre user}:{password}@cluster0-iuuww.mongodb.net/test?retryWrites=true&w=majority",
  "jwtSecret": "codesecretpourvostoken"
}
```

Lancer le serveur Express et React simultanément.

```
npm run dev
```

## Built With

* [React](https://fr.reactjs.org/) - La librairie React pour le front.
* [Express](https://expressjs.com/fr/) - Le framework ExpressJs pour le back.
* [MangoDB](https://www.mongodb.com/fr) - Base de données nosql.

## Authors

* **Donastien Karoumbata** - *Initial work* - [Donastien](https://github.com/donastien)




