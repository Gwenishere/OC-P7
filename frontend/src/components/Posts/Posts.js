import React from 'react';
import "./Posts.css";
import HeaderSite from '../Header/HeaderSite';
import PostForm from '../Post/PostForm';

function Posts (props) {

/**schéma données en array 
 * posts []
*/
/** dans return > profile.isAdmin || profile.id === post.UserId ? DeleteIcon */

/**axios */
    return (
        <div>
            <HeaderSite/>

            <h1>Les derniers posts</h1>
            <div className="post-grid">
             <p>Lorem ipsum dolor sit amet, consectetur</p>
             <p>Lorem ipsum dolor sit amet, consectetur</p>
             <p>Lorem ipsum dolor sit amet, consectetur</p>
             <p>Lorem ipsum dolor sit amet, consectetur</p>
             <p>Lorem ipsum dolor sit amet, consectetur</p>
             <p>Lorem ipsum dolor sit amet, consectetur</p>
             <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
        </div>
    )

}




export default Posts
