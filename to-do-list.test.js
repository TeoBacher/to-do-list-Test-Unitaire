const Todo = require("./to-do-list");
const Item = require("./Items");
const User = require("./user");
expect.extend({
  toBeValidTodo(todo) {
    const pass = todo.isValidToDo();
    if (pass) {
      return {
        message: () => `expected todo not to be valid`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected todo to be valid`,
        pass: false,
      };
    }
  },

  toBeValidItem(item) {
    const pass = item.isValid();
  
    if (pass) {
      return {
        message: () => `expected item not to be valid`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected item to be valid`,
        pass: false,
      };
    }
  }
});

describe("TODOLIST", () => {
  let user;
  let todo;
  let item;
  let now;
  beforeEach(() => {
    now = new Date();
    now.setMinutes(now.getMinutes() - 29);
    item = new Item("Mi", "zduhoiafkozjG", now);
    user = new User(
      "Loris",
      "Laurenti",
      "lloris@outlook.fr",
      new Date(200, 1, 1),
      "Password123"
    );
    todo = new Todo(1, user);
  });
  test("todo is valid", () => {
    expect(todo).toBeValidTodo();
  });
  test("Item is valid", () => {
    expect(item.isValid()).toBe(true);
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

  test("get todo", async () => {  
    const response = await fetch('https://dummyjson.com/todos', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
  
    const data = await response.json();
  
    expect(data).toHaveProperty('todos'); 
    expect(Array.isArray(data.todos)).toBe(true); 
    expect(data.todos.length).toBeGreaterThan(0); 
  });
});
