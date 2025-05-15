# Django

- [Django](#django)
  - [Setup a Django project](#setup-a-django-project)
    - [Set up a virtual environment](#set-up-a-virtual-environment)
    - [Install Django](#install-django)
    - [Pin your project dependencies](#pin-your-project-dependencies)
    - [Set up a Django project](#set-up-a-django-project)
    - [Run the server](#run-the-server)
    - [Setup the project database](#setup-the-project-database)
    - [Set up a Django app](#set-up-a-django-app)
    - [Register the app](#register-the-app)
    - [Command Reference](#command-reference)
  - [Create a view to serve content](#create-a-view-to-serve-content)
  - [Models](#models)
    - [Example (Model)](#example-model)
    - [Migrations](#migrations)

---

Docs:

- [Documentation officielle](https://docs.djangoproject.com/)
- [Django Setup](https://realpython.com/django-setup/)
- [Cours OpenClassrooms](https://openclassrooms.com/fr/courses/7172076-debutez-avec-le-framework-django)

---

## Setup a Django project

Créer un repository pour l'ensemble du projet, se placer à l'intérieur et initialiser le dépôt Git si besoin:

```bash
mkdir django-web-app
cd django-web-app/
git init
```

### Set up a virtual environment

Créer un environnement virtuel avec python3 (permet de garder les packages de notre projet isolés des autres projets):

```bash
~/django-web-app
→ python --version
Python 3.9.2
```

```bash
python3 -m venv env
```

(Ajouter `env/` au fichier `.gitignore` !)

Puis activer cet environnement virtuel:

```bash
~/django-web-app
→ source env/bin/activate
(env) ~/django-web-app 
# Le (env) indique que l'environnement est bien activé
```

**Important !** Vous devez toujours avoir votre environnement virtuel activé pendant le développement. Si vous redémarrez votre machine ou que vous importer votre projet depuis une autre machine, reproduisez l'étape ci-dessus.

Voir +: [how to work with virtual environments in Python](https://realpython.com/python-virtual-environments-a-primer/), et [how to perfect your Python development setup](https://realpython.com/learning-paths/perfect-your-python-development-setup/)

### Install Django

Installer Django avec `pip`:

```bash
(env) ~/django-web-app

→ pip install django
...
Successfully installed django-3.1.7
```

Le package Django est installé, ainsi qu'un certain nombre de dépendances : des packages dont Django a besoin pour fonctionner.

Gardons la trace de tous ces packages dans un fichier requirements.txt.

### Pin your project dependencies

Pour conserver la liste des dépendances nécessaires et pouvoir les réinstaller facilement:

```bash
(env) pip freeze > requirements.txt
```

```ini
# ~/django-web-app/requirements.txt

asgiref==3.3.1
Django==3.1.7
sqlparse==0.4.1
```

Si besoin de charger/réinstaller toutes les dépendances nécessaires:

```bash
(env) pip install -r requirements.txt
```

### Set up a Django project

Nous allons générer automatiquement notre code de base Django.

Le code de base est un code gabarit ou code de démarrage : c'est le code de base dont nous avons besoin pour un projet Django fonctionnel, mais vide.

```bash
(env) ~/django-web-app
→ django-admin startproject <project_name>
```

Nous avons généré notre code de base en lançant la commande `django-admin` , suivie de la sous-commande `startproject` et en passant comme argument le nom à utiliser pour le projet (`project_name`).

C'est ce nom qui est utilisé pour le répertoire de premier niveau.

```markdown
project_name/
│
├── project_name/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
└── manage.py
```

À l'intérieur, nous avons un autre répertoire avec le même nom, dont nous parlerons plus tard dans ce chapitre. Nous avons également un script Python appelé `manage.py`.

Maintenant, lorsque nous utiliserons l'utilitaire de ligne de commande de Django, nous l'appellerons via `manage.py` au lieu de `django-admin` comme nous le faisions auparavant. En fait, `manage.py` est conçu pour fonctionner spécifiquement avec notre projet, alors que `django-admin` est une version plus générique de l'utilitaire.

Avec le code de base en place, nous avons tout ce dont nous avons besoin pour lancer notre site pour la première fois.

### Run the server

Appelons à nouveau l'utilitaire de ligne de commande, cette fois via `manage.py`, et lançons la sous-commande `runserver`.

Le fichier `manage.py` est un script Python ; nous allons donc ajouter le préfixe `python3` à chaque fois que nous l'exécuterons, par exemple: `python3 manage.py runserver`.

```bash
(env) ~/django-web-app/project_name
→ python3 manage.py runserver
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).

You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
February 07, 2021 - 17:58:59
Django version 3.1.6, using settings 'merchex.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

L'utilitaire nous indique que le serveur de développement a démarré à l'adresse `http://127.0.0.1:8000/`.

### Setup the project database

Nous avions ce message:

```bash
You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
```

Les migrations représentent un moyen de configurer la base de données de notre application.

Utilisons maintenant l'utilitaire de ligne de commande pour créer notre base de données.

```bash
^C
(env) ~/django-web-app/project_name
→ python3 manage.py migrate
Operations to perform:
Apply all migrations: admin, auth, contenttypes, sessions
Running migrations:
Applying ...
```

Un fichier de base de données a été créé, appelé `db.sqlite3` ! Il s'agit de la base de données qui contiendra toutes les données de notre application, c’est donc une bonne chose de l’avoir créée dès maintenant.

Ajouter ce fichier `db.sqlite3` au gitignore !

### Set up a Django app

Ensuite, nous allons créer ce que Django appelle une « application ».

Dans Django, une application est une sous-section de votre projet entier. Django nous encourage à compartimenter notre projet entier Django en applications, pour deux raisons principales :

- cela permet de garder notre projet organisé et gérable au fur et à mesure qu'il se développe.
- cela signifie qu'une application peut éventuellement être réutilisée dans plusieurs projets.

Créer cette application en utilisant la sous-commande `startapp` dans l'utilitaire de ligne de commande :

```bash
(env) $ python3 manage.py startapp <appname>
```

Chaque répertoire d'applications est spécifique à une application. Mais votre répertoire de projet contient des fichiers de configuration pour l'ensemble du projet : c'est un peu la « tour de contrôle » de votre projet Django.

```markdown
project_name/
│
├── appname/
│   │
│   ├── migrations/
│   │   └── __init__.py
│   │
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
│
├── project_name/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
└── manage.py
```

### Register the app

La dernière étape consiste à « installer » l'application dans le projet.

Lorsque nous avons généré le code de base de notre projet, l'un des fichiers créés s'appelait settings.py. Ouvrez maintenant ce fichier et trouvez une liste Python appelée INSTALLED_APPS. En bas de cette liste, ajoutez la chaîne de caractères `<appname>`:

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'appname',  # <- Here
]

```

Par défaut, le code de base de Django comprend l'installation d'un certain nombre d'applications utiles, que la plupart des projets utiliseront probablement à un moment ou à un autre.

Contrairement à notre application, ces applications supplémentaires ne se trouvent pas dans notre code source, nous ne voyons pas leur répertoire dans notre code. Ces applications sont, en fait, importées depuis le package de Django que nous avons installé au début de ce chapitre avec pip.

La meilleure pratique consiste à ajouter notre application en bas de la liste afin qu'elle soit la dernière à se charger.

### Command Reference

1a: Set up a virtual environment: `python -m venv env`
1b: Activate the virtual environment: `source env/bin/activate`
2a: Install Django: `python -m pip install django`
2b: Pin your dependencies: `python -m pip freeze > requirements.txt`
3: Set up a Django project: `django-admin startproject <projectname>`
4: Start a Django app: `python manage.py startapp <appname>`

---

## Create a view to serve content



---

## Models

A model is the single, definitive source of information about your data. It contains the essential fields and behaviors of the data you’re storing. Generally, each model maps to a single database table.

The basics:

- Each model is a Python class that subclasses django.db.models.Model.
- Each attribute of the model represents a database field.
- With all of this, Django gives you an automatically-generated database-access API; see [Making queries](https://docs.djangoproject.com/en/5.2/topics/db/queries/).

### Example (Model)

This example model defines a `Person`, which has a `first_name` and `last_name`:

```python
from django.db import models

class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
```

`first_name` and `last_name` are fields of the model. Each field is specified as a class attribute, and each attribute maps to a database column.

The above `Person` model would create a database table like this:

```sql
CREATE TABLE myapp_person (
    "id" bigint NOT NULL PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    "first_name" varchar(30) NOT NULL,
    "last_name" varchar(30) NOT NULL
);
```

*Some technical notes*:

The name of the table, `myapp_person`, is automatically derived from some model metadata but can be overridden. See [Table names](https://docs.djangoproject.com/en/5.2/ref/models/options/#table-names) for more details.

An id field is added automatically, but this behavior can be overridden. See [Automatic primary key fields](https://docs.djangoproject.com/en/5.2/topics/db/models/#automatic-primary-key-fields).

The CREATE TABLE SQL in this example is formatted using PostgreSQL syntax, but it’s worth noting Django uses SQL tailored to the database backend specified in your [settings file](https://docs.djangoproject.com/en/5.2/topics/settings/).

*Example with a larger class*:

```python
rom django.db import models

class Todo(models.Model):
    STATUS_CHOICES = [
        ('pending', 'A faire'),
        ('done', 'Terminé')
    ]

    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    category = models.Charfield(max_length=100)
    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='pending')
    author = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
```

The `__str__` method return the todo title, it's good practice to always define this method in Django models for lisibility.

### Migrations

Django uses a migration system to handle the different updates on the database. You can do this by executing the following commands:

```bash
python manage.py makemigrations
python manage.py migrate
```
