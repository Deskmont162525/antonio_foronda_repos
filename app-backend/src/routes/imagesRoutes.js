const express = require("express");
const router = express.Router();
const multer = require("multer");
const { BlobServiceClient } = require("@azure/storage-blob");
const { v1: uuidv1 } = require('uuid');
const imageSchema = require("../models/imagenModel");

const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const AZURE_STORAGE_CONTAINER_NAME = process.env.AZURE_STORAGE_CONTAINER_NAME;

const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const containerClient = blobServiceClient.getContainerClient(AZURE_STORAGE_CONTAINER_NAME);

// Configuring multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Create an image
router.post("/image", upload.single("image"), async (req, res) => {
    try {
    const blobName = `${uuidv1()}.jpg`; // Generate a unique name for the image file
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const imageData = req.file.buffer;

    // Upload the image to Azure Blob Storage
    await blockBlobClient.upload(imageData, imageData.length);
    console.log("esto envia  ",imageData, imageData.length);
    // Save image metadata to MongoDB
    const newImage = new imageSchema({
      name: req.body.name,
      description: req.body.description,
      date: new Date(),
      priority: req.body.priority,
      status: req.body.status,
      imageUrl: blockBlobClient.url,
    });

    const result = await newImage.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read all images
router.get("/image", async (req, res) => {
  try {
    const images = await imageSchema.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read an image by ID
router.get("/image/:id", async (req, res) => {
  try {
    const image = await imageSchema.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an image
router.put("/image/:id", async (req, res) => {
  try {
    const image = await imageSchema.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    image.name = req.body.name;
    image.description = req.body.description;
    image.priority = req.body.priority;
    image.status = req.body.status;

    const updatedImage = await image.save();
    res.json(updatedImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;