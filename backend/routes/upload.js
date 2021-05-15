const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");

let routes = app => {
  router.post("/upload", uploadController.uploadFile);

  return app.use("/", router);
};

module.exports = routes;