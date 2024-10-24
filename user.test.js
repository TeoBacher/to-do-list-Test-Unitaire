const User = require("./user");

describe("User", () => {
  test("test all true", () => {
    const user = new User(
      "Mi",
      "Jean",
      "azed@hotmail.com",
      new Date(2000, 1, 1)
    );
    expect(user.isValid()).toBe(true);
  });

  test("test bad date", () => {
    const user = new User("Mi", "Jean", "azed@gmail.com", new Date(2015, 1, 1));
    expect(user.isValid()).toBe(false);
  });

  test("test bad mail", () => {
    const user = new User("Mi", "Jean", "invalid-", new Date(2000, 1, 1));
    expect(user.isValid()).toBe(false);
  });

  test("test bad firstname", () => {
    const user = new User("0", "Jean", "azed@zaaz.com", new Date(2000, 1, 1));
    expect(user.isValid()).toBe(false);
  });

  test("test bad lastname", () => {
    const user = new User("rie", "", "azed@za!8z.com", new Date(2000, 1, 1));
    expect(user.isValid()).toBe(false);
  });
});
