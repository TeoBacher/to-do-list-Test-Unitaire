class User {
  constructor(F, L, E, B, P) {
    this.firstName = F;
    this.lastName = L;
    this.email = E;
    this.birthDate = B;
    this.password = P;
  }

  setFirstName(F) {
    this.firstName = F;
  }

  setLastName(L) {
    this.lastName = L;
  }

  setMail(E) {
    this.email = E;
  }

  setBirthDate(B) {
    this.birthDate = B;
  }

  setPassword(P) {
    this.password = P;
  }

  isValid() {
    return (
      this.birthDateIsValid() &&
      this.MailIsValid() &&
      
  }

  isUser() {
    const regexName = /^[a-zA-Z]+$/;
    return (
      this.firstName.length > 0 &&
      this.lastName.length > 0 &&
      regexName.test(this.firstName) &&
      regexName.test(this.lastName)
    );
  }

  MDPIsValid() {
    const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/;
    return (
      this.password.length > 8 &&
      this.password.length < 40 &&
      PasswordRegex.test(this.password)
    );
  }

  MailIsValid() {
    const MailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return MailRegex.test(this.email);
  }

  birthDateIsValid() {
    const currentDate = new Date();
    return currentDate.getFullYear() - this.birthDate.getFullYear() >= 13;
  }
}

module.exports = User;
