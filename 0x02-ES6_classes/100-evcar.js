import Car from './10-car.js';

const rangeSymbol = Symbol('range');

export default class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this[rangeSymbol] = range;
    }

    get _range() {
        return this[rangeSymbol];
    }

    cloneCar() {
        // Create a new instance of Car with the same attributes
        const carClone = new Car(this._brand, this._motor, this._color);
        return carClone;
    }
}