class GuessingGame {
    constructor() {}

    // this method accepts min and max value of range of number to guess
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    // this method returns solution candidate (you make an assumption based on range and previous assumptions)
    guess() {
        this.candidate = Math.ceil((this.min + this.max) / 2);
        return this.candidate;
    }

    // this method is called if prev call of guess() returned number which is greater than answer
    lower() {
        this.max = this.candidate;
    }

    // this method is called if prev call of guess() returned number which is lower than answer
    greater() {
        this.min = this.candidate;
    }
}

module.exports = GuessingGame;
