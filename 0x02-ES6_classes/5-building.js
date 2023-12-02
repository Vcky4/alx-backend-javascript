export default class Building {
    constructor(sqft) {
        if (new.target === Building) {
            throw new Error('Abstract class Building cannot be instantiated directly');
        }
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}
