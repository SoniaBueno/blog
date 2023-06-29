import { Router } from "express";
import {
  getPost,
  createPost,
  editPost,
  deletePost
} from "../controllers/posts.controller.js";

const router = Router();

router.get("/home", getAllPosts);
router.get("/post/id", getPost);
router.patch("/post/id", editPost);
router.delete("/post/id", deletePost);
router.post("/new", createPost);

export default router;
