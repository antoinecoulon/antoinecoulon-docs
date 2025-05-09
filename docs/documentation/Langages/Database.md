# Base de données

- [Base de données](#base-de-données)
  - [Ressources](#ressources)
  - [SQL Server](#sql-server)
  - [Transact-SQL](#transact-sql)
    - [Variables](#variables)
    - [Conditionnelles](#conditionnelles)
    - [Output](#output)
    - [Curseurs](#curseurs)
      - [Clause FOR UPDATE](#clause-for-update)
      - [Clause CURRENT OF](#clause-current-of)
      - [Exemple complet de Curseur](#exemple-complet-de-curseur)
    - [Exceptions](#exceptions)
    - [Procédures \& fonctions stockées](#procédures--fonctions-stockées)
      - [Procédures](#procédures)
      - [Fonctions scalaires](#fonctions-scalaires)
      - [Fonctions table](#fonctions-table)
    - [Triggers / Déclencheurs](#triggers--déclencheurs)
      - [Déclencheur AFTER](#déclencheur-after)
      - [Déclencheur INSTEAD OF](#déclencheur-instead-of)
  - [MongoDB](#mongodb)
    - [Introduction](#introduction)
      - [Caractéristiques principales](#caractéristiques-principales)
      - [Terminologie MongoDB vs. Base de données relationnelle](#terminologie-mongodb-vs-base-de-données-relationnelle)
    - [Installation et Démarrage avec MongoDB](#installation-et-démarrage-avec-mongodb)
    - [Créer une application Spring Boot avec une base MongoDB (pas à pas)](#créer-une-application-spring-boot-avec-une-base-mongodb-pas-à-pas)
      - [Configurer MongoDB](#configurer-mongodb)
      - [Créer l'utilisateur MongoDB](#créer-lutilisateur-mongodb)
      - [Créer une entité](#créer-une-entité)
    - [MongoDB queries](#mongodb-queries)
    - [Guide des Opérateurs](#guide-des-opérateurs)
      - [Opérateurs de Comparaison](#opérateurs-de-comparaison)
      - [Opérateurs Logiques](#opérateurs-logiques)
      - [Opérateurs de Tableau](#opérateurs-de-tableau)
      - [Opérateurs d'Existence](#opérateurs-dexistence)
      - [Opérateurs de Mise à Jour](#opérateurs-de-mise-à-jour)
    - [Bonnes Pratiques](#bonnes-pratiques)
  - [Notes Importantes](#notes-importantes)
  - [Firebase](#firebase)
    - [Firebase \& JS](#firebase--js)

---

## Ressources

- [MySQL Sample Database](https://www.mysqltutorial.org/getting-started-with-mysql/mysql-sample-database/)

---

## SQL Server

TODO...

---

## Transact-SQL

### Variables

```sql
-- définir une variable
DECLARE @nom VARCHAR(50)='Dupont';

-- afficher le nom dans l'onglet "resultat"
SELECT @nom;

-- valoriser ma variable
DECLARE @id_client INT;
SELECT @id_client=id_client, @nom=nom FROM Clients WHERE id_client=-142;

-- afficher le nom dans l'onglet "message"
PRINT CONCAT('ID: ' , @id_client);
PRINT 'Nom: ' + @nom;
```

### Conditionnelles

```sql
-- case par valeur
SELECT id_commande AS "n° de commande",
CASE statut
WHEN 'EL' THEN 'En livraison'
WHEN 'LI' THEN 'Livrée'
ELSE 'Erreur'
END etatStatut
FROM Commandes

-- case par condition
SELECT id_commande AS "n° de commande",
CASE
WHEN DATEDIFF(DAY,date_cmd,GETDATE())>=14 THEN 'plus de deux semaines'
WHEN DATEDIFF(DAY,date_cmd,GETDATE())>=7 THEN 'plus d''une semaine'
ELSE 'moins d''une semaine'
END etat
FROM Commandes;

--IF avec une seule instruction
--DECLARE @nbClient INT
--SELECT @nbClient= COUNT(*) FROM Clients
--IF @nbClient > 5
--PRINT CONCAT('nb de clients: ',@nbClient);
--ELSE
--PRINT 'moins de 5 clients';

DECLARE @nbClient INT;
DECLARE @nbFixe INT;
SELECT @nbClient= COUNT(*), @nbFixe= (SELECT COUNT(fixe) FROM Clients WHERE fixe IS NOT NULL)
IF @nbClient > 5
BEGIN
PRINT CONCAT('nb de clients: ',@nbClient);
PRINT CONCAT('nb de fixe: ',@nbFixe);
END
ELSE
PRINT 'moins de 5 clients';

--amorçage
DECLARE @i INT = 1;
WHILE @i <= 10
BEGIN
PRINT CONCAT('7 x ',@i,' = ',7*@i);
SELECT @i = @i + 1;
END
```

### Output

```sql
-- clause Output
INSERT INTO Clients
(id_client, nom, prenom, date_naissance, ville, portable)
OUTPUT INSERTED.*
VALUES
(-153, 'Holmes', 'Sherlock', '10/12/2003', DEFAULT, '0758595456');

BEGIN TRAN suppression;
DELETE Clients
OUTPUT deleted.*
WHERE id_client < 0;

ROLLBACK TRAN suppression;

BEGIN TRAN modification;
UPDATE Clients set prenom = NULL
OUTPUT deleted.id_client, deleted.prenom avant, inserted.prenom apres

ROLLBACK TRAN modification;

BEGIN TRAN inserer;
DECLARE @tclients TABLE (
    id_client INT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(40),
    date_naissance DATE,
    ville VARCHAR(50),
    fixe NUMERIC(10)
    );
INSERT INTO Clients (id_client, nom, prenom, date_naissance, ville, fixe)
OUTPUT inserted.id_client, inserted.nom, inserted.prenom, inserted.date_naissance, inserted.ville, inserted.fixe INTO @tclients
VALUES(-154, 'Watson', 'John', '10/12/2000', DEFAULT, '0251534565');
SELECT * FROM @tclients;
DECLARE @date_naissance DATE;
SELECT @date_naissance= date_naissance FROM @tclients;
PRINT @date_naissance;
```

### Curseurs

```sql
-- Déclarer le Curseur
DECLARE cClients CURSOR FOR SELECT noCli, nom, prenom FROM Clients WHERE noCli < 5;

-- Ouvrir le curseur
OPEN cClients;

-- Fetch (je récupère les colonnes du SELECT)
DECLARE @id INT;
DECLARE @nom VARCHAR(30);
DECLARE @prenom VARCHAR(30);
FETCH NEXT FROM cClients INTO @id, @nom, @prenom;
-- Parcourir les lignes
WHILE @@FETCH_STATUS = 0
    BEGIN
        -- Traiter les données puis fetch ligne suivante
        PRINT CONCAT('client n°', @id, ' : ', @prenom, ' ', @nom);
        FETCH NEXT FROM cClients INTO @id, @nom, @prenom;
    END

-- Fermer le curseur
CLOSE cClients;
-- Libérer le curseur
DEALLOCATE cClients;
```

#### Clause FOR UPDATE

Au moment de la déclaration du curseur. Pose des verrous.

```sql
DECLARE cFiches CURSOR FOR
SELECT noFic, etat FROM Fiches WHERE etat = 'EC' FOR UPDATE OF etat;
```

#### Clause CURRENT OF

Indique la ligne pointée par le curseur. Dans la restriction d’une instruction UPDATE ou DELETE.

```sql
UPDATE Fiches SET etat = 'RE' WHERE CURRENT OF cFiches;
```

#### Exemple complet de Curseur

```sql
DECLARE cFiches CURSOR FOR SELECT noFic, etat FROM Fiches WHERE etat = 'EC' FOR UPDATE OF etat;
DECLARE @noFic NUMERIC(6);
DECLARE @etat CHAR(2);
DECLARE @nbEC INT;

OPEN cFiches;
FETCH NEXT FROM cFiches INTO @noFic, @etat;
WHILE @@FETCH_STATUS = 0
    BEGIN
        SELECT @nbEC = COUNT(*) FROM LignesFic WHERE noFic = @noFic AND retour IS NULL;
        PRINT CONCAT(@noFic, ' -> ', @nbEC);
        IF @nbEC = 0
            UPDATE Fiches SET etat = 'RE' WHERE CURRENT OF cFiches;
            FETCH NEXT FROM cFiches INTO @noFic, @etat;
    END
CLOSE cFiches;
DEALLOCATE cFiches;
```

### Exceptions

Un message d'exception comprend:

- Un numéro d'erreur (prédifinie: 0 à 50 000, personnalisée: 50 000 à 2 147 483 647)
- Un niveau de criticité (de 0 (information) à 25 (problème grave))
- Un état (info complémentaire, de 0 à 255)
- La localisation (numéro de ligne)
- Le message

```sql
THROW 50001, 'Exception levée par l''utilisateur', 1;

-- avec un message personnalisé
DECLARE @message VARCHAR(100) = 'Exception levée par l''utilisateur ' + USER;
THROW 50002, @message, 1;

-- message personnalisé multilingue
EXEC sp_addmessage 50003, 17, 'Exception in english', @lang='us_english', @replace='replace';
EXEC sp_addmessage 50003, 17, 'Exception en français', @lang='Français', @replace='replace';
DECLARE @messageFR NVARCHAR(100) = FORMATMESSAGE(50003);
THROW 50003, @messageFR, 1;
```

Gérer les exceptions:

```sql
BEGIN TRY
    IF(RAND()<0.5)
        THROW 50006, 'Erreur', 1
    PRINT 'Pas de levée d''exception';
END TRY
BEGIN CATCH
    PRINT 'Récupération de l''exception levée';
END CATCH;

-- Traitement:
BEGIN CATCH
    PRINT 'Récupération de l''exception levée';
    PRINT CONCAT('Message : ', ERROR_MESSAGE());
    PRINT CONCAT('Numéro : ', ERROR_NUMBER());
    PRINT CONCAT('Criticité : ', ERROR_SEVERITY());
    PRINT CONCAT('État : ', ERROR_STATE());
END CATCH;
```

### Procédures & fonctions stockées

Avantages des procédures et fonctions stockées:

- Performances
  - Stockées dans la base de données
  - Vérifiées (analyse syntaxique et sémantique) et compilées à la création
- Sécurité
  - Possibilité de donner des droits un utilisateur uniquement sur certaines procédures et fonctions
- Green IT

#### Procédures

Déclarer une procédure:

```sql
GO
CREATE OR ALTER PROC hw AS
PRINT 'Hello World!';
GO
```

Appeler une procédure:

```sql
EXEC hw; --Messages: Hello World!
```

Avec des paramètres:

```sql
-- Params en entrée (IN)
CREATE OR ALTER PROCEDURE articlePlusLoue(@codeCat VARCHAR(4) = '%') AS
BEGIN
    DECLARE @refArt CHAR(3) = (SELECT a.refart FROM LignesFic l
        INNER JOIN Articles a ON l.refArt = a.refArt
        INNER JOIN Modeles m ON a.noModele = m.noModele
        WHERE codeCate LIKE @codeCat GROUP BY a.refArt ORDER BY COUNT(*) DESC
        OFFSET 0 ROW FETCH NEXT 1 ROW ONLY);
    IF @codeCat = '%'
        PRINT 'L''article le plus loué toutes catégories confondues';
    ELSE
        PRINT CONCAT('L''article le plus loué de la catégorie ', @codeCat)
        PRINT(CONCAT('est la référence ', @refArt));
END;

EXECUTE articlePlusLoue;
EXECUTE articlePlusLoue 'FOA';

-- Params en sortie (OUT)
CREATE OR ALTER PROCEDURE separeDate @date DATE,
                                    @jour INT OUT,
                                    @mois INT OUT,
                                    @annee INT OUT AS
BEGIN
    SELECT @jour = DAY(@date);
    SELECT @mois = MONTH(@date);
    SELECT @annee = YEAR(@date);
END;

DECLARE @j INT; DECLARE @m INT; DECLARE @a INT;
EXECUTE separeDate '17/05/2023', @j OUT, @m OUT, @a OUT;
SELECT @j jour, @m mois, @a année;
```

#### Fonctions scalaires

Déclarer une fonction scalaire:

```sql
CREATE OR ALTER FUNCTION nbClients() RETURNS INT AS
BEGIN
    DECLARE @nb INT
    SELECT @nb = COUNT(*) FROM Clients;
    RETURN @nb;
END;
```

Appeler cette fonction:

```sql
SELECT dbo.nbClients() nbClientsTotal;

DECLARE @nb INT;
EXECUTE @nb = dbo.nbClients;
PRINT CONCAT('nbClients : ', @nb);
```

Avec paramètres:

```sql
CREATE OR ALTER FUNCTION nbFiches(@noCli NUMERIC(6) = 2)
RETURNS INT AS
BEGIN
    DECLARE @nb NUMERIC(6);
    SELECT @nb = COUNT(*) FROM Fiches WHERE noCli = @noCli;
    RETURN @nb;
END;

SELECT dbo.nbFiches(1) nbFichesDuClient;
SELECT dbo.nbFiches(DEFAULT) nbFichesDuClient;
DECLARE @nbF INT;
EXECUTE @nbF = dbo.nbFiches 1;
PRINT @nbF;
EXECUTE @nbF = dbo.nbFiches;
PRINT @nbF;
```

#### Fonctions table

Déclarer une fonction table:

```sql
CREATE OR ALTER FUNCTION articlesDe(@codeCat CHAR(4), @codeGam CHAR(2)) RETURNS TABLE AS
RETURN SELECT noModele, designation
    FROM Modeles
    WHERE codeCate = @codeCat AND codeGam = @codeGam;

-- avec plusieurs instructions
CREATE OR ALTER FUNCTION analyseModele()
RETURNS @stats TABLE(noModele INT PRIMARY KEY, nbExemplaires INT,
                    nbLocations INT, dureeMoyenneLocation INT) AS
BEGIN
    INSERT INTO @stats
        SELECT noModele, COUNT(DISTINCT a.refArt), COUNT(*), AVG(DATEDIFF(DAY, depart, retour))
        FROM LignesFic l INNER JOIN Articles a ON l.refArt = a.refArt
        WHERE retour IS NOT NULL
        GROUP BY noModele
    RETURN;
END;
```

Appeler cette fonction:

```sql
SELECT * FROM analyseModele();
```

Avec paramètres:

```sql
CREATE OR ALTER FUNCTION nbFiches(@noCli NUMERIC(6) = 2)
RETURNS INT AS
BEGIN
    DECLARE @nb NUMERIC(6);
    SELECT @nb = COUNT(*) FROM Fiches WHERE noCli = @noCli;
    RETURN @nb;
END;

SELECT dbo.nbFiches(1) nbFichesDuClient;
SELECT dbo.nbFiches(DEFAULT) nbFichesDuClient;
DECLARE @nbF INT;
EXECUTE @nbF = dbo.nbFiches 1;
PRINT @nbF;
EXECUTE @nbF = dbo.nbFiches;
PRINT @nbF;
```

### Triggers / Déclencheurs

Le principe de fonctionnement des déclencheurs:

- Instructions exécutées automatiquement lors d’une instruction *INSERT*, *UPDATE* ou *DELETE*
- Permet l’automatisation de comportements
- Intégrité complexe des données

#### Déclencheur AFTER

- Seule dans son lot d’instructions
- S’exécute après l’exécution de l’instruction le déclenchant
- L’instruction doit vérifier toutes les contraintes d’intégrité

```sql
-- déclaration:
GO
CREATE OR ALTER TRIGGER upd_clients ON Clients
FOR UPDATE AS
PRINT 'Maj table des clients';
GO

-- effet:
UPDATE Clients SET nom='DUPONT' WHERE nom='DUPOND';
-- Maj table des clients
-- (2 lignes affectées)

-- fonction Update()
CREATE OR ALTER TRIGGER upd_clients ON Clients
FOR UPDATE AS
IF UPDATE(nom)
    PRINT 'Changement de nom d''un client';

UPDATE Clients SET nom='DUPOND' WHERE nom='DUPONT';
-- Changement de nom d'un client
-- (2 lignes affectées)

-- exemple avec lien non transférable:
CREATE OR ALTER TRIGGER upd_fiches ON Fiches
FOR UPDATE AS
IF UPDATE(noCli)
    THROW 50008, 'Impossible de changer le propriétaire d''une fiche', 1;
```

Même si c'est à éviter pour des questions de performances, il est aussi possible d'utiliser des curseurs dans les déclencheurs.

#### Déclencheur INSTEAD OF

- Seule dans son lot d’instructions
- S’exécute à la place de l’instruction le déclenchant
- L’instruction ne vérifie pas nécessairement les contraintes d’intégrité

```sql
CREATE OR ALTER TRIGGER iof_ins_clients ON Clients
INSTEAD OF INSERT AS
IF EXISTS(SELECT * FROM Clients c INNER JOIN INSERTED i ON c.noCli = i.noCli)
    OR EXISTS(SELECT * FROM INSERTED WHERE noCli IS NULL)
BEGIN
    PRINT 'Numéro de client incorrect ! Il est automatiquement corrigé...';
    DECLARE @noCli NUMERIC(6);
    SELECT @noCli = MAX(noCli) FROM Clients;
    INSERT INTO Clients(noCli, nom, prenom, adresse, cpo, ville)
        SELECT @noCli + ROW_NUMBER() OVER(ORDER BY noCli),
                nom, prenom, adresse, cpo, ville FROM INSERTED;
END
ELSE
    INSERT INTO Clients(noCli, nom, prenom, adresse, cpo, ville)
        SELECT noCli, nom, prenom, adresse, cpo, ville FROM INSERTED;


INSERT INTO Clients(noCli, nom, cpo) VALUES(1, 'BOYADJIAN', 44100);
INSERT INTO Clients(nom, cpo) VALUES('LATOUCHE', 44100);
INSERT INTO Clients(noCli, nom, cpo) VALUES(50, 'BONS', 44100);
```

Insertion à travers une vue:

```sql
CREATE OR ALTER VIEW ClientsAvecFiches AS
SELECT c.noCli, nom, cpo, ville, noFic, dateCrea, datePaye, etat
FROM Clients c INNER JOIN Fiches f ON c.noCli = f.noCli;


CREATE OR ALTER TRIGGER iof_ins_clientsAvecFiches ON ClientsAvecFiches
INSTEAD OF INSERT AS
BEGIN
INSERT INTO Clients(noCli, nom, cpo, ville)
SELECT DISTINCT noCli, nom, cpo, ville FROM INSERTED;
INSERT INTO Fiches(noCli, dateCrea, datePaye, etat)
SELECT noCli, COALESCE(dateCrea, GETDATE()), datePaye, COALESCE(etat, 'EC') FROM INSERTED;
END;


INSERT INTO ClientsAvecFiches(noCli, nom, cpo, ville, etat)
    VALUES(55, 'BAYARD', 05000, 'Gap', 'EC');
```

---

## MongoDB

### Introduction

NoSQL = Not Only SQL

Le terme *NoSQL* désigne les bases de données qui ne reposent pas sur le modèle relationnel classique. Elles permettent de manipuler de grandes quantités de données non structurées ou semi-structurées.

Avantages du NoSQL:

- **Flexible** : Pas besoin de définir un schéma strict (ajout d’attributs à la volée).
- **Scalabilité horizontale** : Très adapté au Big Data et aux architectures distribuées.
- **Haute performance** en lecture/écriture.
- **Facile à manipuler** pour les développeurs web (souvent orienté JSON).

Inconvénients du NoSQL:

- **Pas de schéma strict** → risques d’incohérences.
- **Pas de langage de requête standard** (chaque base a son API spécifique).
- **Peu ou pas de support des transactions complexes** (selon les systèmes).

MongoDB est l’un des systèmes de bases de données NoSQL les plus populaires.

#### Caractéristiques principales

- **Orientée Document** (stocke des objets JSON → BSON).
- **Réplicable** : Haute disponibilité grâce à la réplication automatique.
- **Indexation** : Prend en charge les indexes simples et composés.
- **Langage de requête** proche de SQL.
- **Haute performance**, même avec un gros volume de données.
- **Populaire** : Communauté active, nombreux outils et drivers.

---

#### Terminologie MongoDB vs. Base de données relationnelle

| SGBDR (Relationnel) | MongoDB       |
|---------------------|---------------|
| Table               | Collection    |
| Ligne (Row)         | Document      |
| Colonne             | Champ (Field) |
| Index               | Index         |

---

### Installation et Démarrage avec MongoDB

1. Télécharger MongoDB depuis le site officiel : [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Installer le serveur (`mongod`) et le shell (`mongosh`).
3. Démarrer le serveur avec la commande :

```bash
mongod --dbpath <chemin-vers-dossier-data>
```

Dans un autre terminal, se connecter via :

```bash
mongosh
```

Il est aussi possible d'utiliser le GUI MongoCompass (proposé lors de l'install).

---

### Créer une application Spring Boot avec une base MongoDB (pas à pas)

Il faut ajouter le starter Spring Data MongoDB au projet Spring Boot (ici on utilise aussi Lombock et Spring Web).

#### Configurer MongoDB

```properties title="application.properties"
spring.data.mongodb.host=localhost
spring.data.mongodb.port=27017
spring.data.mongodb.database=mongoapp_db
spring.data.mongodb.username=admin
spring.data.mongodb.password=Pa$$w0rd
spring.data.mongodb.authentication-database=admin
```

#### Créer l'utilisateur MongoDB

Dans un terminal ou dans Compass:

```bash
mongosh
```

```js
use admin
db.createUser({
  user: "admin",
  pwd: "Pa$$w0rd",
  roles: [
    { role: "readWrite", db: "mongoapp_db" }
  ]
})

```

#### Créer une entité

Pour l'exemple, on créé une entité Avis:

```java
package com.exemple.mongoapp.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "avis")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Avis {

    @Id
    private String id;
    private String auteur;
    private String contenu;
    private int note;
}

```

(Rappel: Grâce à Lombok, pas besoin de créer manuellement les getters, setters, ou constructeurs.)

---

### MongoDB queries

[See](https://labex.io/fr/tutorials/mongodb-write-basic-mongodb-queries-420824)

---

### Guide des Opérateurs

#### Opérateurs de Comparaison

```sql
$eq (Égal)
```

Compare si une valeur est égale à une valeur spécifiée.

```sql
-- Trouve tous les utilisateurs de 25 ans

db.users.find({ age: { $eq: 25 } })
```

```sql
$ne (Non Égal)
```

Compare si une valeur n'est pas égale à une valeur spécifiée.

```sql
-- Trouve tous les produits qui ne sont pas inactifs

db.products.find({ status: { $ne: "inactive" } })
```

```sql
$gt (Plus Grand Que)
```

Compare si une valeur est supérieure à une valeur spécifiée.

```sql
-- Trouve tous les produits plus chers que 100€

db.products.find({ price: { $gt: 100 } })
```

```sql
$lt (Plus Petit Que)
```

Compare si une valeur est inférieure à une valeur spécifiée.

```sql
-- Trouve tous les utilisateurs mineurs

db.users.find({ age: { $lt: 18 } })
```

```sql
$gte (Plus Grand ou Égal)
```

Compare si une valeur est supérieure ou égale à une valeur spécifiée.

```sql
-- Trouve les produits avec un stock >= 10

db.products.find({ stock: { $gte: 10 } })
```

```sql
$lte (Plus Petit ou Égal)
```

Compare si une valeur est inférieure ou égale à une valeur spécifiée.

```sql
-- Trouve les produits avec un stock bas (≤ 5)

db.products.find({ stock: { $lte: 5 } })
```

#### Opérateurs Logiques

```sql
$and
```

Combine plusieurs conditions avec un ET logique.

```sql
-- Trouve les produits chers ET en stock

db.products.find({

    $and: [

        { price: { $gt: 50 } },

        { stock: { $gt: 0 } }

    ]

})
```

```sql
$or
```

Combine plusieurs conditions avec un OU logique.

```sql
-- Trouve les utilisateurs actifs OU admin

db.users.find({

    $or: [

        { status: "active" },

        { role: "admin" }

    ]

})
```

```sql
$not
```

Inverse la condition spécifiée.

```sql
-- Trouve les utilisateurs qui ne sont pas mineurs

db.users.find({

    age: { $not: { $lt: 18 } }

})
```

#### Opérateurs de Tableau

```sql
$in
```

Vérifie si une valeur correspond à une des valeurs d'un tableau.

```sql
-- Trouve les produits dans certaines catégories

db.products.find({

    category: { $in: ["sport", "loisir"] }

})
```

```sql
$nin
```

Vérifie si une valeur ne correspond à aucune des valeurs d'un tableau.

```sql
-- Trouve les utilisateurs avec un statut ni bloqué ni supprimé

db.users.find({

    status: { $nin: ["blocked", "deleted"] }

})
```

```sql
$all
```

Vérifie si un tableau contient tous les éléments spécifiés.

```sql
-- Trouve les tâches marquées urgent ET important

db.tasks.find({

    tags: { $all: ["urgent", "important"] }

})
```

#### Opérateurs d'Existence

```sql
$exists
```

Vérifie si un champ existe.

```sql
-- Trouve les utilisateurs avec un email

db.users.find({

    email: { $exists: true }

})
```

```sql
$type
```

Vérifie le type d'un champ.

```sql
-- Trouve les documents où l'âge est un nombre

db.users.find({

    age: { $type: "number" }

})
```

#### Opérateurs de Mise à Jour

```sql
$set
```

Définit une nouvelle valeur pour un champ.

```sql
-- Met à jour le statut d'un utilisateur

db.users.updateOne(

    { _id: userId },

    { $set: { status: "active" } }

)
```

```sql
$unset
```

Supprime un champ d'un document.

```sql
-- Supprime un champ temporaire

db.users.updateOne(

    { _id: userId },

    { $unset: { tempField: "" } }

)
```

```sql
$inc
```

Incrémente un champ d'une valeur spécifiée.

```sql
-- Incrémente un compteur

db.counters.updateOne(

    { _id: counterId },

    { $inc: { value: 1 } }

)
```

```sql
$push
```

Ajoute un élément à un tableau.

```sql
-- Ajoute un tag à un produit

db.products.updateOne(

    { _id: productId },

    { $push: { tags: "new" } }

)
```

```sql
$pull
```

Retire un élément d'un tableau.

```sql
-- Retire une catégorie d'un produit

db.products.updateOne(

    { _id: productId },

    { $pull: { categories: "obsolete" } }

)
```

### Bonnes Pratiques

1. Utilisez les index appropriés pour optimiser vos requêtes
2. Combinez les opérateurs pour des requêtes plus précises
3. Privilégiez les opérateurs spécifiques aux types de données
4. Testez vos requêtes sur un petit jeu de données avant la production
5. Utilisez la méthode explain() pour analyser les performances des requêtes

## Notes Importantes

- Les opérateurs commencent toujours par le symbole $
- La casse est importante dans MongoDB
- Les valeurs comparées doivent être du même type
- Certains opérateurs peuvent être combinés
- Les performances peuvent varier selon les opérateurs utilisés

---

## Firebase

### Firebase & JS

*Real Time Database* - Voir dans la console Firebase, la config du projet, pour l'implémentation:

```js
import { initializeApp } from '...' // CDN version (possible de faire avec npm: from "firebase/app")
import {
    getDatabase,
    ref,
    push,
    onValue,
    remove
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

// Webapp Firebase config
const firebaseConfig = {
    // apiKey: ...
    // authDomain: ...
    databaseURL: 'DATABASE_URL'
    // projectId: ...
    // storageBucket: ...
    // messagingSenderId: ...
    // appId: ...
}

const app = initializeApp(firebaseConfig) // Init
const database = getDatabase(app) // DB
const referenceInDB = ref(database, "leads") // Créer une référence de la DB en y passant la variable db et le nom de la ref

// Envoyer des données
push(referenceInDB, data)

// Récupérer un snapshot des data en DB à chaque changement
onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists() // Vérifier qu'il existe
    if (snapshotDoesExist) {        // Eviter les erreurs
        const snapshotValues = snapshot.val() // .val() pour obtenir l'objet qui contient la data
        const leads = Object.values(snapshotValues) // Transforme l'Objet en Array + prend seulement les valeurs, pas les keys

        // ... faire ce qu'on veut de la data
    }
})

// Supprime ! TOUTES ! les data de la référence
remove(referenceInDB) // Attention, supprime le snap et entraine une erreur
```
