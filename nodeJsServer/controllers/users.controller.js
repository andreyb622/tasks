const users = require('../services/users.services');

class UsersController {

  constructor() {
    this.get = this.get.bind(this)
  }

  service = users;

  get(req, res, next) {
    res.send(this.service.getUsers())
  }
  
  post = (req, res, next) => {
    res.status(201).send(this.service.createUser(req.body))
  }

  put = (req, res, next) => {
    res.status(201).send(this.service.updateUser(req.body, req.params.id))
  }

  delete = (req, res, next) => {
    res.status(201).send(this.service.deleteUser(req.params.id))
  }

  login = (req, res) => {
    res.send(this.service.login(req.body.login, req.body.password))
  }
}

module.exports = new UsersController;