const express = require('express');
const router = express.Router();

const controller = require('../controllers/users.controller');
const auth = require('../middlwares/auth.middleware');
const validate = require('../middlwares/validation.middleware');
const createUserSheme = require('../validation-shemes/create-user.sheme');
const updateUserSheme = require('../validation-shemes/update-user.sheme');

router
  .get('/', controller.get)
  .post('/', validate(createUserSheme), controller.post)
  .post('/login', controller.login)
  .put('/:id', auth(), validate(updateUserSheme), controller.put)
  .delete('/:id', controller.delete)

module.exports = router