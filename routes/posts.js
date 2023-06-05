import { Router } from "express";
import multer from "multer";

// controllers
import {
  getPosts,
  newPost,
  createPost,
  showPost,
  editPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

// middlewares
import { asyncErrorHandler } from "../middlewares/index.js";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.get("/", asyncErrorHandler(getPosts));

router.get("/new", newPost);

router.post("/", upload.array("images", 4), asyncErrorHandler(createPost));

router.get("/:id", asyncErrorHandler(showPost));

router.get("/:id/edit", asyncErrorHandler(editPost));

router.put("/:id", asyncErrorHandler(updatePost));

router.delete("/:id", asyncErrorHandler(deletePost));

export default router;
