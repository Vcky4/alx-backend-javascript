export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = this._validateString(name, 'name');
        this._length = this._validateNumber(length, 'length');
        this._students = this._validateStudents(students, 'students');
    }

    // Getter and Setter for 'name'
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = this._validateString(newName, 'name');
    }

    // Getter and Setter for 'length'
    get length() {
        return this._length;
    }

    set length(newLength) {
        this._length = this._validateNumber(newLength, 'length');
    }

    // Getter and Setter for 'students'
    get students() {
        return this._students;
    }

    set students(newStudents) {
        this._students = this._validateStudents(newStudents, 'students');
    }

    // Private method to validate string
    _validateString(value, attribute) {
        if (typeof value !== 'string') {
            throw new TypeError(`${attribute} must be a string`);
        }
        return value;
    }

    // Private method to validate number
    _validateNumber(value, attribute) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new TypeError(`${attribute} must be a number`);
        }
        return value;
    }

    // Private method to validate students array
    _validateStudents(value, attribute) {
        if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
            throw new TypeError(`${attribute} must be an array of strings`);
        }
        return value;
    }
}
