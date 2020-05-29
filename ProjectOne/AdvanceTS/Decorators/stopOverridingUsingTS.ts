//TS Decorator Ex to restrict overriding any method
//run in to ts playground

function writable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    };
}

class Car {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    @writable(true)//true: can change the color || false: stop to change the color
    getColor() {
        return this.color
    }
}

const redCar = new Car('Red');

redCar.getColor = function () {
    return 'Change to Blue'
}

console.log(redCar.getColor());
