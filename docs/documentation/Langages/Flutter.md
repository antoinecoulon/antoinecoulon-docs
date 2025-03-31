# Flutter

- [Flutter](#flutter)
  - [Introduction](#introduction)
  - [Installer Flutter SDK et Android Studio](#installer-flutter-sdk-et-android-studio)
  - [Créer son premier projet Flutter](#créer-son-premier-projet-flutter)
  - [Architecture des widgets](#architecture-des-widgets)
  - [Dart](#dart)
    - [Typage](#typage)
    - [Fonctions](#fonctions)
  - [POO](#poo)
    - [Constructeur](#constructeur)
  - [Gestion des états](#gestion-des-états)

---

## Introduction

Flutter est un framework open-source développé par Google pour créer des applications natives sur iOS, Android, le web, et le bureau à partir d'une seule base de code. Flutter compile le code Dart en code natif, ce qui permet des performances proches de celles des applications natives, et utilise son propre moteur de rendu pour dessiner des widgets, ce qui permet de créer des interfaces utilisateur personnalisées et réactives.

-> Voir la [doc](https://docs.flutter.dev/get-started/install/windows/mobile)

La promesse de Flutter est de développer à la fois sur Android et iOS, mais aussi pour le web, Windows, MacOs et Linux, et tout ça à partir d'une seule base de code.

---

## Installer Flutter SDK et Android Studio

[Doc](https://docs.flutter.dev/get-started/install/windows/mobile#install-the-flutter-sdk)

---

## Créer son premier projet Flutter

[Doc](https://docs.flutter.dev/get-started/fundamentals)

![Setup](/img/flutter_setup.PNG)

Structure d'un projet:

- Le fichier `main.dart` est le point d'entrée de notre application, il est dans le dossier `lib/` dans lequel nous allons principalement travailler.
- Le fichier `pubspec.yaml` contient la configuration de notre app et les dépendances nécessaires. Il est associé au fichier `pubspec.lock` qui vérouille les versions des dépendances.
- Chaque plateforme cible à son propre répertoire (Windows, MacOs, Linux, Android, iOS)
- Le dossier `build/` a été généré au premier lancement de l'app, il permet d'avoir accès au "Hot Reload"

---

## Architecture des widgets

L'interface fonctionne à partir d'une imbrication de widgets les uns dans les autres (un "arbre" de widgets, comme le DOM). Chaque widget possède un rôle spécifique, ils permettent l'affichage de contenu et les intéractions avec l'utilisateur. Tout est widget dans flutter (App, Composants, Pages, etc).

Par défaut, nous avons le widget `MyApp` qui hérite du widget `StatelessWidget`. Le point d'entrée lance le widget `MyApp` en tant que **Widget Root**.

---

## Dart

Les applications Flutter sont écrites en Dart, un langage développé par Google.

[Try with Dartpad](https://dartpad.dev/)

### Typage

Le typage est optionnel mais peut rendre le code plus robuste.

> int
> double
> bool
> String

On déclare une variable avec `var` et `const`.

```dart
String name = "Toto";
var name2 = "Toto";
const name3 = "Toto";
```

Le *Sound Null Safety* est une fonctionnalité créée pour éviter les NullPointerException:

```dart
// ? -> nullable
String? name = null;
name = "Toto";

// ! -> Vérification du null (lance une exception plutôt qu'un crash)
print(name!.toUpperCase());
```

### Fonctions

```dart
void functionName(int age) {
    
}

in functionWithReturn() {
    return 0;
}

// Arguments optionnels
void greetUser(String name, {String? prefix, int age = 0}) {
    if (prefix != null) {
        print('$prefix, $name !'); // Pas besoin de backtick pour afficher la variable au milieu d'une chaîne
    } else {
        print('Bonjour, $name !');
    }
    print('Age: $age');
}
```

Les paramètres optionnels doivent être nommés si appelés, et les paramètres avec le prefixe `required` aussi:

```dart
void main() {
  afficherInfos('Antoine', prefix: 'M.', lastName: "Coulon");
}

void afficherInfos(String name, {String? prefix, required String lastName, int age = 0}) {
  if (prefix != null) {
    print('$prefix $name $lastName');
  }
}
```

---

## POO

### Constructeur

```dart
class Person {
    String name;
    int age;

    Person(this.name, this.age); // 'this' n'est obligatoire que dans le constructeur
}

// Instancier avec new
var person1 = new Person("Toto", 15);
// Instancier sans new
var person2 = Person("Toto", 15)
```

---

## Gestion des états

*StatelessWidget / Stateful Widget*: Widget statique contre Widget dynamique.
