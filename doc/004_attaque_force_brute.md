## Vulnérabilités du site
Une menace courante pour les développeurs Web est une attaque par simulation de mot de passe connue sous le nom d'attaque par force brute. Une attaque par force brute est une tentative de découvrir un mot de passe en essayant systématiquement toutes les combinaisons possibles de lettres, de chiffres et de symboles jusqu'à ce que vous découvriez la combinaison correcte qui fonctionne.

## Nodejs et la limitation des tentatives de connexion
Une technique simple et puissante consiste à limiter les tentatives d'autorisation en utilisant deux métriques:
Le premier est le nombre de tentatives infructueuses consécutives par le même ID / nom unique d'utilisateur et la même adresse IP.
Le deuxième est le nombre de tentatives infructueuses à partir d'une adresse IP sur une longue période de temps. Par exemple, bloquez une adresse IP si elle fait 100 tentatives infructueuses en une journée.