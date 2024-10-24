const ToDoList = require("./to-do-list");
const User = require("./user");

describe("TODOLIST", () => {
  let user;
  let todo;
  beforeEach(() => {
    user = new User(
      "Loris",
      "Laurenti",
      "lloris@outlook.fr",
      new Date(200, 1, 1),
      "Password123"
    );
    todo = new ToDoList(1, user);
  });

  test("all is good", () => {
    // console.log(todo.itemIsValid());
    expect(todo.isValidToDo()).toBe(true);
  });
});
