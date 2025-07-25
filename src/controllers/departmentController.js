const Department = require("../models/department");

exports.addDepartment = async (req, res) => {
  try {
    console.log("📥 Incoming body =>", req.body); // ADD THIS

    const { department } = req.body;

    if (!department) {
      return res.status(400).json({ message: "Missing department" });
    }

    const newDepartment = new Department({ department });
    await newDepartment.save();

    res.status(201).json({ message: "Department saved", newDepartment });
  } catch (error) {
    console.error("🔥 Internal server error in addDepartment:", error); // ADD THIS
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getDepartment = async (req, res) => {
  try {
    const allDepartments = await Department.find(); // Don't redefine `Designation`
    res.status(200).json(allDepartments);
  } catch (err) {
    res.status(500).json({ message: "Error fetching Department", error: err });
  }
};

