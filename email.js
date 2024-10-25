class EmailSenderService {
  constructor(M, O, R) {
    this.message = M;
    this.ownerMessage = O;
    this.receiverMessage = R;
  }

  setMessage(M) {
    this.message = M;
  }

  setOwnerMessage(O) {
    this.ownerMessage = O;
  }

  setReceiverMessage(R) {
    this.receiverMessage = R;
  }

  mailIsValid() {
    return (
      this.messageIsValid() &&
      this.ownerMessageIsValid() &&
      this.receiverMessageIsValid()
    );
  }

  messageIsValid() {
    return this.message.length > 0;
  }

  ownerMessageIsValid() {
    return this.ownerMessage.length > 0;
  }

  receiverMessageIsValid() {
    return this.receiverMessage.length > 0;
  }
}

module.exports = EmailSenderService;
