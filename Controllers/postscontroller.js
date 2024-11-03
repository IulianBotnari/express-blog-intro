const posts = require("../Data/post.js")

function getPosts(req, res) {
    res.json(posts)
}

module.exports = {
    getPosts
}