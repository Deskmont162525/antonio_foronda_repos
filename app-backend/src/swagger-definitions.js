module.exports = {
  components: {
    schemas: {
      Product: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Nombre del producto',
            example: 'Camiseta'
          },
          price: {
            type: 'number',
            description: 'Precio del producto',
            example: 19.99
          },
          rating: {
            type: 'number',
            description: 'Calificación del producto',
            example: 4.5
          },
          image: {
            type: 'string',
            description: 'URL de la imagen del producto',
            example: 'https://example.com/images/camiseta.jpg'
          },
          createdBy: {
            type: 'string',
            description: 'ID del usuario creador del producto',
            example: '609d2387b522a04e802a9f1d'
          },
          categories: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Category'
            },
            description: 'Categorías a las que pertenece el producto'
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha de creación del producto',
            example: '2022-03-17T15:02:45.000Z'
          },
          status: {
            type: 'boolean',
            description: 'Estado del producto',
            example: true
          }
        }
      },
      Category: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Nombre de la categoría',
            example: 'Ropa'
          }
        }
      }
    }
  }
}


// const userSchema = {
//   User: {
//     type: "object",
//     required: ["email", "password", "name"],
//     properties: {
//       email: {
//         type: "string",
//         format: "email",
//         description: "Email del usuario",
//       },
//       password: {
//         type: "string",
//         format: "password",
//         description: "Contraseña del usuario",
//       },
//       name: {
//         type: "string",
//         description: "Nombre completo del usuario",
//       },
//     },
//     example: {
//       email: "ejemplo@ejemplo.com",
//       password: "********",
//       name: "Ejemplo Usuario",
//     },
//   },
// };

// module.exports = {
//   userSchema,
// };
