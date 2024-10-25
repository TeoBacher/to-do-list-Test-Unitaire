const EmailSenderService = require("./email");

describe("Emial", () => {
  let email;

  beforeEach(() => {
    email = new EmailSenderService("Hello", "Hi", "Hey");
  });

  test("all is good", () => {
    expect(email.mailIsValid()).toBe(true);
  });

  test("message is empty", () => {
    email.message = "";
    expect(email.mailIsValid()).toBe(false);
  });

  test("ownerMessage is empty", () => {
    email.ownerMessage = "";
    expect(email.mailIsValid()).toBe(false);
  });

  test("receiverMessage is empty", () => {
    email.receiverMessage = "";
    expect(email.mailIsValid()).toBe(false);
  });
});
