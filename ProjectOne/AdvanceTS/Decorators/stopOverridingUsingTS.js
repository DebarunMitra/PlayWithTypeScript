//TS Decorator Ex to restrict overriding any method
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function writable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.writable = value;
    };
}
var Car = /** @class */ (function () {
    function Car(color) {
        this.color = color;
    }
    Car.prototype.getColor = function () {
        return this.color;
    };
    __decorate([
        writable(true)
    ], Car.prototype, "getColor");
    return Car;
}());
var redCar = new Car('Red');
redCar.getColor = function () {
    return 'Change to Blue';
};
console.log(redCar.getColor());
