const express = require("express");
const router = express.Router();
const productSchema = require("../models/ProductModel");
const authMiddleware = require("../middlewares/authMiddleware");

// Obtener todos los productos

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtiene la lista de productos
 *     responses:
 *       200:
 *         description: Lista de productos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       400:
 *         description: Error al obtener la lista de productos
 */

router.get("/product", authMiddleware, (req, res) => {
  productSchema
    .find()
    .populate({
      path: "createdBy",
      select: "name lastName",
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener todos los productos del usuario

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto a buscar
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Producto no encontrado
 */

router.get("/productByUser/:id", authMiddleware, (req, res) => {
  
  const userId = req.params.id;
  productSchema
    .find({ createdBy: userId })
    .populate({
      path: "createdBy",
      select: "name lastName",
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Obtener un producto por ID
router.get("/product/:id", authMiddleware, (req, res) => {
  productSchema
    .findById(req.params.id)
    .populate({
      path: "createdBy",
      select: "name lastName",
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Crear un nuevo producto
router.post("/product", authMiddleware, (req, res) => {
  const newProduct = new productSchema({
    name: req.body.name,
    price: req.body.price,
    rating: req.body.rating,
    image: req.body.image,
    createdBy: req.body.createdBy,
    categories: req.body.categories,
  });

  newProduct
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar un producto existente
router.put("/product/:id", authMiddleware, (req, res) => {
  const updatedProduct = {
    name: req.body.name,
    price: req.body.price,
    rating: req.body.rating,
    image: req.body.image,
    createdBy: req.body.createdBy,
    categories: req.body.categories,
  };

  productSchema
    .findByIdAndUpdate(req.params.id, updatedProduct, { new: true })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar un producto existente
router.delete("/products/:id", authMiddleware, (req, res) => {
  productSchema
    .findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Producto eliminado correctamente" }))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
