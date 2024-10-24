const User = require("./user");

class ToDoList {
  constructor(I, U) {
    this.item = I;
    this.user = U;
  }

  setItem(I) {
    this.item = I;
  }

  setUser(U) {
    this.user = U;
  }

  isValidToDo() {
    return this.userIsValid();
  }

  itemIsValid() {
    // code...
  }

  userIsValid() {
    return this.user.isValid();
  }
}
