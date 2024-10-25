const User = require("./user");

class Todo {
  constructor(I, U) {
    this.item = I;
    this.user = new User(
      U.firstName,
      U.lastName,
      U.email,
      U.birthDate,
      U.password
    );
    // this.mail = false;
  }

  setItem(I) {
    this.item = I;
  }

  setUser(U) {
    this.user = new User(
      U.firstName,
      U.lastName,
      U.email,
      U.birthDate,
      U.password
    );
  }

  isValidToDo() {
    return this.userIsValid() && this.itemIsValid();
  }

  itemIsValid() {
    return this.item >= 0 && this.item <= 10;
  }

  userIsValid() {
    return this.user.isValid();
  }

  sendMail() {
    if (this.item === 8) {
      this.mail = true;
    }
  }

  save() {
    if (this.userIsValid) {
      return true;
    }
    return false;
  }
}

module.exports = Todo;
