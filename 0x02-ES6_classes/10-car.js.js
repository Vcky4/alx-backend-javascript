const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');

export default class Car {
    constructor(brand, motor, color) {
        this[brandSymbol] = brand;
        this[motorSymbol] = motor;
        this[colorSymbol] = color;
    }

    get _brand() {
        return this[brandSymbol];
    }

    get _motor() {
        return this[motorSymbol];
    }

    get _color() {
        return this[colorSymbol];
    }

    cloneCar() {
        return new this.constructor(this._brand, this._motor, this._color);
    }
}