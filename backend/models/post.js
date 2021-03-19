const express = require("express");
const sql = require('../config/db');

//model db pour un post, user_id créé par mysql
class Post {
    constructor(post) {
      this.title = post.title;
      this.description = post.description;
      this.attachment = post.attachment;
    }
}

module.exports = Post;