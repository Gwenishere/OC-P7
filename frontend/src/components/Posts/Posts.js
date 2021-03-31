import React, {useEffect} from 'react';
import Axios from 'axios';
import "./Posts.css";
import HeaderSite from '../Header/HeaderSite';
import PostForm from '../Post/PostForm';
import InputOption from '../Input/InputOption';
import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import PanToolOutlinedIcon from '@material-ui/icons/PanToolOutlined';

function Posts (title, content, attachment) {

  /**  useEffect(() => {
        Axios.get('http://localhost:3000/user/post', {
         get: {
         title: title,
         content: content,
         attachement: attachment
         }
        }
      , [])
      .then((res) => {
        console.log(res)
      })
    }); */


    return (

            <div className="posts">
           <div className="posts_header">
               <Avatar/>
             <div className="posts_title">
                 <h3>title</h3>
                 <p>Date publication</p>
             </div>
           </div>
           <div className="posts_body">
               <p>content</p>
           </div>
           <div className="posts_attachment">
               attachment
           </div>
           <div className="posts_buttons">
            <InputOption
            Icon={ThumbUpAltOutlinedIcon}
            className="inputOption"
              color="gray"
              title="J'aime" />
            <InputOption
            Icon={ChatBubbleOutlineOutlinedIcon}
            className="inputOption"
            color="gray"
            title="Commenter" />
            <InputOption
            Icon={PanToolOutlinedIcon}
            className="inputOption"
            color="gray"
            title="Signaler" />
           </div>
        </div>
    )

}




export default Posts
