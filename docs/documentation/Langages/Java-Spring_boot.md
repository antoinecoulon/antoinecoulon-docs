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
