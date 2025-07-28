const Employee = require("../models/Employee");

exports.addEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json({ message: "Employee added successfully", employee: newEmployee });
  } catch (error) {
    console.error("❌ Error adding employee:", error);
    res.status(500).json({ error: "Failed to add employee" });
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const {
      name,
      email,
      jobTitle,
      phone,
      country,
      gender,
      dojFrom,
      dojTo,
      hoursPerWeek,
      salary,
      taxDeductions,
      employmentType,
    } = req.query;

    const query = {};

    if (name) {
      query.name = { $regex: name, $options: "i" }; // case-insensitive partial match
    }

    if (email) {
      query.email = { $regex: email, $options: "i" };
    }

    if (jobTitle) {
      query.jobTitle = jobTitle;
    }

    if (phone) {
      query.phone = { $regex: phone, $options: "i" };
    }

    if (country) {
      query.country = country;
    }

    if (gender) {
      query.gender = gender;
    }

    if (employmentType) {
      query.employmentType = employmentType;
    }

    if (dojFrom && dojTo) {
      query.dateOfJoining = {
        $gte: new Date(dojFrom),
        $lte: new Date(dojTo),
      };
    }

    if (hoursPerWeek) {
      query.hoursPerWeek = { $lte: parseInt(hoursPerWeek) };
    }

    if (salary) {
      query.salary = { $lte: parseInt(salary) };
    }

    if (taxDeductions) {
      query.taxDeductions = { $lte: parseInt(taxDeductions) };
    }

    const employees = await Employee.find(query);

    res.status(200).json(employees);
  } catch (err) {
    console.error("❌ Error applying filters:", err);
    res.status(500).json({ message: "Error fetching employees", error: err });
  }
};