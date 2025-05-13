# Django

- [Django](#django)
  - [Setup a Django project](#setup-a-django-project)
    - [Set up a virtual environment](#set-up-a-virtual-environment)
    - [Install Django](#install-django)
    - [Pin your project dependencies](#pin-your-project-dependencies)
    - [Set up a Django project](#set-up-a-django-project)
    - [Set up a Django app](#set-up-a-django-app)
    - [Register the app](#register-the-app)
    - [Command Reference](#command-reference)
  - [Models](#models)
    - [Example (Model)](#example-model)
    - [Migrations](#migrations)

---

Docs:

- [Documentation officielle](https://docs.djangoproject.com/)
- [Django Setup](https://realpython.com/django-setup/)

---

## Setup a Django project

First, you need to have Python installed and understand how to work with virtual environments (venv) and Python's package manager (pip).

### Set up a virtual environment

When you’re ready to start your new Django web application, create a new folder and navigate into it. In this folder, you’ll set up a new virtual environment using your command line:

```bash
python3 -m venv env
```

This command sets up a new virtual environment named `env` in your current working directory. Once the process is complete, you also need to activate the virtual environment:

```bash
source env/bin/activate
```

If the activation was successful, then you’ll see the name of your virtual environment, (env), at the beginning of your command prompt. This means that your environment setup is complete.

You can learn more about [how to work with virtual environments in Python](https://realpython.com/python-virtual-environments-a-primer/), and [how to perfect your Python development setup](https://realpython.com/learning-paths/perfect-your-python-development-setup/), but for your Django setup, you have all you need. You can continue with installing the django package.

### Install Django

Once you’ve created and activated your Python virtual environment, you can install Django into this dedicated development workspace:

```bash
(env) $ python -m pip install django
```

This command fetches the django package from the Python Package Index (PyPI) using pip.

### Pin your project dependencies

After the installation has completed, you can pin your dependencies to make sure that you’re keeping track of which Django version you installed:

```bash
(env) $ python -m pip freeze > requirements.txt
```

This command writes the names and versions of all external Python packages that are currently in your virtual environment to a file called requirements.txt. This file will include the django package and all of its dependencies.

You should always include a record of the versions of all packages you used in your project code, such as in a requirements.txt file. The requirements.txt file allows you and other programmers to reproduce the exact conditions of your project build.

Suppose you’re working on an existing project with its dependencies already pinned in a requirements.txt file. In that case, you can install the right Django version as well as all the other necessary packages in a single command:

```bash
(env) $ python -m pip install -r requirements.txt
```

The command reads all names and versions of the pinned packages from your requirements.txt file and installs the specified version of each package in your virtual environment.

Keeping a separate virtual environment for every project allows you to work with different versions of Django for different web application projects. Pinning the dependencies with pip freeze enables you to reproduce the environment that you need for the project to work as expected.

### Set up a Django project

After you’ve successfully installed Django, you’re ready to create the scaffolding for your new web application. The Django framework distinguishes between projects and apps:

A Django project is a high-level unit of organization that contains logic that governs your whole web application. Each project can contain multiple apps.
A Django app is a lower-level unit of your web application. You can have zero to many apps in a project, and you’ll usually have at least one app. You’ll learn more about apps in the next section.
With your virtual environment set up and activated and Django installed, you can now create a project. This tutorial uses setup as an example for the project name:

```bash
(env) $ django-admin startproject setup
```

Running this command creates a default folder structure, which includes some Python files and your management app that has the same name as your project:

```markdown
setup/
│
├── setup/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
└── manage.py
```

On the code block above, you can see the folder structure that the startproject command created for you:

- setup/ is your top-level project folder.
- setup/setup/ is your lower-level folder that represents your management app.
- manage.py is a Python file that serves as the command center of your project. It does the same as the django-admin command-line utility.

The nested setup/setup/ folder contains a couple more files that you’ll edit when you work on your web application.

Note: If you want to avoid creating the additional top-level project folder, you can add a dot (.) at the end of the django-admin startproject command:

```bash
(env) $ django-admin startproject <projectname> .
```

The dot skips the top-level project folder and creates your management app and the manage.py file right inside your current working directory. You might encounter this syntax in some online Django tutorials. All it does is create the project scaffolding without an extra top-level project folder.

Take a moment to explore the default project scaffolding that the django-admin command-line utility created for you. Every project that you’ll make using the startproject command will have the same structure.

When you’re ready, you can move on to create a Django app as a lower-level unit of your new web application.

### Set up a Django app

Every project you build with Django can contain multiple Django apps. When you ran the startproject command in the previous section, you created a management app that you’ll need for every default project that you’ll build. Now, you’ll create a Django app that’ll contain the specific functionality of your web application.

You don’t need to use the django-admin command-line utility anymore, and you can execute the startapp command through the manage.py file instead:

```bash
(env) $ python manage.py startapp <appname>
```

The startapp command generates a default folder structure for a Django app. This tutorial uses example as the name for the app:

```bash
(env) $ python manage.py startapp example
```

Remember to replace example with your app name when you create the Django app for your personal web application.

Note: If you created your project without the dot shortcut mentioned further up, you’ll need to change your working directory into your top-level project folder before running the command shown above.

Once the startapp command has finished execution, you’ll see that Django has added another folder to your folder structure:

```markdown
setup/
│
├── example/
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
├── setup/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
└── manage.py
```

The new folder has the name you gave it when running the command. In the case of this tutorial, that’s example/. You can see that the folder contains a couple of Python files.

This Django app folder is where you’ll spend most of your time when creating your web application. You’ll also need to make some changes in the management app, setup/, but you’ll build most of your functionality inside the Django app, example/.

You’ll get to know the generated Python files in more detail when working through a tutorial or building your own project. Here are three notable files that were created in the app folder:

1. __init__.py: Python uses this file to declare a folder as a package, which allows Django to use code from different apps to compose the overall functionality of your web application. You probably won’t have to touch this file.
2. models.py: You’ll declare your app’s models in this file, which allows Django to interface with the database of your web application.
3. views.py: You’ll write most of the code logic of your app in this file.
At this point, you’ve finished setting up the scaffolding for your Django web application, and you can start implementing your ideas. From here on out, it’s up to you what you want to build to create your own unique project.

### Register the app

For Django to see your new app, you need to add it to the list of installed apps in settings.py:

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'example',  # <- Here
]

```

### Command Reference

1a: Set up a virtual environment: `python -m venv env`
1b: Activate the virtual environment: `source env/bin/activate`
2a: Install Django: `python -m pip install django`
2b: Pin your dependencies: `python -m pip freeze > requirements.txt`
3: Set up a Django project: `django-admin startproject <projectname>`
4: Start a Django app: `python manage.py startapp <appname>`

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
