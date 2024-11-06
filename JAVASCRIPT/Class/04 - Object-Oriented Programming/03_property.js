// PROPERTY
class Car { // class
    constructor(brand, color, maxSpeed, chassisNumber) { // constructor and property inside
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = chassisNumber;
        // set default property value inside constructor
        this.price = `IDR${Math.floor(Math.random() * 341564178) + 1}`
        this._licenceNumber = `${brand}-${Math.floor(Math.random() * 10000) + 1}`;
    }

    // getter non-imutable
    get licenceNumber() {
        return this._licenceNumber;
    }

    // throw error when change non-imutable property
    set licenceNumber(licenceNumber) {
        console.log('you are not allowed to change the license number');
    }
}

class Mail {
    constructor(sender, receiver, subject, body) {
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
    }
}

// property value based on instance
const car1 = new Car('BMW', 'red', 200, 'b-1');
const car2 = new Car('Audi', 'blue', 220, 'a-1');
const car3 = new Car('BMW', 'black', 250, 'b-2');

console.log(car1);
console.log(car2);
console.log(car3);

// SETTER AND GETTER

// mutable property
const car = new Car('BMW', 'red', 200);
car.chassisNumber = 'BMW-1';
car.licenceNumber = 'BMW-1';

console.log(car);

// acessor property
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User('John', 'Doe');
console.log(user);
console.log(user.fullName); // getter

user.fullName = 'Fulan Fulanah'; // setter
console.log(user);
console.log(user.fullName);

