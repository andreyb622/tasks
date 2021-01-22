const {users} = require('./users.services');
class UsersController {
  get(req, res) {
    res.send(users.getUsers())
  }
  
  post(req, res) {
    users.createUser(req.body.id, req.body.name, req.body.age)
    res.send([req.body.id, req.body.name, req.body.age])
  }

  put(req, res) {
    res.send(users.updateUser(req.body))
  }

  delete(req, res) {
    res.send(users.deleteUser(req.body))
  }


}

module.exports = new UsersController;