const express = require("express");
const sql = require("../../config/db");

//  modele db pour un commentaire, comment_id créé par mysql

class Comment {
    constructor(comment) {
      this.content = comment.content;
      this.created = comment.created;
      this.user_id = comment.user_id;
      this.post_id = comment.post_id;
    }
  }
  
  module.exports = Comment;