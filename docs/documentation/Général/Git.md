---
description: Git et Versionning
---

# Git

---

## Workflow Git en équipe (ex. avec 3 développeurs)

**Branche principale** : main

**Branches personnelles** : nom-dev1, nom-dev2, nom-dev3

---

## Étapes du travail collaboratif

- Cloner le projet (si première fois)

```bash
git clone URL_DU_REPO

cd NOM_DU_REPO
```

- Créer et basculer sur sa branche personnelle

```bash
git checkout -b nom-devX main
```

- Développer et enregistrer les changements

```bash
git add .

git commit -m "Description des modifications"
```

- Mettre à jour sa branche avec main (éviter les conflits)
(par sécurité, on peut aussi pusher sa branche avant)

```bash
git checkout main ← on se met sur main

git pull origin main ← on récupère le main en ligne à jour

git checkout nom-devX ← on bascule sur notre branche

git merge main  # Ou git rebase main (pour un historique plus propre) ← on merge notre branche avec la main (en local)
```

1. on récupère main en local
2. on merge sur notre branche en local
3. on envoie notre branche locale à jour sur origin

- Envoyer ses changements sur le dépôt distant

```bash
git push origin nom-devX ← on envoie notre branche à jour en ligne
```

- Créer une Pull Request (PR) sur GitHub

- Aller sur GitHub
- Créer une PR pour fusionner nom-devX dans main
- Un autre membre valide la PR :

- Fusionner la branche et mettre à jour main (réalisée par le membre qui valide)

```bash
git checkout main ← on se place sur main

git merge nom-devX ← on merge avec nom-devX

git push origin main ← on envoie main en ligne
```

- Supprimer la branche locale (si elle n'est plus nécessaire)

```bash
git branch -d nom-devX
```

---

## Règles à respecter

✅ Toujours travailler sur une branche dédiée

✅ Faire des commits clairs et réguliers

✅ Récupérer les mises à jour de main avant de pousser ses modifications

✅ Toujours créer une PR et faire relire son code
