//Require Package
const Endpoint = require("../controllers/endpoint");
const express = require("express");
const router = express.Router();
//Set router

router.post("/add", new Endpoint().addEndpoint);
router.get("/delete/:path_id", new Endpoint().deleteEndpoint);
router.get("/show_table", new Endpoint().showEndpoint);
router.get("/", (req, res) => {
  res.render("../views/index.ejs");
});
//Export
module.exports = router;
