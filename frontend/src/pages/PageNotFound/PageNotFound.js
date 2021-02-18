import React from 'react';
import { Link } from 'react-router-dom';

import "./PageNotFound.css";

function PageNotFound() {
    const returnBtn = () => {
        console.log('retour homepage');
    }
    return (
        <div>
         <div className="App-pagenotfound">
            <div className="erreurmsg">
          <h1>
              Erreur 404 - Oops, page non trouvée
          </h1>
          <h2>
              Vous cherchez une page qui n'existe pas pour le moment.
          </h2>
          <p>
              Revenez vers le site, vous nous manquez déjà !
          </p>
          </div>
          <Link to="/">
          <button type="button" className="buttonreturn"onClick={returnBtn}>Je reviens !
          </button>
          </Link>
        </div>
        </div>
    )
}

export default PageNotFound