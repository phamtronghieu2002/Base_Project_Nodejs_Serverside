const express = require("express");
const Router = express.Router();
const productController = require("~/controllers/productControllers");

Router.get("/", productController.handleRenderProductPage);


module.exports = Router;
