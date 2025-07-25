const Designation = require("../models/designation");

exports.addDesignation = async (req, res) => {
  try {
    console.log("📥 Incoming body =>", req.body); // ADD THIS

    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Missing title or description" });
    }

    const newDesignation = new Designation({ title, description });
    await newDesignation.save();

    res.status(201).json({ message: "Designation saved", newDesignation });
  } catch (error) {
    console.error("🔥 Internal server error in addDesignation:", error); // ADD THIS
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getDesignation = async (req, res) => {
  try {
    const allDesignations = await Designation.find(); // Don't redefine `Designation`
    res.status(200).json(allDesignations);
  } catch (err) {
    res.status(500).json({ message: "Error fetching Designation", error: err });
  }
};

