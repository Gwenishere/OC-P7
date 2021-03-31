import React from 'react'; //ok
import Header from '../../components/Header/Header';
import Homedesign from '../../uploads/blog.png';
import "./Home.css"


// pour rendre qqun chose sur l'écran ReactDom.render
// on mets ce que je veux envoyer sur l'écran et où je vais le faire
class Home extends React.Component
{
  render () {
    return (
    <div className="home">
      <Header/>
      <main className="home_main">      
      <div className="home_titles">
        <h1>Bienvenue sur One Groupomania</h1>
        <h2>Site de discussion interne</h2>
        <h3>Partagez vos passions, vos loisirs, vos blagues, et  bien plus encore.
          <br></br>Le tout dans une ambiance détendue.
        </h3>
      </div>
      <div className="home_design">
       <img src={Homedesign} alt="femme ordinateur" />
      </div>
      </main>
    </div>
    )
  }
}
export default Home