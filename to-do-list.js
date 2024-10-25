const User = require("./user");
const EmailSenderService = require("./email");

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
    this.email = new EmailSenderService("message", "owner", "receiver");
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
    return this.email.mailIsValid() && this.item === 8;
  }

  save() {
    if (this.userIsValid) {
      return true;
    }
    return false;
  }
}

module.exports = Todo;
