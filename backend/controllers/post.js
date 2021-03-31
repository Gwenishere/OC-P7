const postManager = require("../models/manager/postsManager");
let managePosts = new postManager();

const fs = require("fs");
const jwt = require("jsonwebtoken");
const mysql = require("mysql"); // installé => models
const db = require("../config/db"); // import modele db => models

exports.createPost = (req, res, next) => {
  console.log("message de createPost");
  let title = req.body.title;
  let content = req.body.content;
  let attachment = req.body.attachment;
  let user_id = req.body.user_id;
  managePosts.createPost(sqlInsert).then((response) => {
    res.status(201).json(JSON.stringify(response));
  });
};

exports.modifyPost = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  let post_id = req.params.post_id;
  let title = req.body.title;
  let content = req.body.content;
  let attachment = req.body.attachment;
  let user_id = decodedToken.user_id;
  let sqlInsert1 = [post_id];
  let sqlInsert2 = [post_id, title, content, attachment, user_id];
  managePosts
    .modifyPost(sqlInsert1, sqlInsert2)
    .then((response) => {
      res.status(201).json(JSON.stringify(response));
    })
    .catch((error) => {
      console.log("message modifypost:" + error);
      res.status(400).json(JSON.stringify(error));
    });
};

exports.getAllPosts = (req, res, next) => {
  managePosts.getAllPosts().then((response) => {
    res.status(200).json(JSON.stringify(response));
  });
};

exports.deletePost = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  const user_id = decodedToken.user_id;
  let post_id = req.params.post_id;
  let sqlInsert1 = [post_id];
  let sqlInsert2 = [post_id, user_id];
  managePosts
    .deletePost(sqlInsert1, sqlInsert2)
    .then((response) => {
      res.status(200).json(JSON.stringify(response));
    })
    .catch((error) => {
      console.log("message de delete post" + error);
      res.status(400).json(JSON.stringify(error));
    });
};
