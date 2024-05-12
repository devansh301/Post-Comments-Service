const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/:postId/comments", commentController.createComment);
router.get("/:postId/comments", commentController.getAllComments);
router.get("/:postId/comments/:commentId", commentController.getCommentById);
router.put("/:postId/comments/:commentId", commentController.updateComment);
router.delete("/:postId/comments/:commentId", commentController.deleteComment);

module.exports = router;
