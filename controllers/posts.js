import cloudinary from "cloudinary";

import Post from "../models/post.js";

// ! CONTROLLER FOR INDEX ROUTE
export const getPosts = async (req, res, next) => {
  let posts = await Post.find({});
  res.render("posts/index", { posts });
};

// ! CONTROLLER TO SHOW NEW PAGE
export const newPost = (req, res, next) => {
  res.render("posts/new");
};

// ! CONTROLLER TO CREATE NEW POST
export const createPost = async (req, res, next) => {
  req.body.post.images = [];

  for (const file of req.files) {
    let image = await cloudinary.v2.uploader.upload(file.path);

    req.body.post.images.push({
      url: image.secure_url,
      public_id: image.public_id,
    });
  }

  let newPost = await Post.create(req.body.post);
  res.redirect(`/posts/${newPost.id}`);
};

// ! CONTROLLER TO SHOW THE POST'S PAGE
export const showPost = async (req, res, next) => {
  const { id } = req.params;

  let post = await Post.findById(id);
  res.render("posts/show", { post });
};

// ! CONTROLLER TO SHOW THE EDIT PAGE FOR POST
export const editPost = async (req, res, next) => {
  const { id } = req.params;

  let post = await Post.findById(id);
  res.render("posts/edit", { post });
};

//  ! CONTROLLER TO UPDATE THE POST
export const updatePost = async (req, res, next) => {
  const { id } = req.params;
  const { deleteImages } = req.body;
  const { title, description, price, location } = req.body.post;
  const myPost = await Post.findById(id);

  if (deleteImages && deleteImages.length) {
    for (const public_id of deleteImages) {
      await cloudinary.v2.uploader.destroy(public_id);

      for (const img of myPost.images) {
        if (img.public_id === public_id) {
          let i = myPost.images.indexOf(img);
          myPost.images.splice(i, 1);
        }
      }
    }
  }

  if (req.files) {
    for (const file of req.files) {
      let image = await cloudinary.v2.uploader.upload(file.path);

      myPost.images.push({
        url: image.secure_url,
        public_id: image.public_id,
      });
    }
  }

  myPost.title = title;
  myPost.description = description;
  myPost.price = price;
  myPost.location = location;

  myPost.save();
  res.redirect(`/posts/${myPost.id}`);
};

// ! CONTROLLER TO DELETE THE POST
export const deletePost = async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  for (const imgs of post.images) {
    await cloudinary.v2.uploader.destroy(imgs.public_id);
  }

  await post.deleteOne()
  res.redirect("/posts");
};
