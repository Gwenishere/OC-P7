const CommentManager = require("../models/manager/commentManager");
const db = require("../config/db");
const mysql = require("mysql"); // installé
const jwt = require("jsonwebtoken");

const commentManager = new CommentManager();

/**TODO: finir la séquence req.body.user ou sans user ? */
exports.createComment = (req, res, next) => {
  let comment_Id = req.params.user.comment_Id;
  let user_id = req.body.user.user_id;
  let content = req.body.user.content;
  let sqlInsert = [comment_Id, user_id, content];
  commentManager
    .createComment(sqlInsert)
    .then((response) => {
      res.status(201).json(JSON.stringify(response));
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(JSON.stringify(response));
    });
};

exports.getAllComments = (req, res, next) => {
  let comment_Id = req.params.user.comment_Id;
  let sqlInsert = [comment_Id];
  commentManager.getAllComments(sqlInsert).then((response) => {
    res.status(201).json(JSON.stringify(response));
  });
};

exports.deleteComment = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  const user_id = decodedToken.user_id;
  let comment_id = req.params.comment_id;
  let sqlInsert1 = [comment_id];
  let sqlInsert2 = [comment_id, user_id];
  commentManager
    .deleteComment(sqlInsert1, sqlInsert2)
    .then((response) => {
      res.status(200).json(JSON.stringify(response));
    })
    .catch((error) => {
      console.log("message de delete comment" + error);
      res.status(400).json(JSON.stringify(error));
    });
};

exports.modifyComment = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  let comment_id = req.params.comment_id;
  let content = req.body.content;
  let user_id = decodedToken.user_id;
  let sqlInsert1 = [comment_id];
  let sqlInsert2 = [comment_id, content, user_id];
  managePosts
    .modifyPost(sqlInsert1, sqlInsert2)
    .then((response) => {
      res.status(201).json(JSON.stringify(response));
    })
    .catch((error) => {
      console.log("message modifycomment:" + error);
      res.status(400).json(JSON.stringify(error));
    });
};
