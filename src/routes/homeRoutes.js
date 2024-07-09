const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
    res.render("partials/footer")
});


module.exports = Router;
