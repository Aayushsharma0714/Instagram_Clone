const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage( )})
const identifyUser = require("../middlewares/auth.middleware")

/**
 * /api/posts  = api
 */

// API to create post by current user
postRouter.post("/", upload.single("image") ,identifyUser, postController.createPostController)


// API to get all posts of current user
postRouter.get("/",identifyUser ,postController.getPostController)

// API to get details of particular post by its created user , otherwise throw error "Not authorised to access posts"

// GET /api/posts/details/:postid

postRouter.get("/details/:postId" ,identifyUser, postController.getPostDetailsController)

/**
 * @route POST /api/posts/like/:postId
 * @description like a post by post id
 */
postRouter.post("/like/:postId" , identifyUser , postController.likePostController)


/**
 * @route GET /api/posts/feed
 * @description get all  posts created in the DB
 * @access private
 */


postRouter.get("/feed" , identifyUser , postController.getFeedController)

module.exports = postRouter