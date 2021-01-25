## Vulnérabilités du site
Les attaquants ont accès à des centaines de millions de combinaisons de noms d'utilisateur et de mots de passe valides pour le bourrage d'informations d'identification, les listes de comptes administratifs par défaut, la force brute automatisée et les outils d'attaque par dictionnaire. Les attaques de gestion de session sont bien comprises, en particulier en ce qui concerne les jetons de session non expirés.

## Nodejs et le cryptage
Les mots de passe ou les secrets (clés API) doivent être stockés à l'aide d'une fonction de hachage sécurisée + sel comme bcrypt, cela devrait être un choix préféré par rapport à son implémentation JavaScript pour des raisons de performances et de sécurité.
Utilisation de Bcrypt