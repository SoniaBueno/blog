import { Router } from "express";
import multer from "multer";
import {
  getAllPosts,
  getPost,
  editPost,
  deletePost,
  createPost
} from "../controllers/posts.controller.js";

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.get("/posts", getAllPosts);
router.get("/posts/:id", getPost);
router.patch("/posts/:id", upload.single("file"), editPost);
router.delete("/posts/:id", deletePost);
router.post("/new", upload.single("file"), createPost);

export default router;
