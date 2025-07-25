const Employee = require("../models/designation");

exports.addDesignation = async (req, res) => {
  try {
    const newDesignation = newDesignation(req.body);
    await newDesignation.save();
    res.status(201).json({ message: "Employee added successfully", designation: newDesignation });
  } catch (error) {
    console.error("❌ Error adding Designation:", error);
    res.status(500).json({ error: "Failed to add Designation" });
  }
};

exports.getDesignation = async (req, res) => {
  try {
    const Designation = await Designation.find();
    res.status(200).json(Designation);
  } catch (err) {
    res.status(500).json({ message: "Error fetching Designation", error: err });
  }
};

