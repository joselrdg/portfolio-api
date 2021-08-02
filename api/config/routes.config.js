const express = require('express');
const router = express.Router();
// const usersController = require('../controllers/users.controller')
const formController = require('../controllers/form.controller')
// const authMiddleware = require('../middlewares/auth.middleware')

// Users routes
// router.get('/', authMiddleware.isAuthenticated, usersController.user)

router.get('/', (req, res) => res.send('Home Page Route'));

router.get('/about', (req, res) => res.send('About Page Route'));

router.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

router.get('/contact', (req, res) => res.send('Contact Page Route'));


router.post('/form/contact', formController.doEmail)



module.exports = router;