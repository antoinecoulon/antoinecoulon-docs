# Base de données

- [Base de données](#base-de-données)
  - [Ressources](#ressources)
  - [SQL Server](#sql-server)
  - [Transact-SQL](#transact-sql)
    - [Variables](#variables)
    - [Conditionnelles](#conditionnelles)
    - [Output](#output)
    - [Curseurs](#curseurs)
  - [MongoDB](#mongodb)
    - [Guide des Opérateurs (MongoDB)](#guide-des-opérateurs-mongodb)
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

---

## MongoDB

### Guide des Opérateurs (MongoDB)

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
