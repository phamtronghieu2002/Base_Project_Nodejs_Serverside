const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
    res.render("home")
});
Router.get("/contact", (req, res) => {
    res.render("contact")
});
Router.get("/news", (req, res) => {
    res.render("news")
});
Router.get("/news-detail", (req, res) => {
    res.render("news-detail")
});


module.exports = Router;
