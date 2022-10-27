//Require Package
const Endpoint = require("../controllers/endpoint");
const express = require("express");
const router = express.Router();
//Set router
//Add Data
router.post("/add", new Endpoint().addEndpoint);
//Delete Data
router.get("/delete/:path_id", new Endpoint().deleteEndpoint);
//show update before edit
router.get("/show_update/:path_id", new Endpoint().show_updateEndpoint);
//update
router.get("/update/:path_id",new Endpoint().updateEndpoint);
//show data
router.get("/show_table", new Endpoint().showEndpoint);
//main page
router.get("/", (req, res) => {
  res.render("../views/index.ejs");
});

//Export
module.exports = router;
