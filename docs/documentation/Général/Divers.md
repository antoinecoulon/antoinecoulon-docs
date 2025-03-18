---
sidebar_position: 1
description: Notions diverses de dev
---

# Notions diverses
<em>à trier et organiser...</em>
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