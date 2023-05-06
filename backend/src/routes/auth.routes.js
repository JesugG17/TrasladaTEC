const { Router } = require('express');
const { logIn } = require('../controllers/auth.controller');

const router = Router();

router.post('/login', logIn);

module.exports = router;