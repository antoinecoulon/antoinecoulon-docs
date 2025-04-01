# Flutter

[Repo GitHub du cours](https://github.com/antoinecoulon/FlutterProjects)

- [Flutter](#flutter)
  - [Introduction](#introduction)
  - [Installer Flutter SDK et Android Studio](#installer-flutter-sdk-et-android-studio)
  - [Créer son premier projet Flutter](#créer-son-premier-projet-flutter)
  - [Architecture des widgets](#architecture-des-widgets)
  - [Dart](#dart)
    - [Typage](#typage)
    - [Fonctions](#fonctions)
    - [POO](#poo)
    - [Généricité](#généricité)
    - [Exceptions](#exceptions)
    - [Traitement asynchrone](#traitement-asynchrone)
    - [Exercice de calcul de moyennes](#exercice-de-calcul-de-moyennes)
  - [Exemple de code Flutter commenté](#exemple-de-code-flutter-commenté)
  - [Widgets](#widgets)
    - [Widgets de Layout](#widgets-de-layout)
    - [Widgets de Contenu](#widgets-de-contenu)
  - [Gestion des états](#gestion-des-états)
    - [StatefulWidget](#statefulwidget)

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

![Widgets](/img/flutter_widgets.PNG)

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

### POO

- Constructeur:

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

- Constructeur avec params optionnels:

```dart
class Person {
    String name;
    int? age;   // avec params optionnels

    Person(this.name, {this.age}); 
}

var person2 = Person("Toto", age: 15)
```

- Constructeurs nommés:

```dart
class Person {
    String? name;
    int? age;   // avec params optionnels

    Person(this.name, this.age);

    // Constructeur nommé, méthode 1
    Person.fromJson(Map<String, dynamic> json) {
        name = json['name'];
        age = json['age'];
    }

    // Constructeur nommé, méthode 2
    Person.withDefaultAge(String name) : this(name, 0);

    // On peut utiliser plusieurs constructeurs nommés en plus du constructeur par défaut
}

var person2 = Person("Toto", age: 15)
```

### Généricité

```dart
class MyComponent<T> {
    T value; // value est de type T (générique)
}

T getValue() {
    return value;
}

var component1 = MyComponent<int>(15);
var component2 = MyComponent<String>('Toto');
var component3 = MyComponent<bool>(true);
```

Les listes sont génériques comme sur Java.

```dart
List<int> intList = [1, 2, 3];
List<bool> boolList = [true, false, true];
List<String> stringList = ['Toto', 'Tata', 'Titi'];
// on ne mélange pas les types !!
```

### Exceptions

Enclencher une exception grâce à `throw`:

```dart
void validateAge(int age) {
    if (age < 0>) throw Exception('L\'age ne peut pas être négatif!');
}

try {
    validateAge(-5);
} on Exception catch (e) { // Capturer le type d'exception
    print('Exception: $e');
} catch (e) {
    print('Une exception s\'est produite.');
} finally {
    print('Opération terminée');
}
```

### Traitement asynchrone

Avec le mot-clé `async`

```dart
void monOperation() async {
    // Simuler un délai de 2 sec
    await Future.delayed(Duration(seconds: 2));
}

void main() async {
    monOperation(); // sans await, la méthode continue sans attendre le résutlat de monOperation()

    await monOperation() // attendre que la méthode soit résolue
}
```

Si il y a un retour attendu:

```dart
Future<UserAccount> getUserAccount() async {
    // Simuler un délai de 2 sec
    await Future.delayed(Duration(seconds: 2));
    // Retourner une instance vide pour l'exemple
    return UserAccount();
}

void main() async {
    var userAccount = await getUserAccount();
}
```

### Exercice de calcul de moyennes

```dart
class Matiere {
    List<double> notes = [];
    
    Matiere(this.notes);
    
    double calcMoyenne() {
        double total = 0;
        for (var i = 0; i < notes.length; i++) {
            total += notes[i];
        }
        return total / notes.length;
    }
}

void main() {
    var francais = Matiere([16, 20, 12]);
    var maths = Matiere([4, 8, 16]);
    var informatique = Matiere([15, 14, 10]);
  
    print('Moy. français -> ${francais.calcMoyenne()}');
    print('Moy. maths -> ${maths.calcMoyenne()}');
    print('Moy. informatique -> ${informatique.calcMoyenne()}');
    
    List<Matiere> matieres = [francais, maths, informatique];
  
    double calcMoyenneGen(List<Matiere> matieres) {
        double moyGen = 0;
        matieres.forEach((matiere) {
            moyGen += matiere.calcMoyenne();
        });
        return moyGen / matieres.length;
    }
  
    print('Moy. générale ---> ${calcMoyenneGen(matieres)}');
}
```

---

## Exemple de code Flutter commenté

```dart title="main.dart"
import 'package:flutter/material.dart';

// La méthode main() est le point d'entrée de l'application !!
void main() {
  runApp(MyApp()); // runApp() prend en param une classe qui renvoie un MaterialApp() (= Widget)
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Nom de mon application',    // Titre du projet
      debugShowCheckedModeBanner: false,  // Cacher la barre de debug
      theme: ThemeData(         // This is the theme of your application.
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.orange), // Génère un jeu de couleurs depuis une seed/couleur donnée
      ),
      home: MyHomePage('this text'),
    );
  }
}

// On construit la page d'accueil
class MyHomePage extends StatelessWidget {

  final String text;

  MyHomePage(this.text);

  @override
  Widget build(BuildContext context) {
    return Scaffold(        // Obligatoire, la base du design de l'app
      appBar: AppBar(         // Barre de l'application (Top)
        title: Text('Home'),  // Titre de l'écran
        backgroundColor: Theme.of(context).colorScheme.inversePrimary, // On reprend le jeu de couleurs (colorScheme)
      ),
      body: Container(
        color: Theme.of(context).colorScheme.primary,
        width: double.infinity, // Prend toute la largeur
        child: Column( // Le container s'est adapté à son enfant Column()
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Text('Hello, Flutter! $text', style: TextStyle(
                color: Theme.of(context).colorScheme.inversePrimary,
                fontSize: 24.0,
              ),),
            ),
            Text('Other text...', textAlign: TextAlign.right,)
          ],
        ), // Le Widget Center() prend un Widget 'enfant' en param (ici Text())
      ),
    );
  }
}

```

Cet exemple est construit avec la bibliothèque *Material*, le même exemple peut être fait avec la bibliothèque *Cupertino* (iOS).

---

## Widgets

### Widgets de Layout

Les widgets de type Layout sont utilisés pour gérer la position/taille des widgets:

- **Container()**: s'adapte à son contenu (son enfant), et peut avoir une couleur de fond.

```dart
body: Container(
    color: Colors.green,
    child: const Column(
        children: [
            Text('Element 1'),
            Text('Element 2')
        ],
    ), // Column
), // Container
```

- **Column()**: permet d'aligner des éléments les uns au-dessous des autres.
- **Row()**: aligner horizontalement.
- **Expanded()**: permet de faire prendre aux éléments enveloppés tout l'espace disponible.
- **Padding()**: pour espacer des éléments.
- **Flex()**: permet de disposer des éléments soit horizontalement, soit verticalement.
- **SingleChildScrollView()**: permet de créer une zone scrollable (horizontale ou verticale).

### Widgets de Contenu

- **Text()**: afficher du texte
- **ElevatedButton()**: il y a aussi OutlinedButton(), FilledButton(). Un bouton a forcément un param onPressed, on peut lui passer "() {}" = aucune action.
- **Image()**: Image.network via une ressource externe, Image.asset via une ressource locale. Pour une ressource locale il faut renseigner le dossier `images/*` dans la conf `assets:` du `pubspec.yaml` (Ajout de librairie pour certains types, .svg par ex).

---

## Gestion des états

*StatelessWidget / Stateful Widget*: Widget statique contre Widget dynamique.

### StatefulWidget

A chaque mise à jour, ce n'est pas le StatefulWidget qui change, mais le `State<T>` qui rebuild à chaque fois -> `State<StatefulWidget>`. Le Widget en lui-même est immutable.

< Schema >

Exemple:

```dart
class DynamicContent extends StatefulWidget {
  @override
  State<DynamicContent> createState() => _DynamicContentState();
}

class _DynamicContentState extends State<DynamicContent> {
  String? _content;

  @override
  void initState() {
    super.initState();
    _content = "Hello World!";
  }

  void _onPressed() {
    setState(() {
      _content = 'Bye!';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
        children: [
          ElevatedButton(
              onPressed: _onPressed,
              child: Text('Click me !')
          ),
          Text('$_content')
        ]
    );
  }
}
```

---

- Form (controller, types, inputTypes ? )
- `Future<T>`
- Stateful (init, updated, dispose)
- Thème (theme perso)
