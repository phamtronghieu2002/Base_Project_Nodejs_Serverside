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
Router.get("/solution", (req, res) => {
    res.render("solution")
});
Router.get("/policy", (req, res) => {
    res.render("policy")
});


module.exports = Router;
