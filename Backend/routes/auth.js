// const express = require('express');
// const bcrypt = require('bcryptjs');
// const User = require('../models/user');

// const router = express.Router();

// // Middleware for checking if user is logged in
// const isAuthenticated = (req, res, next) => {
//     if (req.session.user) {
//         next();
//     } else {
//         res.status(401).json({ message: 'Not authenticated' });
//     }
// };

// // Register route
// router.post('/register', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const existingUser = await User.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         const newUser = new User({ username, password });
//         await newUser.save();
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// // Login route
// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         // Store user info in session
//         req.session.user = { id: user._id, username: user.username };
//         res.status(200).json({ message: 'Login successful', user: req.session.user });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// // Logout route
// router.post('/logout', (req, res) => {
//     req.session.destroy(() => {
//         res.status(200).json({ message: 'Logged out successfully' });
//     });
// });

// // Protected route
// router.get('/profile', isAuthenticated, (req, res) => {
//     res.status(200).json({ message: `Welcome, ${req.session.user.username}` });
// });

// module.exports = router;
