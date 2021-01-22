class Users {

  // constructor (id, name, age) {
  //   this.id = id
  //   this.name = name
  //   this.age = age
  // }

  store = [
    {
      id: 1,
      name: "andrey",
      age: "13"
    },
    {
      id: 2,
      name: "Max",
      age: "20"
    }
  ]

  getUsers () {
    return this.store;
  }

  updateUser(id) {
    for(let i = 0; i < this.store.length; i++) {
      if(this.store[i].id === id.id) {
        console.log(id.id)
        this.store[i] = id
      }
    }
  }

  createUser(id, name, age) {
    this.store.push({
      id: id,
      name: name,
      age: age
    });
  }

  deleteUser(id) { 
    if(this.store.length) {
      for(let i = 0; i < this.store.length; i++) {
        if(this.store[i].id === id.id) {
          this.store.splice(i, 1)
        } else {
          return "нет такого пользователя"
        }
      }
    } else {
      return "Users пустой"
    }
  }
}

exports.users = new Users