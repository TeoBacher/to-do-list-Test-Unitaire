class User {



    constructor(F, L, E, B, P) {
        this.firstName = F;
        this.lastName = L;
        this.email = E;
        this.birthDate = B;
        this.password = P;
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

        if( this.password.length < 8 || this.password.length > 40){
            return false;
        }

        return true;
    }
}

module.exports = User;
