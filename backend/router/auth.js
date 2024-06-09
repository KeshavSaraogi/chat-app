const validate = require('../validators');
const router = require('express').Router();
const { login, register } = require('../controllers/authController');
const { rules: loginRules } = require('../validators/auth/login');
const { rules: registerationRules } = require('../validators/auth/register');

router.post('/login', [loginRules, validate.validate], login);
router.post('/register', [registerationRules, validate.validate], register);

module.exports = router;
