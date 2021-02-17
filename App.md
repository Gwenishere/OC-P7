Préparer les tables pour échanger le flux de données entre back et db
> phpmyadmin

Préparer tests unitaires

Organiser dossiers et fichiers en logique métier, composants

Faire une page d'accueil permettant :
s'enregistrer
se connecter
> header
> boutons

Faire une page s'enregistrer :
> lien avec page se connecter
> lien front avec back sous Nodejs
> lien back avec base de données sous my sql
> prévoir regex, bcrypt, helmet...

Faire une page se connecter :
> lien avec page d'accueil de membres
> lien front avec back sous Nodejs
> lien back avec base de données sous my sql
> prévoir regex, bcrypt...

Faire page accueil administrateur
> tableau de bord des posts signalés
> lien front vers back (consulter, supprimer)
> lien back vers base de données (get, delete)

Faire page accueil membres
> header membres permettant de cliquer sur profil, poster, se déconnecter

Faire une page post/posts type Linkedin
> titre, description, pièce jointe, timestamp par mysql
> envoyer vers back puis back vers mysql 
> les posts s'enchainent en colonne
> prévoir commentaires et signalement posts

Faire page profil utilisateur
> simple résumé des infos collectées du front vers backend
> ici il s'agit d'un get user du back pour envoyer vers front
> permettre un supprimer mon compte

