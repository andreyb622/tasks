export class HashStorage {

  addValue(key, value) {
    this[key] = value
  }

  getValue(key) {
    return this[key] ? this[key] : false
  } 

  deleteValue(key) {
    if(this[key]) {
      delete this[key]
      return true
    } else {
      return false
    }
  }

  getKeys() {
    return Object.keys(this)
  }
} 
