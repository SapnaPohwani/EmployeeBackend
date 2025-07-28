const Designation = require("../models/designation");

exports.addDesignation = async (req, res) => {
  try {
    console.log("📥 Incoming body =>", req.body);
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Missing title or description" });
    }

    const newDesignation = new Designation({ title, description });
    await newDesignation.save();

    res.status(201).json({ message: "Designation saved", newDesignation });
  } catch (error) {
    console.error("🔥 Internal server error in addDesignation:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getDesignation = async (req, res) => {
  try {
    const { title} = req.query;
    const query = {};

    if (title) {
      query.title = { $regex: title, $options: "i" }; 
    }


    const allDesignations = await Designation.find(query);
    res.status(200).json(allDesignations);
  } catch (err) {
    res.status(500).json({ message: "Error fetching Designation", error: err });
  }
};
