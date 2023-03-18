const categorySchema = require("../models/categoryModel");


// Middleware function to get a category by ID
const getCategory = async (req, res, next) => {
    try {
      const category = await categorySchema
        .findById(req.params.id)
        .populate("products", "name price rating");
      if (category == null) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.category = category;
      next();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  module.exports = getCategory;