/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';
import Axios from 'axios';
import SearchIcon from "@material-ui/icons/Search";
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';

import "./PostForm.css";
import HeaderSite from '../Header/HeaderSite';
import InputOption from '../Input/InputOption';
import Posts from '../Posts/Posts';

const Post =(title, content, attachment, profilePic) => {

    const [posts, setPosts] = useState([]);
   
    useEffect(() => {
      Axios.get('http://localhost:3000/post/getallposts', {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    , [])
      .then((res) => {
        console.log(res) /**TODO: res headers si oui affiche console.log, puis il faudra convertir en json ou bien direct setPosts */
      })
      .catch((err) => {
        console.error(err)
      })
    });

    const elAttachment = useRef(); // accès au input element
    const elContent = useRef(); //



    
  const publish = e => {
    e.preventDefault();  
    Axios.post('http://localhost:3000/post/createpost', {
      post : {
        title: e.target.title,
        content: e.target.content,
        attachment: e.target.attachment,
      }
    })
    
  };
  
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
                  <img src={profilePic} className="post_avatar" alt=""/>
                  <label htmlFor="title" className="post_title"></label>
                  <input
                  className="form_inputtitle"        
                  id="title"
                  name="title"
                  placeholder="Donnez un titre"
                  required={true}
                  ref={elContent}
                  type="text"
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
                  name="file"
                  aria-label="File browser image"
                  ref={elAttachment}
                  />
                    <span className="file-custom"></span>
                  </label>
                  <div className="details">
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
              <Post 
              title={title}
              content={content}
              attachment={attachment}/>
            })}
            </div>
    )
  
}

export default Post