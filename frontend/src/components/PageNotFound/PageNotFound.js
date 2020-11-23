import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    const returnBtn = () => {
        console.log('retour homepage');
    }
    return (
        <div>
         <div className="App-pagenotfound">
          <h1>
              Erreur 404 - Oops, page non trouvée
          </h1>
          <h2>
              Vous cherchez une page qui n'existe pas pour le moment.
          </h2>
          <p>
              Revenez vers le site, vous nous manquez déjà !
          </p>
          <Link to="/">
          <button type="button" className="btn btn-outline-light"onClick={returnBtn}>Je reviens !
          </button>
          </Link>
        </div>
        </div>
    )
}

export default PageNotFound