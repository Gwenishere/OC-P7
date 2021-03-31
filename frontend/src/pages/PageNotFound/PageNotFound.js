import React from 'react';
import { Link } from 'react-router-dom';

import "./PageNotFound.css";
import PageNotFoundDesign from "../../uploads/Astronaut.png"

function PageNotFound() {
    const returnBtn = () => {
        console.log('retour homepage');
    }
    return (
        <div>
            <div className="App-pagenotfound">
            
                <div className="erreur_text twinkling">
               
                  <h1 className="erreur_title">Houston, nous avons un problème</h1>
                  <h2 className="erreur_subtitle">Erreur 404 - Page non trouvée</h2>
                  <Link className="link_home" to="/">
                    <button type="button" className="buttonreturn"onClick={returnBtn}>Je reviens !
                    </button>
                  </Link>
                </div>
                <div className="erreur_design">
                <div class="meteor-1"></div>
                <div class="meteor-2"></div>
                <div class="meteor-3"></div>
                <div class="meteor-4"></div>
                <div class="meteor-5"></div>
                  <img src={PageNotFoundDesign} alt="astronaute" />
                </div>
            </div>      
        </div>
    )
}
 
export default PageNotFound