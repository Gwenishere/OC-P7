const models = require('../models/manager/postsManager');

const fs = require('fs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql'); // installé => models
const db = require('../config/db'); // import modele db => models 


exports.createPost = (req, res, next) => {
  console.log('message de createPost')
  let post = new Post (req.body.user);
  let user_id = req.body.user.user_id;
  let title = req.body.user.title;
  let description = req.body.user.description;
  let attachment = req.body.user.attachment;

  db.query(
    'INSERT INTO post (title, description, attachment)VALUES (?, ?, ?, NOW())'
    [title, description, attachment],
    
    ) 
  


}

exports.modifyPost = (req, res, next) => {

}

exports.getOnePost = (req, res, next) => {

}

exports.getAllPosts = (req, res, next) => {

}

exports.moderatePost = (req, res, next) => {

}

exports.deletePost = (req, res, next) => {

}