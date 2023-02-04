const jwt = require('jsonwebtoken');

const secret = 'secretkey';

const generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    throw new Error('Token is not valid');
  }
};

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
