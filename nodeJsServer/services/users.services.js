const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const users = require('../users.json');

const saltRounds = 10;

class Users {
  
  store = users

  _idGenerator() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  getUsers() {
    return this.store;
  }

  findIndex(id) {
    return this.store.findIndex(user => String(user.id) === String(id));
  }

  updateUser(updateUser, id) {
    const index = this.findIndex(id)
    const hashPassword = bcrypt.hashSync(updateUser.password, saltRounds);
    this.store[index] = {
      ...this.store[index],
      ...updateUser,
      password: hashPassword
    }
    
    fs.writeFileSync("./users.json", JSON.stringify(this.store));

    return this.store;
  }

  createUser(user) {
    const hashPassword = bcrypt.hashSync(user.password, saltRounds);
    this.store.push({
      id: this._idGenerator(),
      ...user,
      password: hashPassword,
      role: "user"
    })
     
    fs.writeFileSync("./users.json", JSON.stringify(this.store));
    
    return this.store
  }

  deleteUser(id) { 
    if(this.store.length) {
      const index = this.findIndex(id)
      if (-1 < index) {
        this.store.splice(index, 1)
        return this.store;
      } else {
        return "Такого пользователя нет";
      }
    } else {
      return "Users пустой";
    }
  }

  login = (login, password) => {    
    let user = this.store.find( user => user.login === login)
    
    if(user) {
      if (bcrypt.compareSync(password, user.password)) {
          const success = jwt.sign({login, type: 'access'}, 'secret');
          console.log(user, success);
          return {user, success}
      } else {
          return "неверный пароль";
      }
    } else {
        return "Такого пользователя нет";
    }
  }
}

module.exports = new Users