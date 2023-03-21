const jwt = require('jsonwebtoken');
const userSchema = require('../models/userModel');

const authMiddleware = (req, res, next) => {
  const token = req?.header('Authorization')?.replace('Bearer ', '');
  
  try {
    const decodedToken = token ? jwt.verify(token, process.env.SESSION_SECRET) : null;
    if (!decodedToken) {
      throw new Error();
    }
    const userId = decodedToken.id.id;
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
        res.status(401).send({ error: 'Not authorized to access this resource cath interno' });
      });
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to access this resource cath externo' });
  }
}

module.exports = authMiddleware;
