// // // // const jwt = require('jsonwebtoken');
// // // // const jwtDecode = require('jwt-decode');
// // // // const asyncHandler = require('express-async-handler');
// // // // const User = require('../models/user');

// // // // //middleware for checking user authorization
// // // // const protect = asyncHandler(async (req, res, next) => {
// // // //     let token;

// // // //     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// // // //         try {
// // // //             // Get token from header
// // // //             token = req.headers.authorization.split(' ')[1];

// // // //             // Verify token
// // // //             const decoded = jwt.verify(token, process.env.JWT_SECRET);

// // // //             // Get user from the token
// // // //             req.user = await User.findById(decoded.id).select('-password');

// // // //             next();
// // // //         } catch (error) {
// // // //             console.error(error);
// // // //             res.status(401);
// // // //             throw new Error('Not authorized, token failed');
// // // //         }
// // // //     }

// // // //     if (!token) {
// // // //         res.status(401);
// // // //         throw new Error('Not authorized, no token');
// // // //       }
// // // //     });
    
// // // //     module.exports = { protect };



// // // // const jwt = require('jsonwebtoken');
// // // // const User = require('../models/User'); // Assuming you have a User model

// // // // const protect = async (req, res, next) => {
// // // //   let token;

// // // //   if (
// // // //     req.headers.authorization &&
// // // //     req.headers.authorization.startsWith('Bearer')
// // // //   ) {
// // // //     try {
// // // //       token = req.headers.authorization.split(' ')[1];

// // // //       const decoded = jwt.verify(token, process.env.JWT_SECRET);

// // // //       req.user = await User.findById(decoded.id).select('-password');

// // // //       next();
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       res.status(401).json({ message: 'Not authorized, token failed' });
// // // //     }
// // // //   }

// // // //   if (!token) {
// // // //     res.status(401).json({ message: 'Not authorized, no token' });
// // // //   }
// // // // };



// // // const jwt = require('jsonwebtoken');
// // // const User = require('../models/user');

// // // const protect = async (req, res, next) => {
// // //   let token;

// // //   if (
// // //     req.headers.authorization &&
// // //     req.headers.authorization.startsWith('Bearer')
// // //   ) {
// // //     try {
// // //       token = req.headers.authorization.split(' ')[1]; // Get token from header
// // //       const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
// // //       req.user = await User.findById(decoded.id).select('-password'); // Get user from the token
// // //       next(); // Proceed to the next middleware
// // //     } catch (error) {
// // //       console.error(error);
// // //       res.status(401).json({ message: 'Not authorized, token failed' });
// // //     }
// // //   } else {
// // //     res.status(401).json({ message: 'Not authorized, no token' });
// // //   }
// // // };

// // // module.exports = { protect };



// // // const jwt = require('jsonwebtoken');
// // // const User = require('../models/user');

// // // const protect = async (req, res, next) => {
// // //   let token;

// // //   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// // //     try {
// // //       token = req.headers.authorization.split(' ')[1]; // Get token from header
// // //       console.log('Token:', token); // Log the token for debugging

// // //       if (!token) {
// // //         return res.status(401).json({ message: 'Not authorized, no token' });
// // //       }

// // //       const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
// // //       req.user = await User.findById(decoded.id).select('-password'); // Get user from the token

// // //       next(); // Proceed to the next middleware
// // //     } catch (error) {
// // //       console.error('JWT Verification Error:', error.message); // Log the specific error
// // //       res.status(401).json({ message: 'Not authorized, token failed' });
// // //     }
// // //   } else {
// // //     res.status(401).json({ message: 'Not authorized, no token' });
// // //   }
// // // };

// // // module.exports = { protect };



// // const jwt = require('jsonwebtoken');
// // const User = require('../models/user');
// // const asyncHandler = require('express-async-handler');

// // const protect = asyncHandler(async (req, res, next) => {
// //   let token;

// //   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
// //     try {
// //       token = req.headers.authorization.split(' ')[1];

// //       // Check if the token exists
// //       if (!token) {
// //         return res.status(401).json({ message: 'Not authorized, no token' });
// //       }

// //       // Verify token
// //       const decoded = jwt.verify(token, process.env.JWT_SECRET);

// //       // Get user from the token
// //       req.user = await User.findById(decoded.id).select('-password');

// //       next();
// //     } catch (error) {
// //       console.error('JWT Verification Error:', error.message);
// //       return res.status(401).json({ message: 'Not authorized, token failed' });
// //     }
// //   } else {
// //     return res.status(401).json({ message: 'Not authorized, no token' });
// //   }
// // });

// // module.exports = { protect };




// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
// // const asyncHandler = require('express-async-handler');

// const protect = (async (req, res, next) => {
//   let token;

//   // Check if the authorization header is present and starts with 'Bearer'
//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     try {
//       // Extract the token from the authorization header
//       token = req.headers.authorization.split(' ')[1];

//       // Verify the token with the secret key
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // Get the user from the token and attach it to the request object, excluding the password
//       req.user = await User.findById(decoded.id).select('-password');

//       // Proceed to the next middleware or route handler
//       next();
//     } catch (error) {
//       console.error('JWT Verification Error:', error.message);

//       // If there's an error with the token verification, return an unauthorized status
//       return res.status(401).json({ message: 'Not authorized, token failed' });
//     }
//   } else {
//     // If no token is found, return an unauthorized status
//     return res.status(401).json({ message: 'Not authorized, no token' });
//   }
// });

// module.exports = { protect };



// const authenticateToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];

//     if (token == null) return res.sendStatus(401);

//     jwt.verify(token, 'your_jwt_secret_key', (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.userId = user.id;
//         next();
//     });
// };





const jwt = require('jsonwebtoken');

const authenticateToken = async(req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
}

module.exports = authenticateToken;
