const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userSchema = require("../models/userModel");
const jwt = require('jsonwebtoken');

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crea un nuevo usuario
 *     requestBody:
 *       description: Datos del usuario a crear
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error al crear el usuario
 */
router.post("/signup", (req, res, next) => {
  const { name, lastName, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      const user = userSchema({
        email: email,
        password: hash,
        name: name,
        lastName: lastName,
      });

      user
        .save()
        .then((result) => {
          console.log("Usuario creado con éxito:", result);
          res.redirect("/login");
        })
        .catch((err) => {
          console.error("Error al crear usuario:", err);
          res.redirect("/signup");
        });
    })
    .catch((err) => {
      console.error("Error al encriptar contraseña:", err);
      res.redirect("/signup");
    });
});

router.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await userSchema.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: 'Correo incorrecto' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
    const token = jwt.sign({ id: user._id }, process.env.SESSION_SECRET, { expiresIn: '1h' });
    
    user.tokens.push({ token: token }); // Agregar el nuevo token al array de tokens del usuario
    await user.save(); // Guardar el usuario actualizado en la base de datos

    res.json({ token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});


router.get("/login", (req, res) => {
  res.render("login", { message: req.flash("error") });
});

// get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .populate({
      path: "rol",
      select: "name permissions",
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .populate({
      path: "rol",
      select: "name permissions",
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastName, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      userSchema
        .updateOne(
          { _id: id },
          { $set: { name, lastName, email, password: hash } }
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    })
    .catch((err) => {
      console.error("Error al encriptar contraseña:", err);
      res.status(500).json({
        error: "Error al encriptar contraseña",
      });
    });
});
module.exports = router;
