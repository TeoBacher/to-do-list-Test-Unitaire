class EmailSenderService {
  constructor(M, O, R) {
    this.message = M;
    this.ownerMessage = O;
    this.receiverMessage = R;
  }
}

module.exports = EmailSenderService;
