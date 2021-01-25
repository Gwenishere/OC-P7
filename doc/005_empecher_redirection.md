## Vulnérabilités du site
Les redirections qui ne valident pas l'entrée de l'utilisateur peuvent permettre aux attaquants de lancer des escroqueries par hameçonnage, de voler les informations d'identification de l'utilisateur et d'exécuter d'autres actions malveillantes.

## Nodejs, Reactjs et les redirections
Exemple Reactjs
function App3({userInput}) {
  return (
    <Route exact path="/">
// ruleid: react-router-redirect
      {loggedIn ? <Redirect to={userInput} /> : <PublicHomePage />}
    </Route>
  );
}
Nous pouvons protéger les pages privées avec react-router 