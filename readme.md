# Plan d'action Todo List

## QQOQQCP

### Quoi ? 
L'exercice consiste à faire une petite application type TodoList, accessible via un navigateur.

### Qui ? 
Les apprenants, moi en tant que développeur

### Où ? 
Dans le cadre de la formation DWWM. A la fabrique d'Aulnay, où à la maison.

### Quand ? 
A partir de maintenant. Sur les plages allouées pour l'exercice, où sur les moments d'apprentissage/révision à la maison. En respectant la deadline de 1 journée. 

### Comment ? 
Via le navigateur en utilisant du HTML/CSS/JS. L'exercice va surtout porté sur la manière dont je vais réussir à relier le la partie HTML/CSS du visuel de la ToDoList avec les intéractions de l'utilisateurs pour pouvoir répondre à la demande ititiale.

### Combien ? 
Non applicable dans le cadre de la formation. Je ne dois pas passer plus de 3 jours sur le projet si toutefois je n'arrive pas à le finaliser avant la deadline.

### Pourquoi ? 
Pouvois m'exercer sur les différentes intéractions de base avec le DOM. 
Lié correctement les éléments du DOM aux actions implémenté dans mon code JS.
Appréhender un premier projet concret dans le cadre de ma formation SIMPLON.


## Etape du projet

### Grosse maille
1. Mettre en place un champ texte et un bouton d'ajout d'élément à la liste
   * Dans mon HTML un input de type texte j'ajoute un id unique
   * Dans mon HTML un bouton contenant un texte pour guider l'utilisateur j'ajoute un id unique
   * Dans mon HTML une liste non ordonnée vide (sans aucun éléments) j'ajoute un id unique
2. Récupérer le contenu du champ texte lors du clic du bouton
   * Dans mon code JS à l'aide de son id, je cible l'élément du DOM à l'aide de l'objet document
   * Dans mon code JS à l'aide de l'attribut value je récupère le contenu et le stock potentiellement dans un variable
3. Lorsque j'ai récupérer le contenu du champ texte je dois pouvoir en faire quelque chose et pouvoir ajouter un nouvelle élément dans la todolist
   * Dans mon code JS à l'aide de la variable dans laquelle j'aurai stocké la valeur de mon champs texte, je dois créé une nouvelle ligne dans ma liste non ordonnée (j'aurai au préalable stocké l'élément du DOM correspondant à ma liste non ordonnée)
   * Je vais utiliser l'attribut innerHTML pour pouvoir injecter du code dans mon élément de ma liste

Temps d'execution : 
- Réfléxion 25min
- Dev 10min


