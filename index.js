/*
Allociné API
Allociné est au bord du gouffre. Leur API qui a été précédemment développée en PHP subit, depuis plus d'un an, les railleries des développeurs de France et de Navarre. Les investisseurs ont tranché : le site doit être intégralement refait avec ReactJS et il faut recréer une nouvelle API en JavaScript. Le Reacteur vous a recommandé·e auprès d'Allociné, pour sauver l'honneur de cette société en perdition.

Sujet
Implémentez et déployez l'API AlloCiné sur heroku en utilisant l'API intermédiaire externe The Movie Database.

Prérequis
Créez votre compte sur The Movie Database en cliquant ici
Récupérez votre clé API ici
Rechercher un film
Vous devrez être en mesure de récupérer tous les films correspondants à recherche de l'utilisateur q. Limitez chaque requête à 10 résultats, en utilisant un paramètre de pagination p (facultatif) dans votre requête. Les textes récupérés (titres et description) devront être ceux du marché français.

Documentation : https://developers.themoviedb.org/3/search/search-movies

Requête GET : /api/search?q={recherche}&p={page}

Réponse
[
  {
    "vote_count": 4561,
    "id": 194,
    "video": false,
    "vote_average": 7.9,
    "title": "Le Fabuleux Destin d'Amélie Poulain",
    "popularity": 18.023664,
    "poster_path": "/tDOzV7CeC1PplhmNTxbTq4uCxt6.jpg",
    "original_language": "fr",
    "original_title": "Le Fabuleux Destin d'Amélie Poulain",
    "genre_ids": [35, 10749],
    "backdrop_path": "/nxhfenC1jb5EcTI5GYxqnjYZMId.jpg",
    "adult": false,
    "overview":
      "Amélie, une jeune serveuse dans un bar de Montmartre, passe son temps à observer les gens et à laisser son imagination divaguer. Elle s'est fixé un but : faire le bien de ceux qui l'entourent. Elle invente alors des stratagèmes pour intervenir incognito dans leur existence.Le chemin d'Amélie est jalonné de rencontres : Georgette, la buraliste hypocondriaque ; Lucien, le commis d'épicerie ; Madeleine Wallace, la concierge portée sur le porto et les chiens empaillés ; Raymond Dufayel alias \"l'homme de verre\", son voisin qui ne vit qu'à travers une reproduction d'un tableau de Renoir.Cette quête du bonheur amène Amélie à faire la connaissance de Nino Quincampoix, un étrange \"prince charmant\". Celui-ci partage son temps entre un train fantôme et un sex-shop, et cherche à identifier un inconnu dont la photo réapparaît sans cesse dans plusieurs cabines de Photomaton.",
    "release_date": "2001-04-25"
  },
  {
    "vote_count": 3,
    "id": 433763,
    "video": false,
    "vote_average": 7.3,
    "title": "Amelie rennt",
    "popularity": 2.375751,
    "poster_path": "/oBUtGLK4EmdKha82yatCVYmsmr6.jpg",
    "original_language": "de",
    "original_title": "Amelie rennt",
    "genre_ids": [10751, 12],
    "backdrop_path": "/lwbZTumSM7D8rxtHODqewgQogPo.jpg",
    "adult": false,
    "overview":
      "Amelie souffre d'asthme et est placée dans une clinique du Tyrol du Sud pour être soignée. Après un certain temps, elle décide de sortir de cet enfer (elle le ressent ainsi) et rencontre bientôt un nouvel ami. Ensemble, ils cherchent à atteindre le sommet d'une montagne où, selon une vieille coutume, elle peut être guérie.",
    "release_date": "2017-09-21"
  }
  // etc...
]
Lister les films par type
Vous devrez être en mesure de récupérer tous les films correspondants aux types suivants : popular, top_rated, now_playing, latest. Limitez chaque requête à 10 résultats en utilisant un paramètre de pagination p (facultatif) dans votre requête. Les textes récupérés (titres et description) devront être ceux du marché français.

Documentation : RTFM

Requête GET : /api/movies/{type}?p={page}

Réponse
[
  {
    "vote_count": 1345,
    "id": 351286,
    "video": false,
    "vote_average": 6.6,
    "title": "Jurassic World : Fallen Kingdom",
    "popularity": 287.343825,
    "poster_path": "/9EwjVrXqYmm3Q5xWJyG1TmtTF8j.jpg",
    "original_language": "en",
    "original_title": "Jurassic World: Fallen Kingdom",
    "genre_ids": [28, 12, 878],
    "backdrop_path": "/gBmrsugfWpiXRh13Vo3j0WW55qD.jpg",
    "adult": false,
    "overview":
      "Cela fait maintenant quatre ans que les dinosaures se sont échappés de leurs enclos et ont détruit le parc à thème et complexe de luxe Jurassic World. Isla Nublar a été abandonnée par les humains alors que les dinosaures survivants sont livrés à eux-mêmes dans la jungle. Lorsque le volcan inactif de l'île commence à rugir, Owen et Claire s’organisent pour sauver les dinosaures restants de l’extinction.  Owen se fait un devoir de retrouver Blue, son principal raptor qui a disparu dans la nature, alors que Claire, qui a maintenant un véritable respect pour ces créatures, s’en fait une mission. Arrivant sur l'île instable alors que la lave commence à pleuvoir, leur expédition découvre une conspiration qui pourrait ramener toute notre planète à un ordre périlleux jamais vu depuis la préhistoire.",
    "release_date": "2018-06-06"
  },
  {
    "vote_count": 531,
    "id": 260513,
    "video": false,
    "vote_average": 7.7,
    "title": "Les Indestructibles 2",
    "popularity": 176.078602,
    "poster_path": "/Apish2YD3QIAepzxZ96VLkqEZo3.jpg",
    "original_language": "en",
    "original_title": "Incredibles 2",
    "genre_ids": [28, 12, 16, 10751],
    "backdrop_path": "/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg",
    "adult": false,
    "overview":
      "Notre famille de super-héros préférée est de retour! Cette fois c’est Hélène qui se retrouve sur le devant de la scène laissant à Bob le soin de mener à bien les mille et une missions de la vie quotidienne et de s’occuper de Violette, Flèche et de bébé Jack-Jack. C’est un changement de rythme difficile pour la famille d’autant que personne ne mesure réellement l’étendue des incroyables pouvoirs du petit dernier… Lorsqu’un nouvel ennemi fait surface, la famille et Frozone vont devoir s’allier comme jamais pour déjouer son plan machiavélique.",
    "release_date": "2018-06-14"
  }
  // etc...
]
Ajouter un film aux favoris
L'utilisateur doit pouvoir ajouter des films à ses favoris (sous forme de listes). Vous aurez besoin de créer une base de données sous mLab avec plusieurs tables : Users, Favorites et Lists.

Création d'un compte utilisateur
Requête POST : /api/sign_up

{
  "email": "xavier@lereacteur.io",
  "password": "azerty"
}
Réponse
{
  "token": "u6C1HwUH45qQvT5e"
}
Création d'une liste
Vérifiez que la liste n'existe pas déjà pour l'utilisateur. Vous devrez gérer les erreurs avec les codes de statuts à la papa.

Requête POST : /api/lists/add

{
  "token": "u6C1HwUH45qQvT5e",
  "list": {
    "name": "A voir d'urgence",
    "description": "Tous les films que je n'ai pas vu aller voir."
  }
}
Réponse
{
  "_id": "58ff73d11765a998979a3397",
  "name": "A voir d'urgence",
  "description": "Tous les films que je n'ai pas vu aller voir.",
  "movies": []
}
ou

{
  "error": "Cette liste existe déjà." // KO
}
ou

{
  "error": "Erreur d'authentification." // KO
}
Ajout d'un film à une liste
Vérifiez que le film n'existe pas déjà dans la liste qui elle-même existe bien. Vous devrez gérer les erreurs avec les codes de statuts à la papa.

Requête POST : /api/favorites/add

{
  "token": "u6C1HwUH45qQvT5e",
  "favorite": {
    "list_id": "58ff73d11765a998979a3396",
    "id": 351286,
    "original_title": "Jurassic World: Fallen Kingdom",
    "poster_path": "/9EwjVrXqYmm3Q5xWJyG1TmtTF8j.jpg",
    "release_date": "2018-06-14"
  }
}
Réponse
{
  "message": "Le film a bien été ajouté.",
  "timestamp": "1530658715" // date en nombre de secondes écoulées depuis le 1er janvier 1970
}
ou

{
  "error": "Le film a déjà été ajouté dans cette liste." // KO
}
ou

{
  "error": "La liste n'existe pas." // KO
}
ou

{
  "error": "Erreur d'authentification." // KO
}
Lister les films d'une liste
Vérifiez que le film n'existe pas déjà dans la liste (qui elle-même existe bien). Les films seront triés par date d'ajout, du plus au moins récent. Vous devrez valider toutes les requêtes en contrôlant le token et gérer les erreurs avec les codes de statuts à la papa.

Requête POST : /api/favorites

{
  "token": "u6C1HwUH45qQvT5e",
  "list_id": "58ff73d11765a998979a3397"
}
Réponse
{
  "_id": "58ff73d11765a998979a3397",
  "name": "A voir d'urgence",
  "movies": [
    {
      "_id": "58ff73d11765a998979a3398",
      "id": 351286,
      "poster_path": "/9EwjVrXqYmm3Q5xWJyG1TmtTF8j.jpg",
      "original_title": "Jurassic World: Fallen Kingdom",
      "release_date": "2018-06-06",
      "timestamp": "1530658715"
    },
    {
      "_id": "58ff73d11765a998979a339a",
      "id": 260513,
      "poster_path": "/Apish2YD3QIAepzxZ96VLkqEZo3.jpg",
      "original_title": "Incredibles 2",
      "release_date": "2018-06-14",
      "timestamp": "1530658776"
    }
    // etc...
  ]
}
ou

{
  "error": "Cette liste n'existe pas." // KO
}
ou

{
  "error": "La liste n'existe pas." // KO
}
ou

{
  "error": "Erreur d'authentification." // KO
}
Déploiement
Vous devrez déployer votre API sur heroku et mLab. Utilisez les variables d'environnement pour stocker votre clé API.

Bonus
Gérez le CRUD au complet, pour les requêtes qui nécessitent une manipulation en base de données.
*/
require("dotenv").config();
let mongoose = require("mongoose");
let server = require("./server");

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
);

server.start();
