import React from 'react';
import "./Posts.css";
import HeaderSite from '../Header/HeaderSite';
import PostForm from '../Post/PostForm';
import InputOption from '../Input/InputOption';
import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import PanToolOutlinedIcon from '@material-ui/icons/PanToolOutlined';

function Posts (title, description, file) {

/**schéma données en array 
 * posts []
 * et ensuite les éléments props en {} dans le html du return
*/
/** dans return > profile.isAdmin || profile.id === post.UserId ? DeleteIcon */

/**axios */
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
               <p>description</p>
           </div>
           <div className="posts_attachment">
               file
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
