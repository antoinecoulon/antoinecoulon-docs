---

---

# Base de données

- [Base de données](#base-de-données)
  - [Ressources](#ressources)
  - [Guide des Opérateurs (MongoDB)](#guide-des-opérateurs-mongodb)
    - [Opérateurs de Comparaison](#opérateurs-de-comparaison)
    - [Opérateurs Logiques](#opérateurs-logiques)
    - [Opérateurs de Tableau](#opérateurs-de-tableau)
    - [Opérateurs d'Existence](#opérateurs-dexistence)
    - [Opérateurs de Mise à Jour](#opérateurs-de-mise-à-jour)
  - [Bonnes Pratiques](#bonnes-pratiques)
  - [Notes Importantes](#notes-importantes)

---

## Ressources

- [MySQL Sample Database](https://www.mysqltutorial.org/getting-started-with-mysql/mysql-sample-database/)

## Guide des Opérateurs (MongoDB)

### Opérateurs de Comparaison

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

### Opérateurs Logiques

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

### Opérateurs de Tableau

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

### Opérateurs d'Existence

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

### Opérateurs de Mise à Jour

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

## Bonnes Pratiques

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