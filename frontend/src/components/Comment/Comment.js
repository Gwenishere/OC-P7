import React, { useContext } from "react";
import "./Comment.css";
import { UserContext } from "../Context";
import {Avatar} from "@material-ui/core";
import HeaderSite from '../Header/HeaderSite';

import axios from 'axios';

function Comment (e) {

  const date = new Date(e.createdAt).toLocaleString();

    return (
        <div className="comment">
           <div className="comment_header">
             <Avatar />
             <div className="comment_info">
                 <h2>Nom</h2>
                 <p>Email</p>
             </div>
           </div>
           <div className="comment_body">
               <p>Message ici</p>
           </div>
        </div>
    )

}




export default Comment
