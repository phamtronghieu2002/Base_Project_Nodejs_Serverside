const express = require("express");
const Router = express.Router();
import obj from "~/db/db";
import * as homeController from "../controllers/homeController";



Router.get("/", homeController?.initHome);

module.exports = Router;
