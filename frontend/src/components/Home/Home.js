import React from 'react'; //ok

// pour rendre qqun chose sur l'écran ReactDom.render
// on mets ce que je veux envoyer sur l'écran et où je vais le faire
class Home extends React.Component
{
  render () {
    return (
    <div className="App">            
      <div className="App-header">
        <h1>Bienvenue sur votre page  !</h1>
        <h2>One Groupomania est un site de discussion interne.<br></br>
            Partagez vos passions ou loisirs, le tout dans une ambiance détendue.
        </h2>
      </div>
    </div>
    )
  }
}
export default Home