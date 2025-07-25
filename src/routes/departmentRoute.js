const express = require("express");
const router = express.Router();
const {addDepartment, getDepartment} = require("../controllers/departmentController");

router.post("/department", addDepartment);
router.get("/departmentlist", getDepartment);

module.exports = router;
