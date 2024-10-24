class Item {
    constructor(N,C,D) {
        this.name = N;
        this.content =C;
        this.date = D;
    }

    nameIsValid () {
        return this.name != null;
    }

    contentIsValid(){
        return this.content.length <= 1000;
    }

    dateIsValid(currentDate){
        const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?$/;
        return regex.test(dateTimeString);
    }
}