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
  - [Update the view with the new data object](#update-the-view-with-the-new-data-object)
  - [Gabarit](#gabarit)

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

Nous allons créer une première page sur notre site, très basique, certes, mais ce sera tout de même une page ! Commençons par ouvrir le fichier appname/views.py. Pour l'instant, cela ressemble à ceci :

```python
from django.shortcuts import render

# Create your views here.
```

Supprimons le commentaire et remplaçons-le par une simple fonction. Nous allons également ajouter une déclaration d'import supplémentaire en haut :

```python
from django.http import HttpResponse
from django.shortcuts import render

def hello(request):
    return HttpResponse('<h1>Hello Django!</h1>')
```

Nous venons de créer une vue, l'un des blocs constitutifs de l'**architecture MVT**.

Une vue a pour fonction de répondre à la visite d'un utilisateur sur le site en renvoyant une page que l’utilisateur peut voir. En Python, une vue est une fonction qui accepte un objet `HttpRequest` comme paramètre et retourne un objet `HttpResponse`.

Dans notre exemple de vue, nous renvoyons une réponse HTTP avec un contenu HTML simple : un titre H1 disant « Hello Django ! ».

Ouvrons donc le fichier appname/urls.py. Actuellement, le code (sans les commentaires) ressemble à ceci :

```python
from django.contrib import admin
from django.urls import path

urlpatterns = [
path('admin/', admin.site.urls),
]
```

Importons le module views que nous avons édité à l'étape précédente, en ajoutant une déclaration d'import. Puis nous ajouterons un nouvel élément à la liste `urlpatterns`, où nous ferons référence à la fonction vue que nous venons de créer.

```python
from django.contrib import admin
from django.urls import path
from appname import views

urlpatterns = [
path('admin/', admin.site.urls),
path('hello/', views.hello)
]
```

Nous venons de créer un modèle d'URL et de le lier à notre vue. Un modèle d'URL, c’est la façon dont nous indiquons à Django qu'il doit être à l'écoute d'une requête pour une URL donnée, puis appeler une vue spécifique pour générer une page.

Maintenant, chaque fois que quelqu'un visite l'URL `hello/` sur notre site, la vue `hello` va générer une page pour nous qui sera disponible à l'URL `http://127.0.0.1:8000/hello/`.

---

## Models

Pour chaque entité pour laquelle nous voulons stocker des données, nous créons un modèle pour représenter cette entité. Un **modèle** définit les caractéristiques que nous voulons stocker à propos d'une entité particulière. Ces caractéristiques sont également connues sous le nom de **champs**. Nous pouvons ensuite utiliser le modèle pour créer des objets individuels, ou instances, de ce modèle, qui ont chacun leurs propres caractéristiques uniques.

Un modèle est également capable de stocker (ou de "*persister*") ses données dans une base de données pour une utilisation ultérieure. Dans Django, toutes les fonctionnalités de persistance des données dans une base de données ont déjà été écrites pour vous. Tout ce que vous avez à faire est de faire en sorte que votre modèle hérite de la classe `models.Model` de Django. Votre modèle hérite ensuite de toutes les méthodes (comportements) nécessaires pour effectuer des opérations telles que la sélection et l'insertion de données dans une base de données.

### Example (Model)

Ouvrez le fichier `models.py` qui ressemble à ceci :

```python
from django.db import models

# Create your models here.
```

Une fois encore, Django nous a laissé un commentaire utile (Create your models here). Maintenant que nous savons où vont nos modèles, remplaçons ce commentaire par le code suivant :

```python
class Example(models.Model):
    name = models.fields.CharField(max_length=100)
```

Nous avons défini notre classe, l'avons nommée Example et l'avons fait hériter de `models.Model`, qui est la classe de base du modèle de Django.

Ensuite, nous ajoutons un attribut de classe à notre classe: `name`. À cet attribut, nous attribuons un `CharField`, qui est l'abréviation de Character Field. Il s'agira d'un champ qui stocke des données de type caractère/texte/chaîne, ce qui est le type de données approprié pour un nom. Nous avons également fixé la longueur maximale du nom à 100.

Et voilà notre premier modèle.

Comme pour les classes Python, nous pouvons utiliser les modèles Django pour créer des instances de cette classe, par exemple example = Example().

Comme nous l'avons dit, une des caractéristiques d'un modèle est qu'il est capable de stocker ses données dans une base de données. Nous avons créé notre base de données dans le chapitre sur la configuration. Mais cette base de données ne sait encore rien de notre modèle de données (Example). Et c'est là que les migrations entrent en jeu.

### Migrations

Si nous voulons stocker les groupes dans notre base de données, nous aurons besoin d'une nouvelle table, contenant une colonne pour chaque champ que nous avons ajouté à notre modèle, ainsi qu'une colonne `id` pour servir de clé primaire : un identifiant unique pour chaque ligne de la table.

La structure d'une base de données, en termes de tables et de colonnes, est appelée schéma.

Dans Django, nous utilisons une sous-commande de l'utilitaire de ligne de commande qui va générer des instructions pour construire la table. Et ensuite, nous utilisons une autre sous-commande pour exécuter ces instructions. Ces instructions sont appelées une **migration**.

Une **migration** est un ensemble d'instructions permettant de passer le *schéma* de votre base de données d'un état à un autre. Il est important de noter que ces instructions peuvent être exécutées automatiquement, comme un code.

Créer une migration pour notre modèle:

```bash
(env) ~/django-web-app/appname
→ python manage.py makemigrations
python manage.py makemigrations
Migrations for 'appname':
  appname/migrations/0001_initial.py
    - Create model Example
```

Le résultat de la CLI nous indique qu'une nouvelle migration a été enregistrée dans « appname/migrations/0001_initial.py », et que son objectif est de « Créer le modèle Example », ce qui signifie en fait que cette migration va créer une table dans la base de données pour notre modèle Example.

L'avantage de cette commande est qu'elle analyse notre fichier `models.py` pour y déceler toute modification et déterminer le type de migration à générer.

Maintenant que nous avons notre migration (nos instructions), nous devons exécuter ces instructions sur la base de données.

```bash
(env) ~/django-web-app/appname
→ python manage.py migrate
Operations to perform:
Apply all migrations: admin, appname, auth, contenttypes, sessions
Running migrations:
Applying appname.0001_initial... OK
```

Django a recherché dans chacune de ces applications installées de nouvelles migrations à exécuter, il a trouvé notre nouvelle migration et l'a « appliquée » : il a exécuté ces instructions sur la base de données.

---

## Update the view with the new data object

(pour l'exemple, nous avons créé des instance de notre modèle directement dans le shell Django et les avons sauvegardé en BDD...)

```python title="appname/views.py"
...
from appname.models import Example
...

def hello(request):
    examples = Example.objects.all()
    return HttpResponse(f"""
        <h1>Hello from Django !</h1>
        <ul>
            <li>{examples[0].name}</li>
            <li>{examples[1].name}</li>
            <li>{examples[2].name}</li>
        </ul>
""")
```

La variable `examples` contient maintenant une liste de toutes les instances que nous avons créé dans le shell et qui sont dans la base de données. Cela signifie qu'il est maintenant possible d'accéder à chacun des objets Example individuels en utilisant la notation d'index de Python. Ensuite, pour accéder au champ « name » de l'un de ces objets Example, nous ferons appel à l'attribut name de l'objet en utilisant la notation par points de Python.

Définir nos vues de cette façon, c'est à dire en codant notre page HTML directement dans notre liste de vues, est une mauvaise pratique (anti-pattern). Le problème est que notre vue a maintenant deux responsabilités : la *logique* et la *présentation*. En continuant de cette façon, notre application pourrait vite devenir ingérable.

Nous allons adhérer au principe de la responsabilité unique en déplaçant la responsabilité de la présentation hors de la vue et en la plaçant à sa place légitime : un **gabarit**.

---

## Gabarit

Commencez par créer un nouveau fichier à l'adresse : `appname/templates/appname/hello.html`

Notez la structure de répertoire que nous utilisons ici. Nous mettons toujours un sous-répertoire dans le répertoire des gabarits (templates) qui porte le même nom que l'application. Découvrez quelques [astuces sur l'utilisation des gabarits](http://www.formation-django.fr/framework-django/vues-templates/).

Remplissons ce fichier avec notre HTML :

```html
<html>
    <head><title>Appname</title></head>
    <body>
        <h1>Hello from Django !</h1>
        ...
    </body>
</html>
```

Mettons maintenant à jour notre vue, de sorte qu'au lieu de définir son propre HTML, elle génère notre modèle à la place :

```python
...
from django.shortcuts import render
...

def hello(request):
    examples = Example.objects.all()
    return render(request, 'appname/hello.html')
```

Tout d'abord, nous importons la fonction `render`. Cet élément est probablement déjà présent puisqu'il est inclus dans le code de base, mais ajoutez-le si nécessaire.

Dans la déclaration de retour, nous n'appelons plus le constructeur `HttpResponse`. Au lieu de cela, nous appelons la fonction `render` avec 2 arguments :

- l'objet request qui est passé dans la fonction hello
- une chaîne de caractères contenant le chemin d'accès au fichier gabarit que nous avons créé

Sous le capot, la fonction `render` crée un objet `HttpResponse` avec le HTML de notre modèle et le renvoie. Notre vue renvoie donc toujours une `HttpResponse` (ce qu'elle doit faire, pour être une vue).

Revenons à notre vue et ajoutons un troisième argument à notre appel de la méthode render. Cet argument doit être un `dict` Python.

```python
...
return render(request, 'appname/hello.html',
        {'first_example': examples[0]})
```

Ce dictionnaire est appelé **dictionnaire contextuel**. Chaque clé du dictionnaire devient une variable que nous pouvons utiliser dans notre modèle, comme ceci :

```python
# listings/templates/listings/hello.html

...
    <ul>
        <li>{{ first_example.name }}</li>
    </ul>
...
```

Les gabarits de Django peuvent inclure cette syntaxe avec des accolades, également connue sous le nom de **langage de gabarits** Django. Chaque fois que vous voyez des doubles accolades contenant un nom de variable, la valeur de cette variable sera insérée. Elles sont appelées **variables de gabarits**.

Nous pourrions continuer à ajouter chaque groupe individuellement au dictionnaire contextuel, mais gagnons du temps et passons-les tous en une seule fois :

```python
    ...
    return render(request,
    'appname/hello.html',
    {'examples': examples})
```

Puis, dans notre modèle :

```html
...
    <ul>
        <li>{{ examples.0.name }}</li>
        <li>{{ examples.1.name }}</li>
        <li>{{ examples.2.name }}</li>
    </ul>
...
```

Avec une boucle pour gérer les ajouts/retraits:

```html
<ul>
    {% for example in examples %}
    <li>{{ example.name }}</li>
    {% endfor %}
</ul>

<!-- Exemple de FILTRE : -->
<p>Il y a {{ examples|length }} exemples différents !</p>

 <!-- Exemple d'instruction if...elif...else -->
<p>
    J'ai..
    {% if examples|length < 5 %}
        peu de
    {% elif example|length < 10 %}
        quelques
    {% else %}
        beaucoup de
    {% endif %}
    exemples.
</p>
 
```
