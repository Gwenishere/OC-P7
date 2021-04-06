const express = require("express");
const sql = require("../../config/db");

//  modele db pour un post, post_id créé par mysql
//**FIXME: AJOUT DISLIKE ? */
class Post {
    constructor(post) {
      this.title = post.title;
      this.content = post.content;
      this.attachment = post.attachment;
      this.created = post.created;
      this.user_id = post.user_id;

    }
  }
  
  module.exports = Post;