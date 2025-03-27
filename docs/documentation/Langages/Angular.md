# Angular

- [Angular](#angular)
  - [Ressources](#ressources)
  - [Architecture](#architecture)
  - [Introduction](#introduction)
    - [Single Page Application](#single-page-application)
    - [Ecosystème](#ecosystème)
    - [Prérequis](#prérequis)
  - [Angular CLI](#angular-cli)
    - [Installation](#installation)
    - [Créer un projet](#créer-un-projet)
    - [Lancer le serveur](#lancer-le-serveur)
  - [Structure de base](#structure-de-base)
  - [Créer son premier composant](#créer-son-premier-composant)
    - [Structure d'un composant](#structure-dun-composant)
    - [Décorateurs principaux](#décorateurs-principaux)
  - [Communication entre composants](#communication-entre-composants)
    - [Directives](#directives)
    - [Directives structurelles](#directives-structurelles)
  - [Installer Tailwind (v4)](#installer-tailwind-v4)
  - [Services](#services)
    - [Rôles et responsabilités](#rôles-et-responsabilités)
    - [Exemple de service :​](#exemple-de-service-)
    - [Créer un service](#créer-un-service)
    - [Injecter un service](#injecter-un-service)
  - [Routing et navigation](#routing-et-navigation)
    - [Routes simples](#routes-simples)
    - [Routes avec paramètres](#routes-avec-paramètres)
    - [Protéger les routes avec les Guards](#protéger-les-routes-avec-les-guards)
  - [Formulaires](#formulaires)
    - [Exemple d'utilisation des validateurs Angular :​](#exemple-dutilisation-des-validateurs-angular-)
  - [API REST](#api-rest)
    - [Module HttpClient](#module-httpclient)
    - [Méthode GET](#méthode-get)
    - [Méthode POST](#méthode-post)
    - [Observables](#observables)
    - [Pratique](#pratique)
    - [Config](#config)

---

## Ressources

- [Doc](https://angular.dev/overview)
- [Autre doc](https://angular.fr/)
- [Repo](https://github.com/antoinecoulon/ws-angular)
- [Simon DIENY](https://www.youtube.com/channel/UCZqq_ow06Husetd9ICEM2gQ/videos)

---

## Architecture

![Architecture Angular](/img/angular_architecture.PNG)

*Architecture robuste MVVM*: Model - ViewModel - View

- Architecture modulaire
- Basée sur les composants
- Injection de dépendances
- Découpage fonctionnel
- Single Page Application

---

## Introduction

Angular est un framework front JS, aujourd'hui il recommande d'utiliser TypeScript. On peut y associer NodeJS pour avoir un back simple et rapide.

Angular + TypeScript est une combinaison puissante pour des applications web robustes !

### Single Page Application

Une **SPA** est une application web moderne qui charge **une seule page** initiale et met à jour son contenu **dynamiquement**, *sans rechargement complet* lors des intéractions utilisateur:

- Chargement asynchrone des données
- MAJ dynamique du contenu sans rechargement
- Expérience fluide
- Répartition optimale des traitements (client/serveur)

### Ecosystème

- **TypeScript**: Typage statique
- **Angular CLI**: Outil de développement
- **RxJS**: Programmation réactive (observables) *(librairie)*
- **Angular Material**: Composants UI *(librairie)*
- **NgRx**: Gestion d'état *(librairie)*

### Prérequis

- Node.js (LTS)
- npm
- TypeScript (5.5+)

*(extensions vscode):*

- Angular Language Service
- Angular Snippets

## Angular CLI

Utilitaire en ligne de commande qui permet de:

- Créer un projet
- Tester un projet
- Lancer un serveur web de dev
- Build pour la prod

[Doc Angular CLI](https://github.com/angular/angular-cli)

### Installation

```bash
npm install -g @angular/cli
```

### Créer un projet

```bash
ng new mon-projet --skip-tests --style=scss
```

### Lancer le serveur

```bash
cd mon-projet
ng serve -o
```

> Congratulations! Your app is running. 🎉

---

## Structure de base

*/public* : va contenir les assets.

*/src* : répertoire où l'on va travailler, va contenir les composants, vues, etc.

  *styles.scss* : feuille de style général de l'app, chaque composant pourra être customisé avec son propre fichier scss.

  *main.ts* : point d'entrée de l'applocation, lancement du composant de base AppComponent.

  *index.html* : point d'entrée aux yeux du navigateur, balise `base` importante pour le routing, balise `<app-root>` qui correspond au composant parent de l'app.

*/app* : composant parent et fichiers associés.

  *app.routes.ts* : routing (tableau qui contient nos routes).

  *app.config.ts* : définit de la configuration pour notre app.

  *app.component.ts* : définit un composant et ses paramètres (selector: nom de la balise et du composant / imports: injecter dans le template html des composants et autres éléments d'angular / styleUrl: feuille de style de ce composant exclusivement).

*tsconfig.json* : fichier de configuration pour TypeScript (transpilation, build, etc).

*package.json* : dépendances et scripts.

*angular.json* : configuration du framework.

---

## Créer son premier composant

On va créer un composant via le CLI (toujours se placer à la racine du projet pour lancer ces commandes):

```bash
ng generate component folder/component-name
```

(fonctionne aussi avec des alias)

```bash
ng g c folder/component-name
```

Un dossier 'hello-world' a été créé dans /src/app avec tous les fichiers nécessaires (html, css, ts et test).

### Structure d'un composant

![Structure](/img/angular_structure-component.PNG)

### Décorateurs principaux

- @Component() - Définit un composant
- @Injectable() - Service injectable

---

## Communication entre composants

- Services : communication transverse
- Signals : état réactif (depuis Angular 17)
- Observables : gestion de flux de données

### Directives

- Interpolation `{{ }}` -> `{{ data }}`

![Interpolation](/img/angular_interpolation.PNG)

- Property binding `[ ]` -> `[property]="data"`

![Property binding](/img/angular_property-binding.PNG)

- Event binding `( )` -> `(event)="handler()"`

![Event binding](/img/angular_event-binding.PNG)

- Two-wat binding `[( )]` -> `[(ngModel)]="data"`

![Two Way Binding](/img/angular_twoway-binding.PNG)

### Directives structurelles

- @for

![for](/img/angular_for.PNG)

- @if

![if](/img/angular_if.PNG)

- @switch

![switch](/img/angular_switch.PNG)

## Installer Tailwind (v4)

```bash
npm install tailwindcss @tailwindcss/postcss postcss --force
```

Create a `.postcssrc.json` file in the root of your project and add the `@tailwindcss/postcss` plugin to your PostCSS configuration.

```json title=".postcssrc.json"
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

Add an `@import` to `./src/styles.css` that imports Tailwind CSS.

```css title="styles.css"
@import "tailwindcss";
```

---

## Services

### Rôles et responsabilités

Le pattern **MVVM (Model-View-ViewModel)** est une architecture logicielle utilisée principalement dans le développement d'applications frontend. Voici une définition simple :​

*Model* : Représente les données de l'application et la logique métier. Il est responsable de la récupération et de la gestion des données.​

*View* : C'est l'interface utilisateur. Elle affiche les données et envoie les interactions de l'utilisateur au ViewModel.​

*ViewModel* : Sert d'intermédiaire entre le Model et la View. Il récupère les données du Model et les prépare pour la View. Il gère également les interactions de l'utilisateur en mettant à jour le Model en conséquence.​

Exemples de fonctions qui peuvent être positionnées dans un Service :​

- Gestion d'authentification et d'autorisation​
- Gestion d'envoi d'email​
- Gestion de paiement en ligne​
- Gestion de génération de rapports​
- Gestion de traitement d'image​
- Gestion de communication avec des API externes​
- etc.​

Les Services peuvent être injectés dans les Contrôleurs pour être utilisés et peuvent également être testés indépendamment du reste de l'application.​

### Exemple de service :​

```js
import { Injectable } from '@angular/core';​
​
@Injectable({​
  providedIn: 'root'​
})​
export class MonService {​
  private data: string[];​
  constructor(private httpClient: HttpClient) {​
    this.data = ['donnée1', 'donnée2', 'donnée3'];​
  }​
  getData() {​
    return this.data;​
  }​
  getDataFromApi() {​
    return this.httpClient.get('https://monapi.com/data');​
  }​
}
```

### Créer un service

```bash
ng generate service services/nomDuService
```

### Injecter un service

Plusieurs solutions:

- Par un constructeur

```js
products?: Product[]

constructor(private readonly productsService: ProductService) {
  this.products = this.productsService.fetchProducts()
}
```

- Avec `inject()`

```js
products?: Product[]

private readonly productsService: ProductService = inject(ProductService)

ngOnInit() {
  this.products = this.productsService.fetchProducts()
}
```

*voir aussi:* [LifeCycle Hooks Angular](https://angular.dev/guide/components/lifecycle)

---

## Routing et navigation

On peut déclarer nos routes dans le fichier `app.routes` ou via le *lazy loading*

### Routes simples

```js title="app.routes.ts"
import { Routes } from '@angular/router';​
​
const routes: Routes = [​
  { path: '', component: HomeComponent },​
  { path: 'about', component: AboutComponent },​
  { path: 'contact', component: ContactComponent },​

  { path: '**', component: NotFoundComponent },​ // L'URL n'existe pas = page d'erreur ou redirect
  // { path: '**', redirectTo: '', pathMatch: 'full' },
];
```

On ajoute dans le composant principal (`app.component.ts`) un composant spécial: `<router-outlet></router-outlet>`, c'est lui qui va gérer l'affichage et le changement d'une route.

Pour naviguer vers une route depuis un composant, on peut utiliser le service Router​:

```js
constructor(private router: Router) { }​
​
goToAbout() {​
  this.router.navigate(['/about']);​
}​
```

La méthode navigate permet de naviguer vers une route, en passant en paramètre le chemin de l'URL.

Pour créer un lien vers une page, on utilise pas l'attribut `href=` sinon on casserait le principe de SPA. On va plutôt utiliser le `router-link` de la classe `RouterLink`:

```js
<a router-link="/">Home</a>
```

A terme le fichier `app.component.ts` ressemblera à:

```js title="app.component.ts"
<HeaderComponent />

<router-outlet></router-outlet> // Cette partie seulement est rafraichie

<FooterComponent />
```

### Routes avec paramètres

La classe ActivatedRoute permet de gérer les paramètres.

Configuration :​

```js
const routes: Routes = [​
  { path: 'product/:id', component: HomeComponent },​
];​
```

Ou:

```js
const routes: Routes = [​
  { path: 'products', children: [
    {path: '', component: ProductsComponent},
    {path: ':id', component: ProductCardComponent},
  ]},​
];​
```

Redirection :​

```js
goToAbout() {​
  this.router.navigate(['/about', 123456]);​
}​
```

Récupération des arguments​:

```js
constructor(private route: ActivatedRoute) { }

ngOnInit() {​
  const id = this.route.snapshot.paramMap.get('id');​
  console.log(id);
}
```

Enfin dans le html:

```html
<a [routerLink]="['/product', 12]">Contact</a>
```

### Protéger les routes avec les Guards

```bash
ng generate guard guards/nomDuGuard
```

```js title="Exemple de Guard généré"
export const testGuard : CanActivateFn = (route, state) => {​
  return true​
}​

route : ActivatedRouteSnaphot – state : RouterStateSnapsh
```

On associera le Guard à un service d'authentification. Exemple:

```js
export const authGuard: CanActivateFn = (route, state) => {​
​
  const authService = inject(AuthService)​
  const router = inject(Router)​
  const requiredRole = route.data['role'] ?? null​
​
  if (authService.isAuthenticated() && authService.hasRole(requiredRole)) {​
    return true​
  } else {​
    router.navigate(['login'], {queryParams: {returnUrl: state.url, message : "Vous devez être connecté"}} );​
    return false​
  }​
};
```

Pour utiliser un Guard, il suffit de l'ajouter à la propriété canActivate de la route protégée:

```js title="app.routes.ts"
export const routes: Routes = [​
  {path: 'login', component: LoginPageComponent},​
  {path: 'admin', component: AdminPageComponent, canActivate: [authGuard], data: {role: 'admin'}},​
  {path: '**', component: HomePageComponent, canActivate: [authGuard]},​
];
```

---

## Formulaires

### Exemple d'utilisation des validateurs Angular :​

Importer Validators depuis @angular/forms :​

```js
import { Validators } from '@angular/forms';​
```

Utiliser Validators pour définir les règles de validation pour chaque champ :​

```js
this.monFormulaire = new FormGroup({​
  nom: new FormControl('', Validators.required),​
  email: new FormControl('', [Validators.required, Validators.email]),​
  age: new FormControl('', [Validators.required, Validators.min(18)])​
});​
```

Utilisez la propriété errors pour afficher les erreurs de validation dans le template :​

```html
<form [formGroup]="monFormulaire" (submit)="onFormSubmit()">​
  <label for="nom">Nom :</label>​
  <input type="text" id="nom" name="nom" formControlName="nom">​
  @if (monFormulaire.get('nom')?.touched && monFormulaire.get('nom')?.invalid) {
    @if(monFormulaire.get('nom')?.hasError('required')) {<span>Le nom est obligatoire</span>}​
  }
  
​
  <label for="email">Email :</label>​
  <input type="email" id="email" name="email" formControlName="email">​
  @if (monFormulaire.get('email')?.touched && monFormulaire.get('email')?.invalid) {
    @if(monFormulaire.get('email')?.hasError('required')){<span>L'email est obligatoire</span>}​
    @if(monFormulaire.get('email')?.hasError('email')){<span>L'email doit être valide</span>}
  }​
​
  <button type="submit" [disabled]="!monFormulaire.valid" >Submit</button> ​<!-- on peut aussi désactiver le button tant que le form n'est pas valide -->
</form>
```

Valider le formulaire avec le bouton submit​

```js
public onFormSubmit() {​
  if (this.monFormulaire.valid) {​
    console.log("FORMULAIRE VALIDE !");​
  } else {​
    console.log("FORMULAIRE INVALIDE !")​
  }​
}
```

Vous pouvez également créer vos propres validateurs personnalisés en créant une fonction qui implémente ValidatorFn et retourne un objet contenant les erreurs de validation.​

```js
import { ValidatorFn } from '@angular/forms’;​

export function emailValidator(): ValidatorFn {​

  return (control: AbstractControl<string>): {[key: string]: any} | null => {​

  const forbidden = !control.value.endsWith(‘eni.fr’);​

  return forbidden ? {'forbiddenEmail': {value: control.value}} : null;​

  };​
}​;
​
```

---

## API REST

Architecture web REST (Representational State Transfer): basé sur HTTP, utilise des ressources pour communiquer entre les clients et les serveurs. En comparaison avec un service SOAP, REST est moins réputé pour sa sécurité, mais est plus flexible, plus rapide et plus simple en général.

### Module HttpClient

- Injecter le service HttpClient dans le composant (ou service)​

- Utiliser la méthode get(), post(), put() ou delete() (exemples)​

- Passer l'URL de l'API en premier paramètre de la méthode​

- Ajouter les paramètres optionnels tels que les headers ou le corps de la requête dans un objet en deuxième paramètre ([doc](https://angular.dev/guide/http/making-requests))​

- Souscrire à l'observable retourné par la méthode pour récupérer la réponse de l’API​

- *Attention v19* : [HttpClient](https://angular.dev/api/common/http/HttpClient?tab=usage-notes) / [Resource](https://angular.dev/guide/signals/resource) (cf. demo)​

### Méthode GET

```js
import { HttpClient } from '@angular/common/http';​
​
constructor(private readonly http: HttpClient) {}​
​
this.http.get<dataType>('https://api.com/data').subscribe(​
  (response) => {​
    console.log(response);​
  },​
  (error) => {​
    console.error(error);​
  }​
);
```

### Méthode POST

```js
import { HttpClient, HttpHeaders } from '@angular/common/http';​
​
constructor(private readonly http: HttpClient) {}​
​
const data = {​
  name: 'John Doe',​
  email: 'johndoe@mail.com'​
};​
​
const headers = new HttpHeaders({​
  'Content-Type': 'application/json'​
});​
​
this.http.post('https://mon-api.com/data', data, { headers }).subscribe(​
  (response) => {​
    console.log(response);​
  },​
  (error) => {​
    console.error(error);​
  }​
);
```

### Observables

- Création d'un observable qui émet une valeur puis se termine​

```js
const observable = new Observable(subscriber => {​

  subscriber.next('Bonjour RxJS!');​

  subscriber.complete();​

});​
```

- Souscription à l'observable pour recevoir les valeurs​

```js
observable.subscribe({​

  next(x) { console.log('Valeur reçue: ' + x); },​

  error(err) { console.error('Erreur: ' + err); },​

  complete() { console.log('Terminé'); }​

});
```

### Pratique

- Récupérer une API (possible d'utiliser un outil pour transform JSON into TS)
- Créer un modèle de données (typage) correspondant aux données renvoyées par l'API et à ce que l'on veut garder/utiliser
- Créer un service qui va gérer la logique de récupération/renvoi des données
- Créer un composant pour l'affichage des données reçues
- Créer une variable d'environnement (```bash ng generate environments```)

### Config

Penser à ajouter dans le `app.config.ts`:

```js title="app.config.ts"
providers: [
  //...
  provideHttpClient()
  //...
]
```
