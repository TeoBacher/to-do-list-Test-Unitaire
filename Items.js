class Item {
    constructor(N,C,D) {
        this.name = N;
        this.content =C;
        this.date = D;
    }

    isValid(){
        if(this.nameIsValid && this.contentIsValid && this.dateIsValid) {
            return true;
        }
        return false;
    }

    nameIsValid () {
        return this.name.trim() !== '';
    }

    contentIsValid(){
        return this.content.length <= 1000;
    }

    dateIsValid(currentDate){
        return !isNaN(Date.parse(this.date))
    }
}

module.exports = Item;