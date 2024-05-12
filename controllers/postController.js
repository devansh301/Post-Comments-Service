const Post = require("../models/post");

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = new Post({ title, content });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("comments");
    res.status(201).json(posts);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
}

exports.getPostById = async (req, res) => {
  try {
    const posts = await Post.findById(req.params.postId).populate("comments");
    res.status(201).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.findByIdAndUpdate(req.params.postId, { title, content });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.postId);
    res.status(201).json({ message: "Post is Deleted"});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
