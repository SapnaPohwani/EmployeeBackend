const express = require("express");
const router = express.Router();
const {addDesignation, getDesignation} = require("../controllers/designationController")

router.post("/designation", addDesignation);
router.get("/designationlist", getDesignation);

module.exports = router;
