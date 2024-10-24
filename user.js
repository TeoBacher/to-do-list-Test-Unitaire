class User {
    constructor(F, L, E, B) {
        this.firstName = F;
        this.lastName = L;
        this.email = E;
        this.birthDate = B;
    }

    isValid() {
        const MailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const currentDate = new Date();
        
        if (currentDate.getFullYear() - this.birthDate.getFullYear() < 13) {
            return false;
        }

        if (!this.firstName || !this.lastName) {
            return false;
        }

        if (!MailRegex.test(this.email)) {
            return false;
        }

        return true;
    }
}

module.exports = User;
