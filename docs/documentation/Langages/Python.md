# Python

- [Python](#python)
  - [Généralités](#généralités)
  - [Syntaxe](#syntaxe)
    - [Variables](#variables)
    - [Functions](#functions)
    - [Types](#types)
      - [Strings](#strings)
    - [Opérateurs](#opérateurs)
    - [Conditionnelles](#conditionnelles)
    - [Boucles](#boucles)
  - [Fonctions et procédures](#fonctions-et-procédures)
    - [Retour multiple](#retour-multiple)
    - [Les arguments positionnels déballés](#les-arguments-positionnels-déballés)
    - [Les arguments de mots-clefs déballés](#les-arguments-de-mots-clefs-déballés)
  - [User Input](#user-input)
  - [Dictionnaires](#dictionnaires)
  - [Expressions Lambda](#expressions-lambda)

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

### Les arguments positionnels déballés

**Syntaxe**: def my_function(*args)

```python
def make_sum(*integers):    
    total = 0    
    for integer in integers:        
        total += integer    
        return total 
        
print("La somme de 1, 2, 3 et 4 est", make_sum(1, 2, 3, 4))
```

### Les arguments de mots-clefs déballés

**Syntaxe**: def my_function(**kwargs)

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

---

## Dictionnaires

```python
""" Dictionnaire: 'objet' avec couples key-value : <class 'dict'> """
d = {'first_param': 1, 'second_param': 2, 'third_param': 3}
print(d) # {'first_param': 1, 'second_param': 2, 'third_param': 3}

d['second_param'] = 4
print(d) # {'first_param': 1, 'second_param': 4, 'third_param': 3}
```

Contrairement au tuple, on peut modifier un dictionnaire. (mutable)

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
