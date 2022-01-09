export default class Sequence {
    constructor() {
        if (this.constructor == Sequence) {
            throw new Error("Abstract class can't be instantiated.");
        }
    }

    setup() {
        throw new Error("Method 'setup()' must be implemented.");
    }
    step() {
        throw new Error("Method 'step()' must be implemented.");
    }
}
