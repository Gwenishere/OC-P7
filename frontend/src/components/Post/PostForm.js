import React, { useState, useRef } from 'react';
import Axios from 'axios';


import "./PostForm.css";
import HeaderSite from '../Header/HeaderSite';

const Post =(props) => {

    let [title , setTitle] = useState('');
    let [description , setDescription] = useState('');
    let [file , setFile] = useState('');
    const el = useRef(); // accesing input element

    const handleChange = e => {
      const file = e.target.files[0]; // accessing file
      console.log(file);
      setFile(file); // storing file
    };
    
  const publish = () => {
    const formData = new FormData();
    formData.append("file", file); // appending file
    Axios.post('http://localhost:3000/user/post', {
      post: {
      title: title,
      description: description,
      file: file
      }
    }).then((response)=>{
        window.location.assign('/posts'); 
        }).catch((err)=>{
          console.log(err);
    });
  };
   
    return (
      <div>
        <HeaderSite/>
        <div className="post">
            <div className="post_top">
             <div className="post_topInfo">
               <h1>Discutons, échangeons</h1>
              <h2 className="accueil">Bonjour{props.name}, partagez ici vos idées ou passions</h2>
             </div>
            </div>
            <form className="post-form" method="post">
                <div className="col-md-5 mx-auto">
                  <img src={props.profilePic} className="post_avatar" alt=""/>
                  <label htmlFor="title">Titre</label>
                  <input
                  className="form-control col-12 rounded animated"        
                  id="title"
                  name="title"
                  placeholder="Titre"
                  required={true}
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  />
                  
								<label htmlFor="description">Votre publication...</label>
                  <textarea
                  className="form-control col-12 rounded animated"
                  formcontrolname="description"
                  id="description"
                  name="description"
                  placeholder="Que voulez-vous dire ?"
                  required={true}
                  rows="5"
                  type="textarea"
                  onChange={(e) => {
                    setDescription(e.target.value);
                }}
                  >    
                  </textarea>
                  <div className="form-group">
                  <label className="custom-file-upload" htmlFor="picture" />
                  <input
                  accept="image/*"
                  type="file"
                  ref={el}
                  onChange={handleChange} />
                  <div className="details">
                  <p>nom du fichier: {file.name}</p>
                  <p>type d'image téléchargée: {file.type}</p>
                  <p><strong>Formats supportés :</strong> gif, jpg, jpeg, png</p>
                  </div>
                  <div className="button-group">
                   <button
                   type="submit"
                   className="button-post"
                   onClick={publish}
                   >
                   PUBLIER
                   </button>
                  </div>
                  </div>
                </div>
              </form>
            </div>
            </div>
    )
  
}

export default Post