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
    this.creationTime = null;
    this.lastAddItem = 0;
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

  createNewItem() {
    let now = new Date();
    let timeDifference = (now - this.creationTime) / (1000 * 60);

    if (timeDifference >= 30) {
      this.lastAddItem = 0;
      this.lastAddItem++;
    } else if (this.lastAddItem === 2) {
      return false;
    }

    this.creationTime = now;

    return true;
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
