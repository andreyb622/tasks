const express = require('express');
const router = express.Router();

const controller = require('../controllers/users.controller');
const auth = require('../middlwares/auth.middleware');

router
  .get('/', controller.get)
  .post('/', controller.post)
  .post('/login', controller.login)
  .put('/:id', auth(), controller.put)
  .delete('/:id', controller.delete)

module.exports = router