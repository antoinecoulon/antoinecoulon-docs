# Python

- [Python](#python)
  - [Généralités](#généralités)
  - [Syntaxe](#syntaxe)
    - [Variables](#variables)
    - [Functions](#functions)
    - [Types](#types)
      - [Strings](#strings)
    - [Split / Join](#split--join)
    - [Opérateurs](#opérateurs)
    - [Conditionnelles](#conditionnelles)
    - [Boucles](#boucles)
  - [Fonctions et procédures](#fonctions-et-procédures)
    - [Retour multiple](#retour-multiple)
    - [Args and Kwargs](#args-and-kwargs)
      - [Les arguments positionnels déballés (\*args)](#les-arguments-positionnels-déballés-args)
      - [Les arguments de mots-clefs déballés](#les-arguments-de-mots-clefs-déballés)
  - [User Input](#user-input)
  - [Variables complexes / conteneurs](#variables-complexes--conteneurs)
    - [Dictionnaires](#dictionnaires)
    - [Tuple](#tuple)
    - [Listes](#listes)
    - [Set](#set)
  - [Expressions Lambda](#expressions-lambda)
  - [Comments](#comments)
  - [POO](#poo)
    - [Import de classes](#import-de-classes)
    - [Les classes](#les-classes)
      - [Méthodes](#méthodes)
      - [Encapsulation](#encapsulation)
      - [@property et cie](#property-et-cie)
      - [Décrire une classe](#décrire-une-classe)
      - [Autres classes spéciales](#autres-classes-spéciales)

---

Docs:

- [Cheatsheet](https://www.pythoncheatsheet.org/cheatsheet/basics)

---

## Généralités

Python est un langage open source suivi par une grande communauté, très active.

Il est surtout utilisé pour:

- Scripting et automatisation: effectuer des opérations directement sur le système de fichiers, automatiser des tâches sur plusieurs plateformes.
- Applications "lourdes"
- Applications Web: par ex avec Django ou Flask.
- mais aussi: data sciences, IA, jeux vidéos...

C'est un langage interprété mais aussi compilé (de manière transparente).

Il est indépendant des plateformes car il est executé sur la Python Virtual Machine (PVM).

On code dans des fichiers exemple.py qui sont compilés en exemple.pyc (fichiers ByteCode) avant d'être interprété par la VM Python.

---

## Syntaxe

Fin d'instruction: touche "entrée".

Indentation: "4 espaces"

Commentaires:

```python
# commentaire en ligne
" Chaine de caractère et commente sur une ligne "
""" Commentaire de type paragraphe
permet la documentation """
```

### Variables

Le nom d'une variable doit être composé uniquement de:

- lettres (minuscules, majuscules)
- chiffres
- symbole "_"

Ne doit pas commencer par un chiffre. Ne doit pas être un mot-clé Python (import keyword). Sensible à la casse. lower_snake_case pour la lisibilité.

L'affectation d'une valeur à une variable est obligatoire:

```python
nom_de_la_variable = valeur

autre_variable # NameError: name *** is not defined

nom_de_la_variable:type = valeur
# accepté mais purement informel
```

### Functions

```python
def add(val1, val2):
    print("Addition: ", val1, "+", val2)
    result = val1 + val2
    return result

somme = add(a, b)
print("Résultat =", somme)
```

---

### Types

- bool (Boolean) - True/False
- int / float (Numerics)
- str (String)

#### Strings

```python
msg='welcome to Python 101: Strings'
print(msg) # welcome to Python 101: Strings
print(msg.upper()) # WELCOME TO PYTHON 101: STRINGS
print(msg.lower()) # welcome to python 101: strings
print(msg.capitalize()) # Welcome to python 101: strings
print(msg.title()) # Welcome To Python 101: Strings

print(len(msg)) # 30
print(msg.count('o')) # 3

print(msg[0]) # w
print(msg[-1]) # s
print(msg[2:]) # lcome to Python 101: Strings
print(msg[2:15]) # lcome to Pyth

msg='welcome to Python 101: Strings'
msg1=msg[18]+' '+msg[:8]+msg[25:29]+msg[7:11]+msg[13]+msg[12]+msg[2]+msg[1]+msg[-5]  
print(msg1.title()) # 1 Welcome Ring To Tyler
print(msg1[::-1].title()) # Relyt Ot Gnir Emoclew 1

print(msg.find('Python')) # 11
print(msg.find('h')) # 14

print(msg.replace('Python','Java')) # Welcome to Java 101: Strings

print('Python' in msg) # True

msg="""Dear Terry,,
You must cut down the mightiest 
tree in the forest with…
a herring! <3"""
print(msg)

name='TERRY'
color = 'RED'
msg = '[' + name + '] loves the color ' + color.lower() + '!'
msg1 = f'[{name}] loves the color {color.lower()}!'
print(msg) # [TERRY] loves the color red!
print(msg1) # [TERRY] loves the color red!
```

---

### Split / Join

```python
msg ='Welcome to Python 101: Split and Join'
print(msg.split()) # ['Welcome', 'to', 'Python', '101:', 'Split', 'and', 'Join']

csv = 'Eric,John,Michael,Terry,Graham'
print(csv.split(',')) # ['Eric', 'John', 'Michael', 'Terry', 'Graham']

friends_list = ['Eric','John','Michael','Terry','Graham']
print('-'.join(friends_list)) # Eric-John-Michael-Terry-Graham
```

---

### Opérateurs

- Assignation: '=' ('+=', '-=', '*=', etc)
- Concaténation: '+' (fonctions de conversion: int(...), float(...), str(...), etc car le typage est fort)
- Comparaison: '>', '>=', '==', etc
- Logique: 'and', 'or', 'not', '&', '|'

---

### Conditionnelles

```python
# if condition1: ... elif condition2: ... else: ...
if age >= AGE_ADULT:
    print("majeur")
else:
    print("mineur")
```

### Boucles

```python
# while condition: ...
while i > 10:
    ...

while True:
    i += 1
    if i <= 10: break

# for nb_cylcle in range(cycle_max): ...
for i in range(10):
    ...
```

---

## Fonctions et procédures

Syntaxe des procédures :

```python
def my_procedure():
    pass 
    # bloc d'instructions 
# fin de la procédure
```

Syntaxe des fonctions :

```python
def my_function(): 
    # bloc d'instructions 
    return a_value # fin de la méthode 
# fin de la fonction
```

Exemple d’appel :

```python
my_procedure() # appel de procédure traitée 
my_fonction() # appel de fonction traitée 
not_treated() # NameError: name ‘not_treated' is not define
```

### Retour multiple

Syntaxe :

```python
def my_function(): # bloc d'instructions 
    return a_value, other_value # au moins une valeur par return 
# fin de la méthode
```

Exemples d’Appel :

```python
my_function() 
a_result, other_result = my_function() # récupération unitaire des valeurs
a_result = my_function() # récupération d'un ensemble de valeurs (n-uplet) 
```

Cette spécificité est appelée retour de valeurs multiples.

Exemple avec la class tuple (un n-uplet):

```python
def ma_methode(a, b):
    return a * b

print(ma_methode(1, 2))
print(ma_methode(b=2, a=1))

# Retours multiples
def ma_methode2(a, b = 5):
    return a * 2, b * 2

c = ma_methode2(a=3)
print(c)
print(type(c)) # class 'tuple' (iterable)

une_liste = [1, 2, 3]
print(une_liste)
print(type(une_liste)) # class 'list'
une_autre_liste = [1, "2", 3]

un_tuple = (1, "2", 3)
print(un_tuple)

une_liste[1] = "autre nombre (string)"
print(une_liste)
# un_tuple[1] = "autre nombre (string)" # ERROR !
# print(un_tuple)
```

### Args and Kwargs

`*args` and `**kwargs` allow you to pass an undefined number of arguments and keywords when calling a function.

```python
>>> def some_function(*args, **kwargs):
...     pass
...
>>> # call some_function with any number of arguments
>>> some_function(arg1, arg2, arg3)

>>> # call some_function with any number of keywords
>>> some_function(key1=arg1, key2=arg2, key3=arg3)

>>> # call both, arguments and keywords
>>> some_function(arg, key1=arg1)

>>> # or none
>>> some_function()
```

Python conventions The words *args and **kwargs are conventions. They are not imposed by the interpreter, but considered good practice by the Python community.

#### Les arguments positionnels déballés (*args)

**Syntaxe**: def my_function(*args)

You can access the arguments through the args variable:

```python
>>> def some_function(*args):
...     print(f'Arguments passed: {args} as {type(args)}')
...
>>> some_function('arg1', 'arg2', 'arg3')
# Arguments passed: ('arg1', 'arg2', 'arg3') as <class 'tuple'>
```

```python
def make_sum(*integers):    
    total = 0    
    for integer in integers:        
        total += integer    
        return total 
        
print("La somme de 1, 2, 3 et 4 est", make_sum(1, 2, 3, 4))
```

#### Les arguments de mots-clefs déballés

**Syntaxe**: def my_function(**kwargs)

Keywords are accessed through the kwargs variable:

```python
>>> def some_function(**kwargs):
...     print(f'keywords: {kwargs} as {type(kwargs)}')
...
>>> some_function(key1='arg1', key2='arg2')
# keywords: {'key1': 'arg1', 'key2': 'arg2'} as <class 'dict'>
```

```python
def describe_user(**attributes):    
    result = "La personne a pour "    
    for key, value in attributes.items(): 
        result += str(key) + " " + str(value) + " et "    
        return result[:-4] # suppression des 4 derniers caractères 
    
print(describe_user(last_name="DUPONT", first_name="Jean"))
```

---

## User Input

```python
name= input('What is your name?: ')
age=input('What is your age?: ')
print('Hello '+ name + '! You are '+ age + ' years old.')

name = input('Enter your name: ') # Input: 'John'
distance_km = input('Enter distance in km: ') # Input: '10'
distance_mi = float(distance_km)/1.609
print(f'Hi {name.title()}! {distance_km}km is equivalent to {distance_mi} miles.')
# Hi John! 10km is equivalent to 6.215040397762586 miles.
```

---

## Variables complexes / conteneurs

### Dictionnaires

```python
""" Dictionnaire: 'objet' avec couples key-value : <class 'dict'> """
d = {'first_param': 1, 'second_param': 2, 'third_param': 3}
print(d) # {'first_param': 1, 'second_param': 2, 'third_param': 3}

d['second_param'] = 4
print(d) # {'first_param': 1, 'second_param': 4, 'third_param': 3}
```

Contrairement au tuple, on peut modifier un dictionnaire. (mutable)

### Tuple

Un tuple est une structure de données qui permet de stocker plusieurs éléments dans une seule variable, comme une liste. Mais contrairement aux listes, les tuples sont immuables : on ne peut pas les modifier après leur création.

```python
mon_tuple = (1, 2, 3)
```

On utilise des parenthèses () pour définir un tuple. Il peut contenir plusieurs types de données (int, str, float, etc), est immuable, et indexé.

Un des intérêts de ces tuples est qu'ils sont interprétés plus rapidement par la machine, il est donc plus rapide d'itérer sur un tuple que sur une liste, par exemple.

*Exemple cas réel*:

```python
villes = [
    ("Paris", 48.8566, 2.3522),
    ("Lyon", 45.7640, 4.8357),
    ("Marseille", 43.2965, 5.3698)
]

for ville in villes:
    nom, lat, long = ville
    print(f"{nom} est située à {lat}°N, {long}°E")
```

### Listes

Une liste est une structure de données modulable qui permet de stocker plusieurs éléments dans une seule variable. C’est l’un des types les plus utilisés en Python.

```python
ma_liste = [1, 2, 3]
```

On utilise des crochets [] pour définir une liste. Une liste est modifiable (ajouter, retirer, modifier des éléments), indexée (comme une chaîne de caractères ou un tuple) et peut contenir différents types (nombres, chaînes, booléens, etc.).

```python
animaux = ["chat", "chien", "lapin"]

print(animaux[0])  # "chat"

animaux[1] = "tigre"  # On remplace "chien" par "tigre"
print(animaux)  # ["chat", "tigre", "lapin"]
```

Fonctions utiles avec les listes:

- *append(x)*: Ajoute x à la fin
- *insert(i, x)*: Insère x à l’indice i
- *remove(x)*: Supprime la première occurrence de x
- *pop(i)*: Supprime l’élément à l’indice i
- *len(liste)*: Donne la taille
- *in*: Vérifie si un élément est dans la liste
- *sort()*: Trie la liste (croissant par défaut)

Exemple concret : liste de courses

```python
courses = ["pomme", "pain", "lait"]

# Ajouter un élément
courses.append("œufs")

# Supprimer un élément
courses.remove("pain")

# Modifier un élément
courses[0] = "banane"

# Afficher les éléments
for aliment in courses:
    print("- " + aliment)

"""
- banane
- lait
- œufs
"""
```

```python
friends = ['John','Michael','Terry','Eric','Graham'] # Créer une liste avec []

print(friends[1],friends[4]) # Utiliser ses index
print(friends[2:4]) # Récupérer les éléments en position 2 et 3 (4 non inclus)
print(len(friends)) # Récupérer la longueur/taille d'une liste
print(friends.index('Eric')) # Récupérer l'index de la liste où l'on trouve la valeur 'Eric'
print(friends.count('Eric')) # Compter le nombre de fois que l'on trouve 'Eric' dans cette liste

# Trier une liste
friends.sort()
friends.sort(reverse=True)

# min, max, sum
list = [1, 2, 3]
print(min(list)) # 1
print(max(list)) # 3
print(sum(list)) # 6

# Ajouter un élément
friends.append('Georges')
friends.insert(1, 'Georges')

friends.extends(list) # Ajoute une autre liste à cette liste

# Supprimer un élément
friends.remove('Georges') # Supprimer l'élément 'Georges' de cette liste
friends.pop('Georges') # La même chose mais l'élément supprimé peut être stocké, il est retourné par la fonction pop

friends.clear() # Efface le contenu de la liste
del friends # Supprimer complètement la liste et sa variable

# Copier une liste
new_friends = friends[:]
new_friends = friends.copy()
new_friends = list(friends)
```

### Set

Les sets ressemblent beaucoup aux listes (ce sont des listes non ordonnés) et permettent à peu près les mêmes choses. Les différences majeures sont:

- Un Set va automatiquement supprimer les doublons qu'il contient.
- Un Set est beaucoup plus rapide à parcourir ses membres qu'une liste peut l'être.

```python
# List
friends = ['John','Michael','Terry','Eric','Graham']

# Tuple
friends_tuple = ('John','Michael','Terry','Eric','Graham')

# Set
friends_set = {'John','Michael','Terry','Eric','Graham','Eric'} # 'Eric' sera supprimé

```

---

## Expressions Lambda

Instruction qui se comporte comme une petite fonction, peut prendre n’importe quel nombre d’arguments, mais renvoie qu’une seule expression.

```python
# my_lambda = lambda arg1, arg2, … : result

power = lambda nb, exp : nb ** exp # nombre puissance exposant

add = lambda a, b: a + b
add(5, 3) # 8
```

---

## Comments

Les commentaires ont 3 raisons d'exister:

- Pour faire des notes, pour soi-même ou pour d'autres développeurs, au sein du code (ex: todos)
- Pour débugger, en commentant une ligne de code pour voir ce qu'il se passe par ex.
- Pour auto-générer de la documentation de son code

```python
# Single line comment

'''
Multiple 
lines 
comment
'''

"""Auto-generated documentation"""
```

---

## POO

### Import de classes

```python
import math

PI = math.pi
```

```python
from math import pi

PI = pi
```

### Les classes

```python
class Chat:
    race = 'siamois'    # Attribut de classe (commun à toute la classe)
    
    def __init__(self, nom):    # Attribut spécifique à chaque instance
        self.nom = nom

c = Chat('Pablo')
print(c.nom) # 'Pablo'
print(c.race) # 'siamois'

c.age = 8 # On peut définir une propriété à la volée
print(c.age) # 8
```

#### Méthodes

Il existe 3 types de méthodes:

- Méthode d'instance: avec `self` en premier paramètre
- Méthode de classe: sur la classe ou l'instance avec l'annotation `@classmethod`
- Méthode statique: sur la classe ou l'instance avec l'annotation `@staticmethod`

#### Encapsulation

Python ne peut pas assurer strictement l'encapsulation: tout est modifiable, soit tout est de visibilité **publique** ! Par convention on indique un attribut **privé** en le préfixant par '_' (ou '__' pour un attribut **non-visible**). Mais cela n'empêche pas réellement d'y accéder. L'import d'un module ne va pas importer les méthodes invisibles.

On ajoute des getters et des setters pour autoriser la consultation et/ou la modification sans passer par les attributs directement. Il existe aussi la méthode `property()` (propriétés d'instance), mais ce n'est toujours pas la meilleure pratique...

#### @property et cie

La meilleure pratique est d'utiliser les annotations `@property` et celles qui en découlent:

```python
    _nom = "Félix"
    
    @property
    def nom(self):
        return self._nom

    @nom.setter
    def nom(self, value):
        self._nom = value

    @nom.deleter
    def nom(self):
        self._nom = "Sans nom"

chat.nom = "Pablo" # évite de faire chat._nom
```

#### Décrire une classe

On peut ajouter une description avec un commentaire (pour la méthode help) et ajouter une méthode d'affichage de l'instance avec `__str__(self)`

```python
class Chat:
    """ Description d'un chat """
    nom = "Pablo"

    def __init__(self):
        ...
    
    def __str__(self):
        return self.nom
```

#### Autres classes spéciales

```python
def __eq__(self, other):
    return self.nom == other.nom

# Il est possible de redéfinir n'importe quelle méthode spéciale

# Voir les méthodes accessibles à ma classe:
print(dir(Chat))
```
