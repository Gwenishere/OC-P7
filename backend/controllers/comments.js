const models = require('../models'); // j'appelle tout ?
const CommentManager = require('../models/manager/commentManager');
const db = require('../config/db');
const mysql = require('mysql'); // installé
const jwt = require('jsonwebtoken');

const commentManager = new CommentManager();

/**TODO: finir la séquence*/
exports.writeComment = (req, res, next) => {
  let comment_Id = req.params.user.comment_Id;
  let user_id = req.body.user.user_id;
  let content = req.body.user.content;
  let sqlInsert = [comment_Id, user_id, content];
  commentManager.writeComment(sqlInsert)
    .then((response) => {
        res.status(201).json(JSON.stringify(response));
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json(JSON.stringify(response));
    })
}

exports.getComments = (req, res, next) => {
  let comment_Id = req.params.user.comment_Id;
  let sqlInsert = [comment_Id];
  commentManager.getComments(sqlInsert)
  .then((response) => {
      res.status(201).json(JSON.stringify(response));
  })
}

exports.deleteOneComment = (req, res, next) => {
    
}