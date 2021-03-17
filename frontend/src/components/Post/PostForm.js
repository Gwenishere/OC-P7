import React, { useState, useRef, useEffect } from 'react';
import Axios from 'axios';
import SearchIcon from "@material-ui/icons/Search";
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';

import "./PostForm.css";
import HeaderSite from '../Header/HeaderSite';
import InputOption from '../Input/InputOption';
import Posts from '../Posts/Posts';

const Post =(props) => {

    const [posts, setPosts] = useState([]);
   /**FIXME: remplacer par const [posts, setPosts] */
    let [title , setTitle] = useState('');
    let [description , setDescription] = useState('');
    let [file , setFile] = useState('');

    const elFile = useRef(); // accesing input element
    const elDescription = useRef(); //


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
        window.location.assign('/post'); 
        }).catch((err)=>{
          console.log(err);
    });
  };
   
//** */ useEffect**//


    return (
      <div className="post_main">
        <HeaderSite/>
        <div className="post">
          <div className="header_search">
            <SearchIcon color="primary" fontSize="large"/>
            <input type="text" placeholder="Recherche" />
          </div>
            <form className="post-form" method="post">
                <div className="post_container">
                  <img src={props.profilePic} className="post_avatar" alt=""/>
                  <label htmlFor="title" className="post_title"></label>
                  <input
                  className="form_inputtitle"        
                  id="title"
                  name="title"
                  placeholder="Donnez un titre"
                  required={true}
                  ref={elDescription}
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  />
                  
								<label htmlFor="description"></label>
                  <textarea
                  className="form_inputdescription editor"
                  formcontrolname="description"
                  id="description"
                  name="description"
                  placeholder="Que voulez-vous dire ?"
                  required={true}
                  role="textbox"
                  onChange={(e) => {
                    setDescription(e.target.value);
                }}
                  >    
                  </textarea>
                  <div className="form-group">
                  <div className="postForm_inputOptions">
                    <InputOption className="inputOption"
                    Icon={PhotoLibraryOutlinedIcon}
                    color="#00A400"
                    title="Photo"
                    />
                    <InputOption className="inputOption"
                    Icon={EmojiPeopleOutlinedIcon}
                    color="#FA383E"
                    title="Gif"
                    />
                   </div>
                  <label className="file" htmlFor="picture">
                  <input
                  id="file"
                  accept="image/*"
                  type="file"
                  aria-label="File browser image"
                  ref={elFile}
                  onChange={handleChange} />
                    <span className="file-custom"></span>
                  </label>
                  <div className="details">
                  <p>type d'image téléchargée: {file.type}</p>
                  <p><strong>Formats supportés :</strong> gif, jpg, jpeg, png</p>
                  </div>
                  <div className="button-group">
                   <button
                   type="submit"
                   className="button-post"
                   onClick={publish}
                   >
                   Publier
                   </button>
                  </div>
                  </div>
                </div>
              </form>
            </div>
            {posts.map(() => {
              <Post />
            })}
            <Posts 
            title="Un post de folie !!!"
            description="je tente de cloner LinkedIn"
            file="une pièce jointe"
            /> 
            </div>
    )
  
}

export default Post