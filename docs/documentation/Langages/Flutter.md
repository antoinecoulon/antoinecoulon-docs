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
  - [StatefulWidget](#statefulwidget)
    - [Exemple](#exemple)
    - [Création d'un Stateful Widget](#création-dun-stateful-widget)
    - [initState](#initstate)
    - [didUpdateWidget](#didupdatewidget)
    - [dispose](#dispose)
    - [setState](#setstate)
  - [Forms](#forms)
    - [Composants principaux d'un Formulaire](#composants-principaux-dun-formulaire)
    - [Utilisation des Contrôleurs](#utilisation-des-contrôleurs)
    - [Types de Champs](#types-de-champs)
    - [Validation et Soumission](#validation-et-soumission)
  - [Provider](#provider)
  - [Future](#future)
    - [Créer un Future](#créer-un-future)
    - [Utiliser async et await](#utiliser-async-et-await)
    - [Utiliser then, catchError](#utiliser-then-catcherror)
    - [Exemple Complet](#exemple-complet)
  - [Navigation](#navigation)
    - [Navigator.push](#navigatorpush)
    - [Navigator.pop](#navigatorpop)
    - [Navigator.pushNamed](#navigatorpushnamed)
    - [Configuration des Routes Nommées](#configuration-des-routes-nommées)
    - [Exemple de nav](#exemple-de-nav)
    - [Avec arguments](#avec-arguments)
  - [Drawer](#drawer)
  - [Persistance des données (DB SQLite)](#persistance-des-données-db-sqlite)
    - [Ajouter les dépendances](#ajouter-les-dépendances)
    - [Créer un modèle de données](#créer-un-modèle-de-données)
    - [Configurer la base de données](#configurer-la-base-de-données)
    - [Utiliser la base de données dans votre application](#utiliser-la-base-de-données-dans-votre-application)
  - [API](#api)
    - [JSON Mapping](#json-mapping)
    - [Appeler une API](#appeler-une-api)
    - [Utiliser les données](#utiliser-les-données)
  - [Thème personnalisé](#thème-personnalisé)
    - [Personnaliser l'icone de l'app](#personnaliser-licone-de-lapp)

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

## StatefulWidget

*StatelessWidget / Stateful Widget*: Widget statique contre Widget dynamique.

A chaque mise à jour, ce n'est pas le StatefulWidget qui change, mais le `State<T>` qui rebuild à chaque fois -> `State<StatefulWidget>`. Le Widget en lui-même est immutable.

![Stateful Widget Lifecycle](/img/flutter_stateful-lifecycle.png)

### Exemple

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

### Création d'un Stateful Widget

Un `StatefulWidget` est composé de deux parties principales : le widget lui-même et une classe State associée.

```dart
class MyStatefulWidget extends StatefulWidget {
  @override
  _MyStatefulWidgetState createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  // État du widget
  int _counter = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Text('Valeur : $_counter'),
        ElevatedButton(
          onPressed: () {
            setState(() {
              _counter++;
            });
          },
          child: Text('Incrémenter'),
        ),
      ],
    );
  }
}
```

### initState

La méthode `initState` est appelée une seule fois lorsque le widget est inséré dans l'arbre des widgets. Elle est utilisée pour initialiser l'état du widget.

```dart
@override
void initState() {
  super.initState();
  // Initialisation ici
  _counter = 0;
}
```

### didUpdateWidget

La méthode `didUpdateWidget` est appelée lorsque le framework réinsère le widget dans l'arbre des widgets. Elle est utilisée pour réagir aux changements de configuration du widget.

```dart
@override
void didUpdateWidget(covariant MyStatefulWidget oldWidget) {
  super.didUpdateWidget(oldWidget);
  // Réagir aux changements ici
}
```

### dispose

La méthode `dispose` est appelée lorsque le widget est supprimé de l'arbre des widgets. Elle est utilisée pour libérer les ressources.

```dart
@override
void dispose() {
  // Libérer les ressources ici
  super.dispose();
}
```

### setState

La méthode `setState` est utilisée pour notifier le framework que l'état du widget a changé, ce qui déclenche un rappel de la méthode `build`.

```dart
setState(() {
  _counter++;
});
```

Voici un *exemple complet*:

```dart
import 'package:flutter/material.dart';

class CounterWidget extends StatefulWidget {
  @override
  _CounterWidgetState createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _counter = 0;

  @override
  void initState() {
    super.initState();
    _counter = 0; // Initialisation
  }

  @override
  void didUpdateWidget(covariant CounterWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    // Réagir aux changements de configuration
  }

  @override
  void dispose() {
    // Libérer les ressources
    super.dispose();
  }

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Text('Valeur : $_counter'),
        ElevatedButton(
          onPressed: _incrementCounter,
          child: Text('Incrémenter'),
        ),
      ],
    );
  }
}
```

---

## Forms

Flutter fournit un widget `Form` qui facilite la gestion des formulaires, y compris la validation et la récupération des données saisies.

### Composants principaux d'un Formulaire

- **Form Widget**:
  
Le widget Form est un conteneur pour les champs de formulaire. Il gère l'état du formulaire et permet de valider les champs.

```dart
Form(
  key: _formKey,
  child: Column(
    children: <Widget>[
      // Champs de formulaire ici
    ],
  ),
);
```

- **GlobalKey**:

Utilisez une *GlobalKey* pour identifier le formulaire et accéder à son état. Cela permet de valider le formulaire et de réinitialiser les champs.

```dart
final _formKey = GlobalKey<FormState>();
```

- **TextFormField**

Le widget `TextFormField` est utilisé pour les champs de texte dans un formulaire. Il s'intègre avec le widget `Form` pour la validation.

```dart
TextFormField(
  controller: _controller,
  decoration: InputDecoration(labelText: 'Enter text'),
  validator: (value) {
    if (value == null || value.isEmpty) {
      return 'Please enter some text';
    }
    return null;
  },
)
```

### Utilisation des Contrôleurs

- **TextEditingController**

Un TextEditingController est utilisé pour lire le texte saisi dans un champ de texte et pour définir le texte initial.

```dart
final TextEditingController _controller = TextEditingController();

@override
void dispose() {
  _controller.dispose();
  super.dispose();
}

TextFormField(
  controller: _controller,
  decoration: InputDecoration(labelText: 'Enter text'),
)
```

### Types de Champs

- **Champs de Texte**:

`TextFormField` : Pour les entrées de texte.
`TextField` : Pour les entrées de texte sans validation intégrée.

- **Champs Numériques**:

Utilisez le paramètre `keyboardType` pour spécifier le type de clavier.

```dart
TextFormField(
  keyboardType: TextInputType.number,
  decoration: InputDecoration(labelText: 'Enter a number'),
)
```

- **Champs de Mot de Passe**:

Utilisez le paramètre `obscureText` pour masquer le texte saisi.

```dart
TextFormField(
  obscureText: true,
  decoration: InputDecoration(labelText: 'Enter password'),
)
```

- **Champs de Courriel**

Utilisez `keyboardType` et un validateur pour les adresses e-mail.

```dart
TextFormField(
  keyboardType: TextInputType.emailAddress,
  decoration: InputDecoration(labelText: 'Enter email'),
  validator: (value) {
    if (value == null || value.isEmpty || !value.contains('@')) {
      return 'Please enter a valid email';
    }
    return null;
  },
)
```

### Validation et Soumission

Valider le Formulaire:

Utilisez la méthode `validate()` pour valider tous les champs du formulaire.

```dart
if (_formKey.currentState!.validate()) {
  // Si le formulaire est valide, récupérez les données
  _formKey.currentState!.save();
}
```

Réinitialiser le Formulaire:

Utilisez la méthode `reset()` pour réinitialiser les champs du formulaire.

```dart
_formKey.currentState!.reset();
```

---

## Provider

Le package `Provider` permet de gérer et de propager l'état de manière efficace à travers l'arbre des widgets sans avoir à passer manuellement les données à chaque niveau.

Ajouter la dépendance:

```yaml title="pubspec.yaml"
dependencies:
  flutter:
    sdk: flutter
  provider: ^6.0.0
```

Créer un modèle de données qui étend ChangeNotifier:

```dart title="models/tweetModel.dart"
class TweetModel with ChangeNotifier {
  final List<Tweet> _tweets = [];

  List<Tweet> get tweets => _tweets;

  void addTweet(Tweet tweet) {
    _tweets.add(tweet);
    notifyListeners();
  }
}
```

Ce dernier est différent du modèle de données Métier (ici Tweet):

```dart title="models/tweet.dart"
final String author;
final String message;
final String date;

Tweet(this.author, this.message, this.date);
```

Configurer le `Provider` en enveloppant le widget racine avec `ChangeNotifierProvider`:

```dart title="main.dart"
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'tweet_model.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => TweetModel(),
      child: MyApp(),
    ),
  );
}
```

Accéder aux données et méthodes du modèle dans les widgets:

```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'tweet_model.dart';

class TweetList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final tweetModel = Provider.of<TweetModel>(context);

    return ListView.builder(
      itemCount: tweetModel.tweets.length,
      itemBuilder: (context, index) {
        final tweet = tweetModel.tweets[index];
        return ListTile(
          title: Text(tweet.message),
          subtitle: Text('${tweet.author} - ${tweet.date}'),
        );
      },
    );
  }
}
```

Enfin, mettre à jour l'état en appelant la méthode du modèle: (`Provider.of<TweetModel>(context, listen: false).addTweet(newTweet);`)

---

## Future

`Future<T>` est utilisé pour représenter une valeur potentielle disponible à un certain moment dans le futur. Il est essentiel pour gérer les opérations asynchrones, telles que les appels réseau, la lecture de fichiers, ou toute autre tâche qui ne se termine pas immédiatement.

### Créer un Future

Un Future peut être créé en utilisant une fonction asynchrone marquée avec le mot-clé async.

```dart
Future<String> fetchUserData() async {
  await Future.delayed(Duration(seconds: 2)); // Simule un délai
  return "Données utilisateur";
}
```

### Utiliser async et await

Les mots-clés `async` et `await` sont utilisés pour travailler avec des `Future`. `async` marque une fonction comme asynchrone, et `await` pause l'exécution jusqu'à ce que le `Future` soit complété.

```dart
void getData() async {
  String data = await fetchUserData();
  print(data);
}
```

### Utiliser then, catchError

Vous pouvez également utiliser les méthodes `then` et `catchError` pour gérer les résultats et les erreurs d'un `Future`.

```dart
fetchUserData().then((value) {
  print(value);
}).catchError((error) {
  print('Erreur : $error');
});
```

### Exemple Complet

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Future Example')),
        body: FutureBuilderExample(),
      ),
    );
  }
}

class FutureBuilderExample extends StatelessWidget {
  Future<String> fetchUserData() async {
    await Future.delayed(Duration(seconds: 2)); // Simule un délai
    return "Données utilisateur";
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: FutureBuilder<String>(
        future: fetchUserData(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return CircularProgressIndicator();
          } else if (snapshot.hasError) {
            return Text('Erreur : ${snapshot.error}');
          } else {
            return Text('Données : ${snapshot.data}');
          }
        },
      ),
    );
  }
}
```

---

## Navigation

Flutter fournit un système de navigation flexible et puissant via le widget `Navigator`.

### Navigator.push

La méthode `push` est utilisée pour ajouter un nouvel écran à la pile de navigation. Elle prend un `Route` comme argument, généralement créé avec `MaterialPageRoute`.

```dart
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => NewScreen()),
);
```

### Navigator.pop

La méthode `pop` est utilisée pour retirer l'écran actuel de la pile de navigation et revenir à l'écran précédent.

```dart
Navigator.pop(context);
```

### Navigator.pushNamed

La méthode `pushNamed` est utilisée pour naviguer vers un écran identifié par un nom de route. Cela nécessite la configuration de routes nommées dans le `MaterialApp`.

```dart
Navigator.pushNamed(context, '/newScreen');
```

### Configuration des Routes Nommées

Pour utiliser `pushNamed`, vous devez définir les routes dans le `MaterialApp`.

```dart
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => HomeScreen(),
    '/newScreen': (context) => NewScreen(),
  },
)
```

### Exemple de nav

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/',
      routes: {
        '/': (context) => HomeScreen(),
        '/newScreen': (context) => NewScreen(),
      },
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Accueil')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.pushNamed(context, '/newScreen');
          },
          child: Text('Aller à Nouvel Écran'),
        ),
      ),
    );
  }
}

class NewScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Nouvel Écran')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.pop(context);
          },
          child: Text('Retour'),
        ),
      ),
    );
  }
}
```

### Avec arguments

Définir la route:

```dart
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => TweetListScreen(),
    '/tweetDetail': (context) {
      final tweet = ModalRoute.of(context)?.settings.arguments as Tweet;
      return TweetDetailScreen(tweet: tweet);
    },
  },
)
```

Ajouter les arguments au constructeur du nouvel écran.

```dart
class TweetDetailScreen extends StatelessWidget {
  final Tweet tweet;

  TweetDetailScreen({required this.tweet});

  @override
  Widget build(BuildContext context) {
    // ...
  }
}
```

On définit le lien de navigation sur un bouton par exemple.

```dart
IconButton(
  onPressed: () {
    Navigator.pushNamed(context, '/tweet/detail', arguments: tweet);
  },
  // ...
)
```

---

## Drawer

Le `Drawer` est un widget de Flutter qui permet d'afficher un panneau de navigation glissant depuis le côté de l'écran.

Le `Drawer` est généralement ajouté à un `Scaffold`. Vous pouvez le personnaliser en ajoutant différents widgets comme `DrawerHeader` (utilisé pour ajouter un en-tête), `ListTile` (utilisé pour ajouter des éléments de liste interactifs), et d'autres widgets de mise en page.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/',
      routes: {
        '/': (context) => HomeScreen(),
        '/settings': (context) => SettingsScreen(),
      },
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Accueil')),
      drawer: Drawer(
        child: ListView(
          children: <Widget>[
            DrawerHeader(
              decoration: BoxDecoration(color: Colors.blue),
              child: Text('Menu'),
            ),
            ListTile(
              title: Text('Accueil'),
              onTap: () {
                Navigator.pop(context);
                Navigator.pushNamed(context, '/');
              },
            ),
            ListTile(
              title: Text('Paramètres'),
              onTap: () {
                Navigator.pop(context);
                Navigator.pushNamed(context, '/settings');
              },
            ),
          ],
        ),
      ),
      body: Center(child: Text('Contenu principal')),
    );
  }
}

class SettingsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Paramètres')),
      body: Center(child: Text('Écran des paramètres')),
    );
  }
}
```

---

## Persistance des données (DB SQLite)

Nous allons utiliser SQLite pour stocker des tweets localement.

### Ajouter les dépendances

Ajoutez les dépendances `sqflite` et `path` à votre fichier `pubspec.yaml` :

```yaml
dependencies:
  flutter:
    sdk: flutter
  sqflite: any
  path: any
```

### Créer un modèle de données

Si ce n'est pas déjà fait, créez une classe pour représenter un tweet, ou adaptez l'actuelle pour ajouter l'id et les méthodes.

```dart
class Tweet {
  final int? id;
  final String author;
  final String message;
  final String date;

  Tweet({this.id, required this.author, required this.message, required this.date});

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'author': author,
      'message': message,
      'date': date,
    };
  }

  factory Tweet.fromMap(Map<String, dynamic> map) {
    return Tweet(
      id: map['id'],
      author: map['author'],
      message: map['message'],
      date: map['date'],
    );
  }
}
```

### Configurer la base de données

Créez un fichier pour gérer la base de données.

```dart
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import 'tweet.dart';

class DatabaseHelper {
  static final DatabaseHelper instance = DatabaseHelper._instance();
  static Database? _db;

  DatabaseHelper._instance();

  String tweetsTable = 'tweet_table';
  String colId = 'id';
  String colAuthor = 'author';
  String colMessage = 'message';
  String colDate = 'date';

  Future<Database?> get db async {
    if (_db == null) {
      _db = await _initDb();
    }
    return _db;
  }

  Future<Database> _initDb() async {
    String path = join(await getDatabasesPath(), 'tweets.db');
    final tweetsDb = await openDatabase(path, version: 1, onCreate: _createDb);
    return tweetsDb;
  }

  void _createDb(Database db, int version) async {
    await db.execute(
      'CREATE TABLE $tweetsTable($colId INTEGER PRIMARY KEY AUTOINCREMENT, $colAuthor TEXT, $colMessage TEXT, $colDate TEXT)',
    );
  }

  Future<List<Tweet>> getTweets() async {
    final db = await this.db;
    final maps = await db!.query(tweetsTable);
    return List.generate(maps.length, (i) {
      return Tweet.fromMap(maps[i]);
    });
  }

  Future<int> addTweet(Tweet tweet) async {
    final db = await this.db;
    return await db!.insert(tweetsTable, tweet.toMap());
  }
}
```

### Utiliser la base de données dans votre application

Vous pouvez maintenant utiliser `DatabaseHelper` pour ajouter et récupérer des tweets dans votre application.

```dart
import 'package:flutter/material.dart';
import 'database_helper.dart';
import 'tweet.dart';

class TweetScreen extends StatefulWidget {
  @override
  _TweetScreenState createState() => _TweetScreenState();
}

class _TweetScreenState extends State<TweetScreen> {
  final TextEditingController _authorController = TextEditingController();
  final TextEditingController _messageController = TextEditingController();
  final DatabaseHelper _databaseHelper = DatabaseHelper.instance;

  void _addTweet() async {
    String author = _authorController.text;
    String message = _messageController.text;
    String date = DateTime.now().toString();

    Tweet newTweet = Tweet(author: author, message: message, date: date);
    await _databaseHelper.addTweet(newTweet);

    setState(() {}); // Met à jour l'interface utilisateur
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Tweets')),
      body: Column(
        children: [
          TextField(
            controller: _authorController,
            decoration: InputDecoration(labelText: 'Author'),
          ),
          TextField(
            controller: _messageController,
            decoration: InputDecoration(labelText: 'Message'),
          ),
          ElevatedButton(
            onPressed: _addTweet,
            child: Text('Add Tweet'),
          ),
          Expanded(
            child: FutureBuilder<List<Tweet>>(
              future: _databaseHelper.getTweets(),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return CircularProgressIndicator();
                } else if (snapshot.hasError) {
                  return Text('Error: ${snapshot.error}');
                } else {
                  final tweets = snapshot.data;
                  return ListView.builder(
                    itemCount: tweets?.length ?? 0,
                    itemBuilder: (context, index) {
                      final tweet = tweets![index];
                      return ListTile(
                        title: Text(tweet.message),
                        subtitle: Text('${tweet.author} - ${tweet.date}'),
                      );
                    },
                  );
                }
              },
            ),
          ),
        ],
      ),
    );
  }
}
```

---

## API

Installer les dépendances:

```bash
flutter pub add http
```

Cela ajoute au fichier pubspec.yaml:

```yaml title="pubspec.yaml"
http: ^1.3.0
```

### JSON Mapping

*Réponse HTTP* -> *JSON* -> *Objet Dart*

Créer un modèle de données qui représente les données reçues par l'API et explicitement alimenter les attributs !

```dart
class Tweet {
  int id;
  // ... autres propriétés

  Tweet(this.id, ...);

  factory Tweet.fromJson(Map<String, dynamic> json) {
    return Tweet(
      id: json["id"],
      // ... le reste
    )
  }
}
```

### Appeler une API

Dans un viewModel:

```dart
void fetch() async {
  final uri = '' // uri endpoint

  try {
    var response = await http.get(Uri.parse(uri));

    if (response.statusCode == 200) {
      // Gérer la réception des données
    } else {
      // Gérer erreur http avec l'API
    }
  } catch (e) {
    print('Error: $e');
  }
}
```

### Utiliser les données

```dart
...Button(
  onPressed: ...Model.fetch()
)
```

---

## Thème personnalisé

### Personnaliser l'icone de l'app

- Ressources : [appicons](https://www.appicon.co/)

---

- Thème (theme perso)
