---
description: Déploiement de sites et d'applications
---

# DevOps

- [DevOps](#devops)
  - [Déploiement](#déploiement)
  - [Introduction au DevOps](#introduction-au-devops)
  - [Concepts](#concepts)
  - [Docker](#docker)

---

## Déploiement

- Github pages w/ GitHub actions
- [Digital ocean](https://www.digitalocean.com/)
- [Netlify](https://www.netlify.com/)
- [AppWrite.io](https://appwrite.io/) - Build app

---

## Introduction au DevOps

Une fusion du "Dev" et du "Ops"! Avant les développeurs et les administrateurs systèmes travaillaient chacun de leur côté.

Les *Ops* (Opérationnels: admins systèmes et réseaux...) garantissent la stabilité du système.

Les *Dev* (Développeurs) apportent de nouvelles fonctionnalités et des corrections le plus rapidement possible et à moindre coût.

L'objectif du devops est de donner du pouvoir aux développeurs ! (par ex. les laisser réaliser les déploiements). Travailler ensemble avec mise en commun des objectifs.

---

## Concepts

Le **Workflow** est le processus de traitement rattaché à un dépôt git, peut contenir un ou plusieurs travaux et être déclenché à la suite d'un évènement.

Le **Job** est un ensemble d'opérations exécuté dans un workflow, peut être éxecuté en parallèle ou en série.

Un job est composé d'une ou plusieurs **Step** (étape).

Exemple de workflow CI/CD typique:

- Développement (code)
- Commit
- CI PIPELINE
  - Build
  - Unit Tests
  - Integration Tests
- CD PIPELINE
  - Review
  - Staging
  - Production

![Workflow Schema](/img/devops_workflow.PNG)

---

## Docker

Docker est un outil développé en Go en 2013. Il s'appuie sur une technologie de conteneurisation déjà existante dans le noyau Linux permettant de bien gérer l'isolation des processus dans l'OS.

Pour fonctionner, il s'appuie sur plusieurs outils Linux:

*reprendre cours diapo*:
