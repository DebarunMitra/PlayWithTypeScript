//JS Ex to restrict overriding any method 
class Car{
    constructor(color){
        this.color = color;
    }
}

let descriptor = {
    value: function(){
        return this.color
    },
    writable: true,
    configurable: true,
    enumerable: true
};

let readonly = function (target, key, descriptor) {
  descriptor.writable = false; //true: can change the color || false: stop to change the color
  return descriptor;
};

descriptor = readonly(Car.prototype, "getColor", descriptor) || descriptor;
Object.defineProperty(Car.prototype, "getColor", descriptor);

const redCar = new Car('Red');

redCar.getColor = function() {
    return 'Change to Blue'
}

console.log(redCar.getColor());
