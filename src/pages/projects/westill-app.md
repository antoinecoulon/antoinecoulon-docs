# Projet Westill App

- [Projet Westill App](#projet-westill-app)
  - [Stack](#stack)
    - [Choix Frontend](#choix-frontend)
    - [Choix Backend](#choix-backend)

---

## Stack

Front: flutter ? react native ?

Back: BaaS clé en main ? (firebase ou appwrite.io), sinon Dart pour flutter ou ??? avec react Nat ?

### Choix Frontend

Flutter vs React Native ?

Dev natif Kotlin/Swift = plus lourd...

### Choix Backend

- Si Flutter:

AppWrite.io VS Firebase

> Firebase et Appwrite sont tous deux des solutions BaaS (Backend-as-a-Service) permettant de gérer facilement le backend d'une application. Cependant, ils ont des approches différentes et présentent des avantages et des inconvénients selon les besoins du projet.

🔥 Firebase (Google)

✅ Avantages :

Simplicité et rapidité : Facile à configurer et à intégrer avec Flutter ou React Native.

Base de données en temps réel : Firestore et Realtime Database sont optimisés pour la synchro instantanée.

Hébergement et déploiement rapide : Service cloud sans gestion de serveur.

Notifications push et Analytics : Intégrés avec Firebase Cloud Messaging (FCM) et Google Analytics.

Machine Learning et IA : Services avancés comme la reconnaissance de texte, l’analyse d’image, etc.

⚠️ Inconvénients :

Dépendance à Google : Fermé et propriétaire.

Coût élevé : Le pricing peut exploser si l’appli devient populaire.

Requêtes limitées : Firestore impose des quotas et peut être coûteux pour un gros trafic.

Moins de contrôle : Pas d’auto-hébergement, donc dépendance aux serveurs de Google.

🚀 Appwrite (Open-source)

✅ Avantages :

Auto-hébergeable : Tu peux l’installer sur ton propre serveur (Docker) et garder le contrôle des données.

Gratuit : Pas de coûts cachés si auto-hébergé, contrairement à Firebase qui peut devenir cher.

Base de données NoSQL : Plus flexible qu’un Firestore avec requêtes avancées.

Stockage intégré : Gère l’upload et la gestion de fichiers facilement.

Sécurité et confidentialité : Les données restent sur ton serveur (ou celui d’Appwrite Cloud si tu choisis cette option).

Fonctions serverless : Comme Firebase Functions, mais exécutables en différents langages.

⚠️ Inconvénients :

Moins mature que Firebase : Moins d’outils prêts à l’emploi et moins d’intégrations.

Scalabilité : Gérer un serveur peut être complexe si ton appli explose en popularité.

Temps réel limité : Pas aussi performant que Firebase pour la synchro instantanée (WebSockets encore en beta).

Pas d’outil ML/AI : Contrairement à Firebase, pas d’intégration IA native.

🔎 Lequel choisir pour ton festival ?
Critère
Firebase
Appwrite

Facilité de mise en place
✅ Très simple
⚠️ Nécessite une installation (Docker)

Temps réel (chat, mises à jour live)
✅ Très performant
⚠️ WebSockets en beta

Contrôle des données
❌ Dépend de Google
✅ Auto-hébergeable

Coût
⚠️ Gratuit au début, mais coûteux à grande échelle
✅ Gratuit en auto-hébergé

Scalabilité
✅ Très scalable
⚠️ Nécessite gestion manuelle

Intégration avec Flutter / React Native
✅ SDK officiel très performant
✅ Bon support, mais moins de docs

Fonctions avancées (ML, Analytics, Notifications)
✅ Intégrées
❌ À gérer soi-même

🎯 Conclusion pour ton festival :
Si tu veux une solution rapide, facile et prête à scaler → Firebase 🔥

Si tu veux garder le contrôle et éviter les coûts cachés → Appwrite 🚀

Si l’app nécessite des mises à jour en temps réel massives (chat, streaming de données), Firebase est mieux.
Si tu préfères un backend open-source et contrôlable, Appwrite est un bon choix, surtout si tu peux gérer un serveur.

👉 Tu comptes utiliser des fonctionnalités en temps réel (chat, files d’attente, MAJ live) ? 😊
