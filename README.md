# Installation

Clonez ou téléchargez le [répertoire Git](https://github.com/Cendros/mds_cms).

## Prérequis
Version de node : entre 18.0.0 et 20.x.x

***

## Partie admin

Ouvrez un terminal et dirigez vous dans le dossier *back*.
```bash
cd back
```

Installez les dépendances
```bash
yarn
### OU ###
npm i
```

Démarrez le serveur
```bash
yarn start
### OU ###
npm run start
```

## Partie application

Ouvrez un terminal et dirigez vous dans le dossier *front*.
```bash
cd front
```

Installez le module serve
```bash
npm i -g serve
```

Démarrez l'application
```bash
serve -s build
```
***
# Documentation

Cette documentation vous permettra d'utiliser le back office de l'application de recettes afin de créer votre contenu.

# Accès

Une fois que le serveur de Strapi est accessible, ouvrez l'adresse suivante sur votre navigateur : [http://localhost:1337/admin](http://localhost:1337/admin). Vous arriverez sur ce formulaire.

![[images/login.png]]

Créez votre compte et passez à l'étape suivante.

# Permissions

Afin de permettre aux utilisateurs d'effectuer des actions sur les entités, vous devez leur donner différents droits.

- Rendez vous dans le menu *Setting* > *Users & Permissions plugin* > *Roles* > *Public*.
- Dépliez les parties **Homepage**, **Recipe** et **Type** en cochant la case *Select all* pour chaque partie.

![[images/roles.png]]
***
#### Appuyez sur le bouton *Save* pour sauvegarder
***

# Créations d'entité

Pour la démonstration de création d'entités, nous créerons une recette de cookies.

## Types de recettes

Les types de recette vous permettent de classer vos recette dans une catégorie (entrée, viande, gâteau, ...).
***

Pour créer un type, rendez-vous dans le menu *Content Manager* > *Collection Types* > *Type* et appuyer sur le bouton **Create new entry**.
Entrez le nom du type que vous souhaitez créer et appuyer sur **Save**.
	Lorsque vous aurez des recettes enregistrées, vous pourrez les associer directement à ce type avec le sélecteur *recipes*.

***
#### Appuyez sur le bouton *Publish* pour rendre ce type accessible.
***

## Recettes

Pour créer une recette, rendez-vous dans le menu *Content Manager* > *Collection Types* > *Recipe* et appuyer sur le bouton **Create new entry**.
Entrez les informations suivantes :
- Name : nom de la recette
- Image : Téléversez vos images pour les associer aux recettes
- type : Le type de la recette créé précédemment.
- Description : Une description de la recette
- Ingrédients : La liste des ingrédients

![[images/recipe.png]]

***
#### Appuyez sur le bouton *Save* et *Publish* pour rendre cette recette accessible.
***

La recette est maintenant visible sur l'application.

# Création d'un carrousel

Vous avez la possibilité de créer un carrousel pour mettre des recettes en avant sur la page d'accueil. Pour cela rendez vous dans le menu *Content Manager* > *Single Type* > *Homepage* et appuyez sur le bouton +.
Entrez un titre qui sera affiché au dessus du carrousel et sélectionnez les recettes que vous voulez afficher.

![[images/carrousel.png]]

***
#### Appuyez sur le bouton *Save* et *Publish* pour rendre le carrousel visible.
***
