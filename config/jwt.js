const jwt = require('jsonwebtoken');

// Secret key use to generate and verify token
const secret = 'secretkey';

// it will generate token
const generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: '30m' });
};

// it will verify token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    throw new Error('Token is not valid');
  }
};

// defining middleware for authentication
const authenticate = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    req.user = verifyToken(token);
    next();
  } catch (err) {
    return res.status(401).json({ msg: err.message });
  }
};

module.exports = {
  secret,
  generateToken,
  verifyToken,
  authenticate
};
