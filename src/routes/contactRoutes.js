const express = require("express");
const Router = express.Router();

Router.get("/contact", (req, res) => {
    res.render("contact")
});

module.exports = Router;
