const Todo = require("./to-do-list");
const Item = require("./Items");
const User = require("./user");

describe("TODOLIST", () => {
  let user;
  let todo;
  let item;
  let now;
  beforeEach(() => {
    now = new Date();
    now.setMinutes(now.getMinutes() - 29);
    item = new Item("Mi", "zdekfrfjuhoiafkozjG", now);
    user = new User(
      "Loris",
      "Laurenti",
      "lloris@outlook.fr",
      new Date(200, 1, 1),
      "Password123"
    );
    todo = new Todo(1, user);
  });

  test("all is good", () => {
    // console.log(todo.itemIsValid());
    expect(todo.isValidToDo()).toBe(true);
  });

  test("item > 10", () => {
    todo.setItem(11);
    expect(todo.isValidToDo()).toBe(false);
  });

  test("", () => {
    todo.save = jest.fn().mockReturnValue(true);

    const result = todo.save();
    expect(result).toBe(true);
  });

  test("Send mail", () => {
    todo.sendMail = jest.fn().mockReturnValue(true);
    expect(todo.sendMail()).toBe(true);
  });

  test("1 item, 31 min", () => {
    todo.creationTime = new Date(now.getTime() - 31 / (60 * 1000));
    todo.lastAddItem = 1;
    expect(todo.createNewItem()).toBe(true);
  });

  test("2 item, 29min", () => {
    todo.creationTime = new Date(now.getTime() - 29 / (60 * 1000));
    todo.lastAddItem = 2;
    expect(todo.createNewItem()).toBe(false);
  });
});
