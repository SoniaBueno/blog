import { pool } from "../db.js";
import { format } from "date-fns";
import fs from "fs";

export const getPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const query =
      "SELECT picture, title, text, DATE_FORMAT(date, '%d-%m-%Y') AS date FROM posts WHERE id = " +
      postId;
    const [rows] = await pool.query(query);
    const post = rows[0];
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const editPost = async (req, res) => {
  try {
    const postData = req.body;
    let filePath;
    if (req.file != undefined) {
      filePath = "/" + req.file.filename;
    } else {
      filePath = postData.picture;
    }
    console.log(postData);
    const id = req.params.id;
    const query =
      "UPDATE posts SET picture = '" +
      filePath +
      "', title = '" +
      postData.title +
      "', text = '" +
      postData.text +
      "' WHERE id = " +
      id;
    const [rows] = await pool.query(query);
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while updating post." });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postData = req.body;
    console.log(postData);
    const id = req.params.id;
    const query = "DELETE FROM posts WHERE id = " + id;
    const [rows] = await pool.query(query);
    const imagePath = "../frontend/public" + postData.postObject.picture;
    fs.unlinkSync(imagePath);
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while deleting post." });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const query =
      "SELECT id, picture, title, text, DATE_FORMAT(date, '%d-%m-%Y') AS date FROM posts";
    const [rows] = await pool.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createPost = async (req, res) => {
  try {
    const post_date = format(new Date(), "yyyy-MM-dd HH:mm:ss");

    const filePath = "/"+ req.file.filename;

    const query =
      "INSERT INTO posts (title, picture, text, date) VALUES (?, ?, ?, ?)";
    const [rows] = await pool.query(query, [
      req.body.title,
      filePath,
      req.body.text,
      post_date,
    ]);

    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
