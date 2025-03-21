---
sidebar_position: 8
description: Notions diverses de dev
---

# Notions diverses
<em>à trier et organiser...</em>

- [Notions diverses](#notions-diverses)
  - [HTTP et requêtes](#http-et-requêtes)
  - [Guard Clauses](#guard-clauses)
  - [Tests](#tests)
    - [Tests unitaires](#tests-unitaires)
    - [Tests fonctionnels](#tests-fonctionnels)
  - [Sécurité](#sécurité)
    - [💣 Attaque XSS (cross-site scripting)](#-attaque-xss-cross-site-scripting)
    - [💣 Attaque XSS par l'URL](#-attaque-xss-par-lurl)
    - [💣 Injections SQL](#-injections-sql)
    - [💣 Attaque CSRF (cross-site request forgery)](#-attaque-csrf-cross-site-request-forgery)
    - [💣 Attaque par force brute](#-attaque-par-force-brute)
    - [🚨 En résumé, pour se protéger...](#-en-résumé-pour-se-protéger)

---
## HTTP et requêtes

Il y a plein de façons différentes d'accéder à une API afin d'en lire les données (commandes, navigateur, postman...).

Une API est donc cross-platoform et ne dépend pas d'un OS spécifique.




---
## Guard Clauses

- Tests fonctionnels
- Logs (Journalisation)
- Affichage front Cross-Platform (Android/IOS par ex), Micro-services
- Le client peut vérifier la fonctionnalité
- Centraliser et rendre le code fonctionnel homogène
- Plus de throw (dans la couche métier), moins d'exception

**Aller plus loin:** 
- [Guard Clauses](https://dev.to/maximegel/guard-clauses-explained-13aa)
- [Replace Nested Conditionnals with Guard Clauses](https://refactoring.guru/replace-nested-conditional-with-guard-clauses)

Ex: Au lieu de if...else, on utilise des codes et des messages associés
```bash
PS D:\AndroidStudioProjects\ApiArticle> node app.js
Le serveur a démarré
2025-03-18T12:56:13.081Z info: Code : 200 - Message : La liste des articles a été récupérée avec succès !
2025-03-18T13:02:44.447Z info: Code : 200 - Message : La liste des articles a été récupérée avec succès !
2025-03-18T13:07:44.587Z info: Code : 200 - Message : La liste des articles a été récupérée avec succès !
```

---
## Tests
### Tests unitaires

Tester **unitairement** des fonctionnalités

**Objectif** : Vérifier que chaque unité ou composant du code fonctionne correctement de manière isolée. Une unité peut être une fonction, une méthode ou un objet.

**Portée** : Très limitée. Les tests unitaires se concentrent sur une petite partie du code à la fois.

**Indépendance** : Les tests unitaires sont généralement indépendants les uns des autres. Ils ne dépendent pas de l'état du système ou des autres tests.

**Rapidité** : Les tests unitaires sont rapides à exécuter car ils ne nécessitent pas de configuration complexe ou d'interaction avec des systèmes externes.

**Écriture** : Souvent écrits par les développeurs eux-mêmes, parfois avant même que le code soit écrit (dans le cadre du développement piloté par les tests, TDD).

**Outils** : Utilisent des frameworks comme JUnit pour Java, NUnit pour .NET, ou pytest pour Python.

### Tests fonctionnels

Tester une fonctionnalité, mais entière

**Objectif** : Vérifier que le système dans son ensemble fonctionne comme prévu du point de vue de l'utilisateur final. Ils testent les fonctionnalités complètes du logiciel.

**Portée** : Plus large que les tests unitaires. Ils peuvent couvrir plusieurs composants ou modules du système.

**Dépendance** : Les tests fonctionnels peuvent dépendre de l'état du système ou des résultats d'autres tests.

**Durée** : Peuvent être plus longs à exécuter car ils impliquent souvent des interactions avec des bases de données, des interfaces utilisateur, ou d'autres systèmes externes.

**Écriture** : Souvent écrits par des testeurs ou des équipes QA, bien que les développeurs puissent également y contribuer.

**Outils** : Utilisent des outils comme Selenium pour les tests d'interface utilisateur, ou des frameworks comme Cucumber pour les tests d'acceptation.

<em>Les tests unitaires et les tests fonctionnels sont complémentaires. Les tests unitaires permettent de s'assurer que chaque composant fonctionne correctement en isolation, tandis que les tests fonctionnels vérifient que le système dans son ensemble répond aux exigences et fonctionne comme prévu pour les utilisateurs finaux. Les deux types de tests sont essentiels pour garantir la qualité et la fiabilité du logiciel.</em>

---
## Sécurité

### 💣 Attaque XSS (cross-site scripting)

L'idée est d'injecter des balises HTML dans notre site victime 😆.

**😈 Comment la réaliser ?**

1. Trouvez un site web où un formulaire vous permet d'ajouter du contenu au site, ou de participer à celui-ci. Par exemple, Wikipédia, ou un formulaire de commentaire sous un article de blog.
2. Écrivez des balises HTML dans les champs du formulaire. Par exemple, <h1>hihihi</h1>.
3. Soumettez le formulaire. Votre "commentaire" sera alors sauvegardé en base de donnée.
4. Rafraîchissez la page, et regardez si votre balise HTML est toujours là, et bien interprétée par le navigateur (ie le texte *hihihi* s'affiche en grand). Si oui, vous avez réussi une attaque XSS ! 👍
5. Vous pouvez maintenant passer à l'étape supérieure et injecter des balises " img " ou plus vilain encore, des balises " script " 🔥
6. Tous les visiteurs verront/subiront votre attaque !

**🛡️ Comment auraient-ils dû se protéger ?**

Avant de sauvegarder les données d'utilisateurs peu fiables en base de données, ils auraient dû utiliser la fonction strip_tags() de PHP pour retirer toutes les balises HTML ! Concrètement :

```php
//en traitant un formulaire

$username = strip_tags($_POST['username']);

$comment  = strip_tags($_POST['comment']);

//et ainsi de suite pour toutes les données !
```

En 2e couche de protection, au moment de l'affichage, ils auraient dû transformer les balises en entités HTML avec la fonction PHP htmlentities(). Ceci aurait *désactivé* les balises. Concrètement :

```html
<div class="comment">

<div>Auteur : <?= htmlentities($username) ?></div>

<p><?= htmlentities($comment) ?></p>

</div>
```

### 💣 Attaque XSS par l'URL

Les données d'un utilisateur peuvent provenir d'un formulaire, mais aussi directement depuis l'URL ! Il est donc possible de réaliser des attaques XSS (dites non-persistantes) en manipulant les paramètres des urls 😆.

**😈 Comment la réaliser ?**

Par exemple, en réalisant une recherche sur [http://allocine.fr](http://allocine.fr/), on constate que le mot-clef saisi se retrouve dans l'URL ET est réaffiché dans la page. Une recherche de *batman* m'amène sur l'URL http://www.allocine.fr/recherche/?q=batman et mon terme de recherche m'est représenté.

Que se passe-t-il si je modifie ?q=batman par ?q=<h1>batman</h1> dans la barre d'adresse ? Est-ce que *batman* s'affiche en grand sur la page ? Si oui, attaque XSS par l'URL done !

Malheureusement, l'attaque échoue sur AlloCiné 😢.

Mais d'ailleurs, est-ce que je ne suis pas en train de me hacker moi-même ? Quel est l'intérêt ?

Bonne question ! Il n'y a que nous qui voyons l'attaque, puisqu'elle n'est pas sauvegardé en bdd !

Mais si on on postait un lien comprenant notre attaque XSS sur un forum ? Les internautes qui cliqueraient dessus se retrouveraient sur le site victime, avec notre attaque XSS qui s'exécuterait. On pourrait alors récupérer leurs cookies de session, et ciao ciao !

**🛡️ Comment se sont-ils protégés ?**

Comme pour les attaques XSS classique.

En récupérant le mot-clef dans l'URL, ils l'ont filtrer avec strip_tags().

```php
$keyword = strip_tags($_GET['q']);
```

Avant d'afficher *mon* terme de recherche dans *leur* page, ils l'ont filtré avec htmlentities().

```html
<h2><?= htmlentities($keyword) ?> sur AlloCiné</h2>
```

### 💣 Injections SQL

L'idée est de faire exécuter nos propres requêtes SQL sur la base de données de notre site victime 😆.

**😈 Comment la réaliser ?**

1. Trouvez un site où la soumission d'un formulaire déclenche selon vous une requête SQL. Pas trop difficile, c'est presque toujours le cas ! Par exemple, un formulaire de connexion va faire une requête SQL pour vous retrouver dans leur bdd...
2. Au lieu de taper votre pseudo dans le form, tapez plutôt une requête SQL. Ou un bout de requête SQL.
3. Si vous avez de la chance, votre requête sera exécutée !
4. Si votre requête était un DROP DATABASE, ça fait bobo.

**😈😈  Oui d'accord, mais comment *vraiment* la réaliser ?**

1. Vous devez deviner quelle est la requête SQL exécutée... Pour l'exemple d'un formulaire de login, c'est peut-être SELECT * FROM users WHERE username = 'monPseudo'
2. Vous pouvez modifier la partie *monPseudo* de cette requête, grâce au formulaire !
3. Tapez quelque chose comme '; DROP TABLE users; -- dans le champ de pseudo et soumettez le form !
4. La requête exécutée devient alors :
5. SELECT * FROM users WHERE username = ''; DROP TABLE users; --'
6. Si vous avez de la chance, la table users a été anéantie 😿

**🛡️ Comment auraient-ils dû se protéger ?**

Si l'injection SQL fonctionne, c'est certainement parce qu'ils ont fait cette méga-gaffe pour créer leur requête à partir de données provenant d'utilisateurs :

```php
<?php

//récupère la valeur du pseudo depuis le form

$username = $_POST['username'];

//crée la requête en insérant directement la variable dedans !! ouch.

$sql = "SELECT * FROM users WHERE username = '$username'";

//exécute la requête

//...

//pleure
```

Si la requête SQL est créée à partir de sources pas fiables (ie. d'un formulaire ou de l'URL), il faut toujours préparer la requête, puis utiliser les paramètres nommés :

```php
<?php

//récupère la valeur du pseudo depuis le form

$username = $_POST['username'];

//crée la requête avec un paramètre nommé !

$sql = "SELECT * FROM users WHERE username = :username";

//prépare la requête

$stmt = $pdo->prepare($sql);

//remplace le paramètre par la vraie valeur

$stmt->bindValue(":username", $username);

//exécute la requête

//...

//rip les pirates
```

Ils auraient été protégés virtuellement à 100% seulement en faisant ça. Un peu plus long, mais ça vaut le coup !

### 💣 Attaque CSRF (cross-site request forgery)

À prononcer *siseurf* ! Eh oui !

Plus compliquée, cette attaque... Elle permet de faire faire des choses à notre victime sans qu'elle ne s'en rende compte, en exploitant généralement le fait qu'elle soit déjà connecté sur un site comportant des failles 😆.

**😈 Comment la réaliser ?**

1. Trouvez un site mal protégé, par exemple où la soumission du formulaire de changement de mot de passe se fait en GET, et sans confirmation de l'ancien mdp.
2. Assurez-vous que votre victime (un utilisateur du site) est actuellement connecté sur le site. He oui, c'est pas simple.
3. Envoyez-lui un email comprenant un lien de ce type :
4. <a href="http://www.site-mal-protege.com/change-password.php?newpass=tiguidou">Voir des chatons mignons</a>
5. Si la victime clique sur votre lien, elle est amenée sans le savoir sur le site comportant la faille, et son mot de passe est changé pour *tigidou* !
6. Vous pouvez maintenant vous connecter en tant que votre victime sur ce site, puisque vous connaissez son mot de passe.

WTF ? Lorsque le site reçoit la requête sur change-password.php, il vérifie d'abord si l'utilisateur est bien connecté, pour savoir *qui* est en train de changer son mot de passe. Et donc s'il doit procéder ou pas au changement en bdd.

Et... oui ! L'utilisateur est connecté, vous vous en êtes assuré avant d'envoyer votre email ! Alors le site exécute réellement la requête de changement de mot de passe !

*L'exemple de scénario avec le changement de mot de passe n'en est qu'un, exemple. On aurait pu poster un message en son nom, supprimer son compte, déclencher un achat, ou un virement bancaire ! Nimporte quel form peut potentiellement être soumis ainsi !*

**🛡️ Comment auraient-ils dû se protéger ?**

Très important à savoir : il n'est pas réellement possible de savoir si une requête à votre site a été déclenché *depuis* votre site, ou d'ailleurs (boîte mail ici). En tout cas, pas de manière fiable.

Et pourtant, c'est bien la seule manière de se protéger... Avant de changer le mot de passe, on doit s'assurer que c'est bien l'utilisateur qui a rempli le formulaire, bien au chaud sur votre site.

Voici donc la seule manière qu'ils avaient de protéger leurs utilisateurs :

1. Avant l'affichage du formulaire, générer une chaîne aléatoire impossible à deviner, avec random_bytes() en PHP. Cette chaîne est souvent appelée *token*, ou jeton.
2. Stocker cette chaîne dans la session de l'utilisateur : $_SESSION['token'] = $token;
3. Placer ce token en valeur d'un input caché du formulaire :

```html
<form action="change-password.php">

<input type="password" name="newpass">

<!-- Notre token ! -->

<input type="hidden" name="token" value="<?= $token ?>">

<button>OK !</button>

</form>
```
 
- Lorsque le formulaire est soumis, *s'assurer que le token reçu (du formulaire) correspond bien à celui stocké en session*.
    
    - Si non, rejeter complètement la demande, c'est trop louche !! b. Si oui, vous savez que c'est bien votre site qui a affiché ce formulaire, et vous pouvez procéder au changement de mot de passe en base de données.
    

**Comment fonctionne cette protection ?**

Comment pouvons-nous contourner cette protection ??? Comment écririons nous notre lien maintenant ?

<a href="http://www.site-mal-protege.com/change-password.php?newpass=tiguidou&token=?????">Voir des chatons mignons</a>

On ne sait pas quelle valeur donner au token ! De toutes façons, si l'utilisateur n'est pas allé de lui-même sur le site, il n'a même pas de token en session ! Et nous sommes des pirates au chômage. Ils nous ont kill.

Et oui, si vous vous posez la question : le site devrait en principe insérer un tel token *dans tous ses formulaires* !!! On ne se le cache pas, c'est du taf.

Mais *rejoice* : des frameworks comme Symfony incluent une protection totale contre les attaques CSRF par défaut !

### 💣 Attaque par force brute

Par essais et erreurs, vous essayer de déterminer le mot de passe de votre victime et de vous connecter avec son compte 😆.

Mais c'est un peu long à la mano... alors...

**😈 Comment la réaliser ?**

Pour faire simple, imaginons que le formulaire de connexion soit fait en GET.

1. Trouvez le pseudo ou l'email de votre victime (assez facile)
2. Réaliser en PHP une requête vers le site :

```php
<?php

//tente de se connecter avec yo et abc comme identifiants

$result = file_get_contents("https://www.lesite.com/login.php?pseudo=yo&pass=abc");
```

On recherche sur StackOverflow comment générer toutes les combinaisons de lettres possibles : https://stackoverflow.com/questions/2617055/how-to-generate-all-permutations-of-a-string-in-php
Puis on exécute la requête en boucle avec toutes ces permutations !

```php
<?php

//une fonction qui génère toutes les chaînes possibles (voir 3.)

$permutations = permute("abcdefghijklmnopqrstuvwxyz");

foreach($permutations as $password){

$result = file_get_contents("https://www.lesite.com/login.php?pseudo=yo&pass=$password");

//quand on trouve le bon mdp... c'est gagné.

}
```

Et oui, c'est aussi possible de faire les requêtes en POST ! Voir [ici par exemple](https://stackoverflow.com/questions/5647461/how-do-i-send-a-post-request-with-php).

**🛡️ Comment auraient-ils pu protéger leur utilisateur ?**

Avant tout, disons bien que si l'utilisateur a choisi un mdp compliqué, ce sera beaucoup plus difficle pour nous de la deviner ! Plus long en tout cas.

Mais le site pouvait-il faire quelque chose pour arrêter cette attaque ?

1. Ils pourraient compatibiliser le nombre d'essais erronés pour se connecter, puis verrouiller le compte après x essais infrutueux. Mais c'est à double tranchants ! Si un site se protège comme ça, on peut le retourner contre lui et verrouiller le compte de tous ses utilisateurs en faisant des requêtes volontairement erronnées sur tous les pseudo qu'on puisse imaginer !
2. Idem, mais avec l'adresse IP. Ils pourraient bannir notre adresse IP après x requêtes en quelques secondes. Mais c'est très délicat à mettre en place en PHP.

À vrai dire, mieux vaut s'en remettre à son sysadmin et lui dire de mettre en place [fail2ban](https://www.fail2ban.org/) 🕶️

### 🚨 En résumé, pour se protéger...

**💥 Attaques XSS**

- retirer les balises HTML avec strip_tags() quand on récupère des données utilisateurs
- échapper les caractères spéciaux avant l'affichage avec htmlentities()
- [strip_tags](https://www.php.net/manual/fr/function.strip-tags.php) / [htmlentities](https://www.php.net/manual/fr/function.htmlentities.php)

**💥 Injections SQL**

- Toujours utiliser les requêtes préparées, avec $pdo->prepare();
- Les données de la requête sont placées dans des paramètres nommés
- [prepare](https://www.php.net/manual/fr/pdo.prepare.php) / [bindvalue](https://www.php.net/manual/fr/pdostatement.bindvalue.php)

**💥 Attaques CSRF**

- Générer un token aléatoire avant chaque affichage de formulaire
- S'assurer que le token envoyé est le même que celui en session
- [random_bytes](https://www.php.net/manual/fr/function.random-bytes.php) / [sessions PHP](https://www.php.net/manual/fr/reserved.variables.session.php)

**💥 Attaques par force brute**

- [fail2ban](https://www.fail2ban.org/)

---