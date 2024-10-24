const todo = require("./to-do-list");
const Item = require('./Item');
const User = require('./user');


beforeEach(() => {
    const now = new Date(); 
    now.setMinutes(now.getMinutes() - 29);
    const item = new Item('Mi','zdekfrfjuhoiafkozjG' ,now);
    user = new User(
      "Loris",
      "Laurenti",
      "lloris@outlook.fr",
      new Date(200, 1, 1),
      "Password123"
    );
    todo = new ToDoList(item, user);
  });

test('', () => {
    todo.save = jest.fn().mockReturnValue(true);

    const result = todo.save();
    expect(result).toBe(true);  
  });