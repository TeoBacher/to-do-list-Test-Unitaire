const User = require("./user");

describe("User", () => {
  let user;

  beforeEach(() => {
    user = new User(
      "Loris",
      "Laurenti",
      "lloris@outlook.fr",
      new Date(200, 1, 1),
      "Password123"
    );
  });

  test("test all true", () => {
    expect(user.isValid()).toBe(true);
  });

  test("test bad date", () => {
    user.setBirthDate(new Date(2020, 1, 1));
    expect(user.isValid()).toBe(false);
  });

  test("test bad mail", () => {
    user.setMail("invalid-mail");
    expect(user.isValid()).toBe(false);
  });

  test("test bad firstname", () => {
    user.setFirstName("123");
    expect(user.isValid()).toBe(false);
  });

  test("test bad lastname", () => {
    user.setLastName("");
    expect(user.isValid()).toBe(false);
  });

  test("test bad pwd", () => {
    user.setPassword("password");
    expect(user.isValid()).toBe(false);
  });
});
