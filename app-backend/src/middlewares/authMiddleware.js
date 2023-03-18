const jwt = require('jsonwebtoken');
const userSchema = require('../models/userModel');

const authMiddleware = (req, res, next) => {
  const token = req?.header('Authorization')?.replace('Bearer ', '');

  try {
    const decodedToken = token ? jwt.verify(token, 'mysecretpassword-soy-el-mejor') : null;
    if (!decodedToken) {
      throw new Error();
    }
    const userId = decodedToken.id;
    userSchema.findOne({ _id: userId, 'tokens.token': token })
      .then((user) => {
        if (!user) {
          throw new Error();
        }
        req.user = user;
        req.token = token;
        next();
      })
      .catch((error) => {
        res.status(401).send({ error: 'Not authorized to access this resource' });
      });
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to access this resource' });
  }
}

module.exports = authMiddleware;
