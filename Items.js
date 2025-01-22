class Item {
  constructor(N, C, D) {
    this.name = N;
    this.content = C;
    this.date = D;
  }

  isValid() {
    return this.nameIsValid() && this.contentIsValid() && this.dateIsValid();
  }

  nameIsValid() {
    return this.name.trim() !== "";
  }

  contentIsValid() {
    return this.content.length <= 1000;
  }

  dateIsValid() {
    return !isNaN(Date.parse(this.date));
  }
}

module.exports = Item;