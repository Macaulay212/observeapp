class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = new Set();
    }

    addPhoneNumber(number) {
        this.phoneNumbers.add(number);
    }

    removePhoneNumber(number) {
        this.phoneNumbers.delete(number);
    }

    dialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            console.log(`Dialing: ${number}`);
            this.notifyObservers(number);
        } else {
            console.log("Number not found in directory.");
        }
    }

    addObserver(observer) {
        this.observers.add(observer);
    }

    removeObserver(observer) {
        this.observers.delete(observer);
    }

    notifyObservers(number) {
        this.observers.forEach(observer => observer.update(number));
    }
}

class Observer {
    constructor(callback) {
        this.callback = callback;
    }

    update(number) {
        this.callback(number);
    }
}

// Creating a telephone instance
const myPhone = new Telephone();

// Creating observers
const observer1 = new Observer((number) => console.log(number));
const observer2 = new Observer((number) => console.log(`Now Dialling ${number}`));

// Adding observers to the telephone
myPhone.addObserver(observer1);
myPhone.addObserver(observer2);

// Adding some phone numbers
myPhone.addPhoneNumber("2347023232");
myPhone.addPhoneNumber("2348148789");

// Dial a number
myPhone.dialPhoneNumber("2347023232");
