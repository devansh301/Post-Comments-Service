const Comment = require("../models/comment");
const Post = require("../models/post");

exports.createComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    const {content} = req.body;
    const comment = new Comment({content});
    post.comments.push(comment);
    await comment.save();
    await post.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate("comments");
    res.status(201).json(post.comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCommentById = async (req, res) => {
  try {
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId);
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

exports.updateComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const { content } = req.body;
    const comment = await Comment.findByIdAndUpdate(commentId, { content });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

exports.deleteComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    await Post.findByIdAndUpdate(postId, { $pull: { comments: commentId } });
    await Comment.findByIdAndDelete(commentId);
    res.status(201).json({ message: "Comment is Deleted"})
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
