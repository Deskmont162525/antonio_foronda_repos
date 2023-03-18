const express = require('express');
const router = express.Router();
const roleSchema = require('../models/rolModel');

// Obtener todos los roles
router.get('/rol', (req, res) => {
    roleSchema.find()
    .then(roles => {
      res.status(200).json(roles);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

// Obtener un rol por id
router.get('/rol/:id', (req, res) => {
    roleSchema.findById(req.params.id)
    .then(role => {
      if (role) {
        res.status(200).json(role);
      } else {
        res.status(404).json({ message: 'Rol no encontrado' });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

// Crear un rol
router.post('/rol', (req, res) => {
    const role = new roleSchema({
      name: req.body.name,
      permissions: req.body.permissions
    });
  
    role.save()
      .then(result => {
        res.status(201).json({
          message: 'Rol creado con éxito',
          result: result
        });
      })
      .catch(error => {
        if (error.code === 11000) {            
          res.status(400).json({ message: 'Ya existe un rol con ese nombre' });         
        } else {
          res.status(500).json({ error });
        }
      });
  });

// Actualizar un rol por id
router.put('/rol/:id', (req, res) => {
    roleSchema.findById(req.params.id)
    .then(role => {
      if (role) {
        role.name = req.body.name;
        role.description = req.body.description;

        role.save()
          .then(result => {
            res.status(200).json({
              message: 'Rol actualizado con éxito',
              result: result
            });
          })
          .catch(error => {
            res.status(500).json({ error });
          });
      } else {
        res.status(404).json({ message: 'Rol no encontrado' });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

// Eliminar un rol por id
router.delete('/rol/:id', (req, res) => {
  Role.findByIdAndRemove(req.params.id)
    .then(result => {
      if (result) {
        res.status(200).json({
          message: 'Rol eliminado con éxito',
          result: result
        });
      } else {
        res.status(404).json({ message: 'Rol no encontrado' });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

module.exports = router;
