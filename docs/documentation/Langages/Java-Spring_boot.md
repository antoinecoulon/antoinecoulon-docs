# Java / Springboot

---

- [Java / Springboot](#java--springboot)
  - [Architecture backend avec Frameworks](#architecture-backend-avec-frameworks)
    - [Spring Boot](#spring-boot)
    - [Développement d’application Java Web et Spring](#développement-dapplication-java-web-et-spring)
    - [Installation](#installation)
  - [Rappels Sring Core](#rappels-sring-core)
    - [Lombok](#lombok)
  - [Tests](#tests)
    - [Exemple de test](#exemple-de-test)
  - [Spring Data](#spring-data)
    - [Spring Data JPA](#spring-data-jpa)
      - [ORM et Entité](#orm-et-entité)
      - [Exemple d'entité](#exemple-dentité)
      - [Spring repository](#spring-repository)
    - [Héritage](#héritage)
      - [SINGLE\_TABLE](#single_table)
      - [JOINED](#joined)
      - [TABLE\_PER\_CLASS](#table_per_class)
    - [Gestion des collections de base](#gestion-des-collections-de-base)
  - [Spring Web Service (REST)](#spring-web-service-rest)
    - [Introduction à Postman](#introduction-à-postman)
    - [RestController](#restcontroller)

---

## Architecture backend avec Frameworks

![Architecture](/img/java_architecture.PNG)

### Spring Boot

![Architecture](/img/java_architecture2.PNG)

Spring Boot nous permet de "faire notre marché" parmi un lot de fonctionnalités appelées **starters**.

La gestion du cycle de vie d'une application, dépend de tâches répétitives (Préprocessing, Compilation, Edition des liens, Tests, ...). Les **moteurs de productions** réalisent ces tâches (Ex: Make, Ant, Maven, *Gradle*, …).

### Développement d’application Java Web et Spring

*Le problème*: **Spring** est un framework proposant de très nombreuses fonctionnalités (Web, Sécurité, batch, accès aux données, ...) mais sa configuration peut s’avérer complexe et fastidieuse.

*La solution*: **Spring Boot** est un framework facilitant la configuration Spring grâce à l’auto-configuration, les starters, l’approche client lourd, et il peut fonctionner avec Gradle ou Maven.

=> *Un seul Point d’entrée* pour l’utilisateur:

- Plus nécessaire d’intégrer tous les modules de Spring
- Les dépendances sont déjà intégrées (**starters**)
- Utilisation de l’auto-configuration (**@EnableAutoConfiguration**)
- Un serveur est embarqué (Tomcat)
- Application packagée en JAR orientée pour les microservices

---

### Installation

- Télécharger le **jdk** voulu (**17 LTS** le plus utilisé à ce jour).
- Modifier les variables d'environnement (`JAVA_HOME` / `Path: %JAVA_HOME%\bin`)
- Vérifier avec `java --version`

---

## Rappels Sring Core

*Inversion of Control (IoC) [Design Pattern]*

- Réduire les dépendances (couplage faible) entre des objets dont l'implémentation peut varier
- Diminuer la complexité de gestion du cycle de vie de ces objets (patterns Singleton et Factory)
- Le contrôle du flot d'exécution d'une application n'est plus géré par l'application elle-même mais par une structure externe (conteneur)

Mise en place:

- Utilisation du patron de conception (design pattern) Factory
- Utilisation de l'injection de dépendances

Spring apporte le "**conteneur léger**":

Permet la prise en charge du cycle de vie des objets (beans) et leur mise en relation
Nommé : **ApplicationContext**

4 annotations principales pour définir un bean :

- @Component  → annotation de base utilisable sur toutes les couches
- @RestController → annotation désignant un contrôleur d'API REST
- @Service → annotation sur un service métier – permet la gestion des transactions sur cette couche
- @Repository → annotation sur une couche d’accès aux données – permet la gestion des exceptions SQL et transactions sur cette couche

Injection de dépendance par l’annotation **@Autowired**: cette annotation permet au conteneur Spring de rechercher un bean et de l’injecter dans une propriété ou dans une méthode.

Il est possible d’injecter une dépendance dans le constructeur (Solution utilisée par défaut si la dépendance est obligatoire) => Utilisation de la librairie **Lombok** pour un code plus concis.

### Lombok

**Lombok** est une librairie pour réduire le code en Java.

Il est composé d’un ensemble d’annotations :

- @Getter, @Setter
- @NoArgsConstructor, @AllArgsConstructor
- @EqualsAndHashCode, @ToString
- @Data
- …

Les annotations remplacent la génération de code dans les IDE: Le code sera généré par le compilateur (Utilisé par défaut pour remplacer le *Design Pattern POJO* des BO).

**Builder Pattern** → permet la construction des objets immuables: Placer l’annotation `@Builder` sur la classe.

```java
import lombok.Builder;
…
@Builder
public class Employe {…}
```

Permet de préciser lors de la création de l’instance, l’ensemble des champs à manipuler (et uniquement ceux-là).

Créer une classe avec Lombok:

```java
package fr.eni.demoFirstProject.bo;

import lombok.Data;
import lombok.NonNull;

@Data
public class Client {

    @NonNull
    private String nom;

    @NonNull
    private String prenom;

}
```

---

## Tests

### Exemple de test

```java
package fr.eni.demoFirstProject.bo;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

public class ClientTest {

    /**
     * Teste la création d'un client
     */
    @Test
    @DisplayName("Test de création d'un client - cas positif") // Cas passant / droit
    public void testCreateClient() {
        // AAA
        // Arrange = préparation du test
        Client client = null;
        
        // Act
        client = new Client("Marley", "Bob");

        // Assert
        assertThat(client).isNotNull();
        assertThat(client.getNom()).isEqualTo("Bob");
        assertThat(client.getPrenom()).isEqualTo("Marley");
    }
}
```

---

## Spring Data

Spring Data est un projet Spring pour simplifier l’interaction avec les différents stockages de données.

Spring Data introduit la notion de **Repository**:

`Repository<T, ID>`

- **T** → correspond au type de l’objet géré par le repository
- **ID** → correspond au type de la clef de l’objet

Un repository est une abstraction nous permettant de manipuler les objets du domaine métier.

### Spring Data JPA

Spring Data JPA est le module pour interagir avec une base de données relationnelles.

![JPA](/img/java_jpa.PNG)

Spring Data JPA interagit avec les bases de données relationnelles en **mappant les BO** sous forme d’entités JPA • Spring Data JPA fournit l’interface `JpaRepository<T,ID>`. Pour l’utiliser il faut intégrer le starter du même nom

Dans la couche DAL, il faut déclarer des Repository:

- Des interfaces héritant de JpaRepository
- Pour chaque entités JPA (BO) Spring Data JPA créera à l’exécution la classe d’implémentation correspondante

```java
public interface EmployeRepository 
    extends JpaRepository<Employe, Integer>{}
```

Déclaration de la DataSource dans le fichier application.properties ou application.yml (Les informations à définir sont les mêmes):

- Chaine de connexion
- Utilisateur de base de données
- Et son mot de passe

```yml title="application.yml"
#Connection to DB
spring: 
  datasource: 
    url: jdbc:sqlserver://localhost;databasename=DEMO_ENI_ECOLE; 
    username: sa 
    password: Pa$$w0rd
```

#### ORM et Entité

**ORM** (Object-Relational Mapping): Permet de mettre en correspondance le modèle de données relationnel et le modèle objets (entités)

![ORM](/img/java_orm.PNG)

JPA est une spécification d’ORM pour Java:

![ORM](/img/java_orm2.PNG)

**Entité** est une classe dont les instances peuvent être persistantes:

- Utilisation d'*annotations*
  - Sur la classe : @Entity, @Table
  - Sur les attributs : @Column, @Id , @GeneratedValue
- La classe doit respecter le *design pattern POJO* (Plained Old Java Object)
  - Attributs privés
  - Getter/Setter
  - Constructeur sans paramètre
  - equals
  - toString

#### Exemple d'entité

```java
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity // Définit une entité, qui va créer une table correspondante en BDD
public class Personne { 
  
  @Id   // ID Obligatoire
  private Long id;

  private String prenom;
  
  …
}
```

Quelques annotations facultatives :

- @Table : définir le nom de la table en base de données
- @GeneratedValue : Définir une clé primaire auto-générée par la base de données
  - L’attribut strategy permet de préciser comment la clé doit être générée
- @Column : permet de définir
  - le nom de la colonne (attribut name),
  - la longueur maximum (attribut length)
  - si la colonne en BD accepte les valeurs nulles ou non (attribut nullable)
  - si un index unique doit être créé  (attribut unique)
- @Transient : indique que l’attribut ne sera pas mappé(et donc non persisté) dans la table
- @Basic : annotation par défaut pour un attribut
  - Peut permettre d’utiliser les attributs fetch (LAZY/EAGER)
  - Et optional : l’attribut peut être nul ou non

```java
@Entity 
@Table(name = "PERSONNES") 
public class Personne  { 
  
  @Id 
  @GeneratedValue 
  private Long id; 
  
  @Column(length = 50, nullable = false) 
  private String prenom; 
  
  @Basic(optional = false) 
  private String nom; 
  
  @Transient 
  private Integer age;
  
  …
}
```

#### Spring repository

```java
package fr.eni.demoWeb; 

import org.springframework.data.jpa.repository.JpaRepository; 
import fr.eni.demoWeb.bo.Personne; 

public interface PersonneRepository extends JpaRepository<Personne, Long>{ 
  // Rien à rajouter, les méthodes (CRUD) sont déjà définies par JpaRepository
}
```

---

### Héritage

Trois stratégies pour enregistrer une hiérarchie de classes en base :

- **SINGLE_TABLE** :
  - Chaque hiérarchie d'entités JPA est enregistrée dans une table unique
  - Stratégie efficace pour les modèles de faible profondeur d'héritage
- **JOINED** :
  - Chaque entité JPA est enregistrée dans sa propre table
  - Les entités d'une hiérarchie sont en jointure les unes des autres
  - Stratégie inefficace dans le cas de hiérarchies trop importantes
- **TABLE_PER_CLASS** :
  - Seules les entités associées à des classes concrètes sont enregistrées dans leur propre table
  - Efficace, notamment dans le cas des hiérarchies importantes

#### SINGLE_TABLE

Toute la hiérarchie de classes est enregistrée dans une seule table: **@Entity** sur chaque classe *et* **@Inheritance(strategy=InheritanceType.SINGLE_TABLE)** sur la classe mère.

Autant de colonnes que de champs persistants différents.

Utilisation d'une colonne supplémentaire discriminante: **@DiscriminatorColumn(name="TYPE_ENTITE")** sur la classe mère *et* **@DiscriminatorValue("...")** sur chacune des classes de la hiérarchie.

```java
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "DISCR")
@DiscriminatorValue(value = "V")
public class Voiture {
  @Id 
  @GeneratedValue(strategy = GenerationType.AUTO) 
  private Integer id; 
  
  private String marque;
}

// -------

@Entity 
@DiscriminatorValue(value="B") 
public class Berline extends Voiture { 
  private String couleurCuir;
}

// -------

@Entity 
@DiscriminatorValue(value="C") 
public class VoitureDeCourse extends Voiture { 
  public String ecurie;
}
```

![Heritage1](/img/java_heritage1.PNG)

#### JOINED

Autant de tables qu'il y a de classes annotées @Entity dans la hiérarchie: **@Entity** sur chaque classe et **@Inheritance(strategy=InheritanceType.JOINED)** sur la classe mère.

Chaque table possède ses propres champs.

Les tables "filles" possèdent leurs propres champs et une colonne référence à la table mère.

Possibilité de définir une colonne discriminante.

```java
@Entity
@Inheritance(strategy = InheritanceType.JOINED) 
@DiscriminatorColumn(name="DISCR") 
@DiscriminatorValue(value="V") 
public class Voiture { 
  @Id 
  @GeneratedValue(strategy = GenerationType.AUTO) 
  private Integer id; 
  
  private String marque;
}

// -------

@Entity 
@DiscriminatorValue(value="B") 
public class Berline extends Voiture { 
  private String couleurCuir;
}

// -------

@Entity 
@DiscriminatorValue(value="C") 
public class VoitureDeCourse extends Voiture { 
  public String ecurie;
}
```

![Heritage2](/img/java_heritage2.PNG)

#### TABLE_PER_CLASS

Autant de tables qu'il y a de classes concrètes annotées @Entity dans la hiérarchie: **@Entity** sur chaque classe et **@Inheritance(strategy=InheritanceType.TABLE_PER_CLASS)** sur la classe mère.

Chaque table possède:

- sa propre clé primaire
- les colonnes correspondant aux attributs issus de l'héritage
- ses propres attributs

Pas de colonne discriminante.

```java
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS) 
public class Voiture { 
  @Id 
  @GeneratedValue(strategy = GenerationType.AUTO) 
  private Integer id; 
  
  private String marque;
}

// -------

@Entity 
public class Berline extends Voiture { 
  private String couleurCuir;
}

// -------

@Entity 
public class VoitureDeCourse extends Voiture { 
  public String ecurie;
}
```

![Heritage3](/img/java_heritage3.PNG)

---

### Gestion des collections de base

- Possibilité d'enregistrer une collection d'éléments simple (String, Date, Integer…) sans avoir besoin de créer une nouvelle classe Entity
- Utilisation de l'annotation @ElementCollection
- Possibilité de redéfinir le nom de la table de jointure ainsi que les colonnes
  - @CollectionTable ( name = "…", joinColumns=@JoinColumn(name = "…", referencedColumnName = "...")
  - @Column(name="…")

```java
@Entity
public class Personne { 
  @Id 
  @GeneratedValue(strategy = GenerationType.AUTO) 
  private int id; 
  
  private String nom; 
  
  private String prenom; 
  
  @ElementCollection(fetch = FetchType.EAGER) 
  @CollectionTable(name = "Sports", 
  joinColumns= @JoinColumn(name="id_spo", referencedColumnName="id")) 
  private List<String> sports;
}
```

---

## Spring Web Service (REST)

Un Web Service est une application manipulable au travers d’API sur Internet, il permet d'échanger des données entre applications. Pour cela on va utiliser un langage object commun, comme le JSON.

### Introduction à Postman

Postman permet de tester des API REST. C’est un client HTTP qui permet d’exécuter des appels HTTP depuis une interface graphique.

### RestController

Avec Spring Boot pour manipuler des contrôleurs REST:

- Utilisation du *starter Spring Web*
- Utilisation de l’annotation **@RestController** sur les classes de contrôleurs
- Utilisation de l’annotation **@RequestMapping** au niveau de la classe pour définir une URL racine de l’API REST
- Manipulation des méthodes du protocole HTTP (GET, POST, …) via les annotations : *@GetMapping*, *@PostMapping*, *@PutMapping*, *@PatchMapping* et *@DeleteMapping*
- Pour transmettre une donnée et un statut de retour utilisation de `ResponseEntity<T>`

Un contrôleur REST de Spring peut travailler ou transmettre directement des données de types simples : String, int, … (Toutes données provenant du Client sont par défaut des String).

Spring Boot utilise la librairie **Jackson** pour le mapping Java POJO - JSON (Du client vers le Serveur et inversement). Cette librairie est importée automatiquement avec le starter Spring Web.

Un contrôleur REST de Spring peut transmettre un `ResponseEntity<T>`. C’est un objet Java pouvant contenir :

- La valeur de retour (response body) (String, int, …, JSON, XML)
- Des paramètres de headers HTTP
- Un statut HTTP (2XX, 4XX, …)

`ResponseEntity<T>` fournit un builder pour construire la réponse.

```java
ResponseEntity.ok(employes)

ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Votre identifiant n'est pas un entier");
```
