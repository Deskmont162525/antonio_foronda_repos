const express = require("express");
const getCategory = require("../middlewares/getCategoryMiddleware");
const router = express.Router();
const categorySchema = require("../models/categoryModel");

// Create a category
router.post("/category", async (req, res) => {
  try {
    const newCategory = new categorySchema(req.body);
    const result = await newCategory.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read all categories
router.get("/category", async (req, res) => {
  try {
    const categories = await categorySchema
      .find()
      .populate("products", "name price rating");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read a category by ID
router.get("/category/:id", getCategory, (req, res) => {
  res.json(res.category);
});

// Update a category
router.put("/category/:id", getCategory, async (req, res) => {
  if (req.body.name != null) {
    res.category.name = req.body.name;
  }
  if (req.body.description != null) {
    res.category.description = req.body.description;
  }
  try {
    const updatedCategory = await res.category.save();
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a category
router.delete("/category/:id", getCategory, async (req, res) => {
    try {
      if (!res.category) {
        return res.status(404).json({ message: "Category not found" });
      }
  
      await res.category.deleteOne();
      res.json({ message: "Category deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



module.exports = router;
