export default class Currency {
    constructor(code, name) {
        this._code = this._validateString(code, 'code');
        this._name = this._validateString(name, 'name');
    }

    // Getter and Setter for 'code'
    get code() {
        return this._code;
    }

    set code(newCode) {
        this._code = this._validateString(newCode, 'code');
    }

    // Getter and Setter for 'name'
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = this._validateString(newName, 'name');
    }

    // Method to display full currency information
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }

    // Private method to validate string
    _validateString(value, attribute) {
        if (typeof value !== 'string') {
            throw new Error(`${attribute} must be a string`);
        }
        return value;
    }
}
