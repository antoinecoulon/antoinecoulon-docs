---
sidebar_position: 8
---

# PHP / Symfony

- [PHP / Symfony](#php--symfony)
  - [Documentation](#documentation)
  - [Introduction à PHP](#introduction-à-php)
  - [Configuration de l'environnement](#configuration-de-lenvironnement)
    - [Téléchargement de PHP](#téléchargement-de-php)
    - [Installation sur Windows](#installation-sur-windows)
    - [Configuration du serveur web](#configuration-du-serveur-web)
    - [Installation de WAMP](#installation-de-wamp)
    - [Vérification de l'installation](#vérification-de-linstallation)
    - [Configuration de PHP](#configuration-de-php)
  - [Syntaxe de base](#syntaxe-de-base)
    - [Variables et types de données](#variables-et-types-de-données)
  - [Opérateurs](#opérateurs)
  - [Structures de contrôle](#structures-de-contrôle)
  - [Fonctions](#fonctions)
  - [Tableaux](#tableaux)
  - [Formulaires et traitement des données](#formulaires-et-traitement-des-données)
  - [Connexion à une base de données](#connexion-à-une-base-de-données)
  - [Sécurité](#sécurité)
  - [Sessions et cookies](#sessions-et-cookies)
  - [Gestion des fichiers](#gestion-des-fichiers)
  - [Conclusion](#conclusion)
  - [BONUS DE FRANÇOIS](#bonus-de-françois)
    - [Eviter les failles](#eviter-les-failles)
    - [Fonctions utiles](#fonctions-utiles)
    - [POO](#poo)
    - [Divers](#divers)
- [Créer un projet Symfony from scratch (or installation Wamp et Symfony)](#créer-un-projet-symfony-from-scratch-or-installation-wamp-et-symfony)
  - [INITIALISATION](#initialisation)

---

## Documentation

- [PHP](https://www.php.net/manual/fr/)
- [Symfony](https://symfony.com/doc/6.4/index.html)
- [Twig](https://twig.symfony.com/doc/3.x/)

---

## Introduction à PHP

**Qu'est-ce que PHP ?**

PHP (Hypertext Preprocessor) est un langage de script côté serveur utilisé principalement pour le développement web.

**Pourquoi utiliser PHP ?**

Facile à apprendre, largement utilisé, bien documenté, et intégré avec de nombreux systèmes de gestion de contenu (CMS) comme WordPress.

- Facilité d'apprentissage : PHP a une syntaxe simple et est facile à apprendre, surtout pour ceux qui ont déjà des connaissances en programmation.
- Large communauté : PHP bénéficie d'une vaste communauté de développeurs, ce qui signifie une abondance de ressources, de tutoriels et de forums d'aide.
- Compatibilité : PHP est compatible avec la plupart des serveurs web (comme Apache et Nginx) et des bases de données (comme MySQL, PostgreSQL, etc.).
- Performance : PHP est rapide et efficace, surtout avec les versions récentes (PHP 7 et PHP 8).
- Intégration avec les CMS : De nombreux systèmes de gestion de contenu (CMS) populaires comme WordPress, Joomla et Drupal sont basés sur PHP.

## Configuration de l'environnement

### Téléchargement de PHP

Rendez-vous sur le site officiel de PHP : [php.net](http://php.net/).

Téléchargez la version appropriée pour votre système d'exploitation.

### Installation sur Windows

Téléchargez le fichier ZIP de la version Windows.

Extrayez le contenu du fichier ZIP dans un répertoire de votre choix (par exemple, C:\php).

Ajoutez le répertoire PHP à votre variable d'environnement PATH :

Allez dans Panneau de configuration > Système et sécurité > Système > Paramètres système avancés > Variables d'environnement.

Dans la section Variables système, trouvez la variable Path et cliquez sur Modifier.

Ajoutez le chemin vers votre répertoire PHP (par exemple, C:\php).

### Configuration du serveur web

Pour exécuter des scripts PHP, vous aurez besoin d'un serveur web. Les options les plus courantes sont Apache et Nginx. Cependant, pour un environnement de développement local, des solutions comme XAMPP, WAMP ou MAMP sont très pratiques car elles incluent PHP, un serveur web et une base de données dans un seul package.

### Installation de WAMP

Téléchargez WAMP depuis [wampserver.com](http://wampserver.com/).

Suivez les instructions d'installation pour Windows.

Une fois installé, lancez WAMP et démarrez tous les services.

### Vérification de l'installation

Pour vérifier que PHP est correctement installé et configuré, créez un fichier info.php dans le répertoire racine de votre serveur web (par exemple, C:\xampp\htdocs pour XAMPP) avec le contenu suivant :
```php
<?php

phpinfo();

?>
```

---

Accédez à ce fichier via votre navigateur (par exemple, http://localhost/info.php). Vous devriez voir une page affichant des informations détaillées sur votre configuration PHP.

### Configuration de PHP

Le fichier de configuration principal de PHP est php.ini. Vous pouvez le trouver dans le répertoire d'installation de PHP ou dans le répertoire de configuration de votre serveur web. Voici quelques paramètres courants que vous pourriez vouloir ajuster :

- display_errors : Active ou désactive l'affichage des erreurs PHP.

display_errors = On

- error_reporting : Contrôle le niveau de rapport des erreurs.

error_reporting = E_ALL

- max_execution_time : Définit le temps maximum d'exécution d'un script.

max_execution_time = 30

- upload_max_filesize : Définit la taille maximale des fichiers téléchargés.

upload_max_filesize = 2M

Après avoir modifié php.ini, redémarrez votre serveur web pour appliquer les changements.

Avec ces étapes, vous devriez avoir un environnement de développement PHP opérationnel et prêt à l'emploi. Vous pouvez maintenant commencer à écrire et tester vos scripts PHP localement.

## Syntaxe de base

- Balises PHP
```php
<?php

// Code PHP ici

?>
```

---

- Commentaires
```php
<?php

// Ceci est un commentaire sur une ligne

/* Ceci est un commentaire

sur plusieurs lignes */

?>
```

---

### Variables et types de données

- Déclaration de variables
```php
<?php

$nom = "Jean";

$age = 25;

?>
```

- Types de données

Integer, Float, String, Boolean, Array, Object, NULL.

## Opérateurs

- Opérateurs arithmétiques
```php
<?php

$a = 10;

$b = 5;

echo $a + $b; // 15

?>
```

- Opérateurs de comparaison
```php
<?php

$a = 10;

$b = 5;

if ($a > $b) {

echo "a est plus grand que b";

}

?>
```

## Structures de contrôle

- Conditionnelles
```php
<?php

$heure = 15;

if ($heure < 12) {

    echo "Bonjour !";

} else {

    echo "Bonsoir !";

}

?>
```

- Boucles
    - For
```php
<?php

for ($i = 0; $i < 5; $i++) {

    echo $i;

}

?>
```

- While
```php
<?php

$i = 0;

while ($i < 5) {

    echo $i;

    $i++;

}

?>
```

- Foreach
```php
<?php

$fruits = ["pomme", "banane", "cerise"];

foreach ($fruits as $fruit) {

    echo $fruit;

}

?>
```

## Fonctions

- Déclaration de fonctions
```php
<?php

function direBonjour($nom) {

    return "Bonjour, " . $nom;

}

echo direBonjour("Jean");

?>
```

- Fonctions prédéfinies
```php
<?php

echo strlen("Bonjour"); // 7

?>
```

## Tableaux

- Tableaux indexés
```php
<?php

$fruits = array("pomme", "banane", "cerise");

echo $fruits[0]; // pomme

?>
```

- Tableaux associatifs
```php
<?php

$personne = array("nom" => "Jean", "age" => 25);

echo $personne["nom"]; // Jean

?>
```

## Formulaires et traitement des données

- Création d'un formulaire HTML
```html
<form method="post" action="traitement.php">

    Nom : <input type="text" name="nom">

    <input type="submit" value="Envoyer">

</form>
```

- Traitement des données du formulaire
```php
<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nom = $_POST['nom'];

    echo "Bonjour, " . $nom;

}

?>
```

## Connexion à une base de données

- Connexion à MySQL avec PDO
```php
<?php

$dsn = 'mysql:host=localhost;dbname=testdb';

$username = 'root';

$password = '';

try {

    $pdo = new PDO($dsn, $username, $password);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connexion réussie !";

} catch (PDOException $e) {

    echo "Erreur de connexion : " . $e->getMessage();

}

?>
```

- Exécution de requêtes SQL
```php
<?php

$stmt = $pdo->query("SELECT * FROM utilisateurs");

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

    echo $row['nom'];

}

?>
```

## Sécurité

- Validation des données
```php
<?php

$nom = htmlspecialchars($_POST['nom']);

echo $nom;

?>
```

- Prévention des injections SQL
```php
<?php

$stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE nom = :nom");

$stmt->execute(['nom' => $nom]);

?>
```

## Sessions et cookies

- Sessions
```php
<?php

session_start();

$_SESSION['nom'] = "Jean";

echo $_SESSION['nom'];

?>
```

- Cookies
```php
<?php

setcookie("nom", "Jean", time() + 3600);

echo $_COOKIE['nom'];

?>
```

## Gestion des fichiers

- Lecture et écriture de fichiers
```php
<?php

$fichier = 'test.txt';

$contenu = "Bonjour !";

file_put_contents($fichier, $contenu);

echo file_get_contents($fichier);

?>
```

## Conclusion

- Ressources supplémentaires
    - [W3Schools](https://www.w3schools.com/php/) 
    - [OpenClassrooms](https://openclassrooms.com/fr/courses/918801-concevez-votre-site-web-avec-php-et-mysql)

[PHP - Cours - Documentation.pdf](https://campuseni-my.sharepoint.com/:b:/r/personal/antoine_coulon2024_campus-eni_fr/Documents/PHP-Bonus/PHP%20-%20Cours%20-%20Documentation.pdf?csf=1&web=1&e=dd1ELP)

[PHP Syntax.pdf](https://campuseni-my.sharepoint.com/:b:/r/personal/antoine_coulon2024_campus-eni_fr/Documents/PHP-Bonus/PHP%20Syntax.pdf?csf=1&web=1&e=G3GeQe)

[PHPStorm - CheatSheet.pdf](https://campuseni-my.sharepoint.com/:b:/r/personal/antoine_coulon2024_campus-eni_fr/Documents/PHP-Bonus/PHPStorm%20-%20CheatSheet.pdf?csf=1&web=1&e=9gWzNC)

---

## BONUS DE FRANÇOIS

### Eviter les failles

[Faille CSRF.docx](https://campuseni-my.sharepoint.com/:w:/r/personal/antoine_coulon2024_campus-eni_fr/Documents/PHP-Bonus/Faille%20CSRF.docx?d=w7ffc9a98e4004050812086c3908c4328&csf=1&web=1&e=3tbXXA)

[Faille XSS.docx](https://campuseni-my.sharepoint.com/:w:/r/personal/antoine_coulon2024_campus-eni_fr/Documents/PHP-Bonus/Faille%20XSS.docx?d=w90479f1e950b436c9fc96a878a91bb89&csf=1&web=1&e=bAOtT1)

### Fonctions utiles

[Fonctions utiles Array .pdf](https://campuseni-my.sharepoint.com/:b:/r/personal/antoine_coulon2024_campus-eni_fr/Documents/PHP-Bonus/Fonctions%20utiles%20Array%20.pdf?csf=1&web=1&e=ApcNCd)

[Fonctions utiles Date.pdf](https://campuseni-my.sharepoint.com/:b:/r/personal/antoine_coulon2024_campus-eni_fr/Documents/PHP-Bonus/Fonctions%20utiles%20Date.pdf?csf=1&web=1&e=OLdSj1)

[Functions Date (version Objet).pdf](https://campuseni-my.sharepoint.com/:b:/r/personal/antoine_coulon2024_campus-eni_fr/Documents/PHP-Bonus/Functions%20Date%20(version%20Objet).pdf?csf=1&web=1&e=Xir6Ha)

[Fonctions utiles String.pdf](https://campuseni-my.sharepoint.com/:b:/r/personal/antoine_coulon2024_campus-eni_fr/Documents/PHP-Bonus/Fonctions%20utiles%20String.pdf?csf=1&web=1&e=mIABY4)

[String Functions.pdf](https://campuseni-my.sharepoint.com/:b:/r/personal/antoine_coulon2024_campus-eni_fr/Documents/PHP-Bonus/String%20Functions.pdf?csf=1&web=1&e=cELTlO)

### POO

[POO et Composer.pdf](https://campuseni-my.sharepoint.com/:b:/r/personal/antoine_coulon2024_campus-eni_fr/Documents/PHP-Bonus/POO%20et%20Composer.pdf?csf=1&web=1&e=57faNv)

[POO Recap.pdf](https://campuseni-my.sharepoint.com/:b:/r/personal/antoine_coulon2024_campus-eni_fr/Documents/PHP-Bonus/POO%20Recap.pdf?csf=1&web=1&e=oBLMpg)

### Divers

[Form Validation.pdf](https://campuseni-my.sharepoint.com/:b:/r/personal/antoine_coulon2024_campus-eni_fr/Documents/PHP-Bonus/Form%20Validation.pdf?csf=1&web=1&e=fxTI2Z)

[autoloading.pdf](https://campuseni-my.sharepoint.com/:b:/r/personal/antoine_coulon2024_campus-eni_fr/Documents/PHP-Bonus/autoloading.pdf?csf=1&web=1&e=gNVUdU)

---

# Créer un projet Symfony from scratch (or installation Wamp et Symfony)

## INITIALISATION

- On se place dans notre workspace et on lance un terminal.

On créé un projet symfony complet avec –webbapp
```bash
symfony new mon_projet —-webapp
```


- On va dans le répertoire et on initialise git (mais à priori, symfony le fait déjà à la création du projet)
```bash
git init
```

- On lance le serveur symfony (-d pour récupérer la main dans le terminal) et on checke qu’on a bien la page par défaut
```bash
symfony server:start -d
```

- Ajouter les fichiers au dépôt Git
```bash
git add .
```

- Faire un premier commit
```bash
git commit -m "Initial commit"
```

- Créer un dépôt distant sur GitHub. Lier le dépôt local au dépôt distant

Ajoutez l'URL du dépôt distant comme origine
```bash
git remote add origin https://github.com/Yonni-G/YG-SymfonyFromScratch.git
```

- Pousser le code vers le dépôt distant

Envoyez vos commits sur le dépôt distant
```bash
git branch -M main # Renomme la branche principale en "main" si nécessaire.

git push -u origin main
```

- Créer ma branche yonni, basculer dessus et la pusher en ligne Si main local est à jour, la nouvelle branche yonni sera aussi à jour
```bash
git branch yonni

git checkout yonni

git push origin yonni
```

1. Dans l’explorateur, clic droit sur mon projet puis “”Ouvrir avec PhpStorm
2. AJOUTER DES FONCTIONNALITES
3. Créer un contrôleur :
```bash
php bin/console make:controller MainController
```

- Ensuite, dans templates, on créé un dossier partials et on y créé nos fichiers _header.html.twig, _nav.html.twig, _footer.html.twig … et on va les include dans notre base.html.twig.