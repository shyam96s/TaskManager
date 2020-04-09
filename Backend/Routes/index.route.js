const express = require('express');
const router = express.Router();
const ctrl = require('../Controller/controller');

router.post('/register', ctrl.register);
module.exports= router;