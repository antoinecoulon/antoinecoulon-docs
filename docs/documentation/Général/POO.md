---
sidebar_position: 1
description: Programmation Orientée Objet
---

# POO

## this

En POO, le mot-clé this est utilisé pour faire référence à l'instance actuelle d'une classe.

**Référence à l'instance actuelle** : this permet d'accéder aux attributs et méthodes de l'objet courant. C'est particulièrement utile lorsque vous avez des noms de variables ou de paramètres qui se chevauchent.

**Distinction entre variables locales et attributs** : Si une méthode a un paramètre ou une variable locale portant le même nom qu'un attribut de la classe, this permet de distinguer l'attribut de la classe de la variable locale.

**Appel de constructeurs** : Dans certains langages comme Java, this peut être utilisé pour appeler un autre constructeur de la même classe.

**Retourner l'instance courante** : this peut être utilisé pour retourner l'instance courante d'une classe, ce qui est utile pour l'enchaînement de méthodes.

```java
public class Voiture {
    private String marque;
    private String modele;

    // Constructeur
    public Voiture(String marque, String modele) {
        this.marque = marque;  // this.marque fait référence à l'attribut de la classe
        this.modele = modele;  // this.modele fait référence à l'attribut de la classe
    }

    // Méthode pour afficher les détails de la voiture
    public void afficherDetails() {
        System.out.println("Marque: " + this.marque + ", Modèle: " + this.modele);
    }
}
```

Dans cet exemple, this.marque et this.modele font référence aux attributs de l'instance actuelle de la classe Voiture. Cela permet de distinguer les paramètres du constructeur des attributs de la classe.
