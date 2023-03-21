const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session"); // Agregamos el módulo express-session
require("dotenv").config();
const userRoute = require("./routes/userRoutes");
const rolRoute = require("./routes/rolRoutes");
const productRoute = require("./routes/productRoutes");
const categoryRoute = require("./routes/categoryRoutes");
const imagesRoute = require("./routes/imagesRoutes");

const path = require("path");
const flash = require('connect-flash');

// swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJSDocs = require("swagger-jsdoc");
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
      title: "app-backend",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:9000/",
      },
    ],
    components: require("./swagger-definitions.js"), 
    
};
const options = {
    swaggerDefinition,    
    apis: [`${path.join(__dirname, "./routes/*.js")}`],
};

// settings
const app = express();
const port = process.env.PORT || 9000;
const swaggerSpec = swaggerJSDocs(options);

// middlewares
app.use(express.json());
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
})); // Agregamos la configuración de sesión

app.use('/api/images', imagesRoute);

app.use("/api/users", userRoute);
app.use("/api/rols", rolRoute);
app.use("/api/products", productRoute);
app.use("/api/categorys", categoryRoute);
app.use(
  "/api.doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerSpec)
);


// routes
// app.get("/", (req, res) => {
//   res.send("Soy el Mejor");
// });

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));