# Java / Springboot

---

- [Java / Springboot](#java--springboot)
  - [Architecture backend avec Frameworks](#architecture-backend-avec-frameworks)
    - [Spring Boot](#spring-boot)
    - [Développement d’application Java Web et Spring](#développement-dapplication-java-web-et-spring)

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
