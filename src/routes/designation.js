const express = require("express");
const router = express.Router();
const {addDesignation, getDesignation} = require("../controllers/designationController")

router.post("/add", addDesignation);
router.get("/list", getDesignation);

module.exports = router;
