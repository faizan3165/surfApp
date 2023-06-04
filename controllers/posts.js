import Post from "../models/post.js";

export const getPosts = async (req, res, next) => {
  let posts = await Post.find({});
  res.render("posts/index", { posts });
};

export const newPost = (req, res, next) => {
  res.render("posts/new");
};

export const createPost = async (req, res, next) => {
  let newPost = await Post.create(req.body.post);
  res.redirect(`/posts/${newPost.id}`);
};

export const showPost = async (req, res, next) => {
  const { id } = req.params;

  let post = await Post.findById(id);
  res.render("posts/show", { post });
};

export const editPost = async (req, res, next) => {
  const { id } = req.params;

  let post = await Post.findById(id);
  res.render("posts/edit", { post });
};

export const updatePost = async (req, res, next) => {
  const { id } = req.params;
  const { post } = req.body;

  const updatedPost = await Post.findByIdAndUpdate(id, post);

  res.redirect(`/posts/${updatedPost.id}`);
};

export const deletePost = async (req, res, next) => {
  const { id } = req.params;
  await Post.findByIdAndRemove(id);

  res.redirect("/posts");
};