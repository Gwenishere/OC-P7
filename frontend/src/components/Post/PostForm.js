import React from 'react';
import { Avatar } from "@material-ui/core";
import "../../App.css";
import HeaderSite from '../Header/HeaderSite';


function Post ({profilePic, email}) {
    return (
      <div>
        <HeaderSite/>
        <div className="post">
            <div className="post_top">
             <div className="post_topInfo">
               <h1>Discutons, échangeons</h1>
              <h2 className="accueil">Bonjour{email}, partagez ici vos idées ou passions</h2>
             </div>
            </div>
            <div className="align-items-center form-group d-flex flex-column justify-content-center">
                <div>
                  <Avatar src={profilePic} className="post_avatar"/>
                  <input className="form-control col-12 rounded animated" id="title" type="textarea" placeholder="Titre"/>
                  <textarea placeholder="Que voulez-vous dire ?"  className="form-control col-12 rounded animated" id="description" rows="5" formcontrolname="description"></textarea>
                 <div className="form-group">
                 <input type="file" accept="image/*"/>
                 <button className="btnPost btn btn-primary" >➕ AJOUTER</button>
                  <button type="submit" className="btnPost btn btn-primary" >📯 PUBLIER</button>
                </div>
                </div>
              </div>
            </div>
            </div>
    )
}

export default Post