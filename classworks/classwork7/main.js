//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



function Car (model, producer, modelYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.modelYear = modelYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} ${this[key]}`);
            }
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    this.changeYear = function (newValue) {
        this.modelYear = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}


let car = new Car('BMW', 'Germany', 2010, 250, 2.2);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(280);
car.changeYear(2012);
car.addDriver('Michael');





// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {
    constructor(model, producer, modelYear, maxSpeed, engineCapacity) {

        this.model = model;
        this.producer = producer;
        this.modelYear = modelYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info () {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} ${this[key]}`);
            }
        }
    };
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    changeYear (newValue) {
        this.modelYear = newValue;
    };
    addDriver (driver) {
        this.driver = driver;
    };
}

let car1 = new Car1('BMW', 'Germany', 2010, 250, 2.2);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(280);
car1.changeYear(2012);
car1.addDriver('Michael');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


function Cinderella (name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let array = [
    new Cinderella('Marry', 18, 36),
    new Cinderella('Anna', 20, 38),
    new Cinderella('Sandra', 17, 39),
    new Cinderella('Kate', 19, 35),
    new Cinderella('Sarah', 21, 37),
    new Cinderella('Lena', 25, 32),
    new Cinderella('Alexandra', 27, 34),
    new Cinderella('Laura', 26, 31),
    new Cinderella('Pia', 23, 33),
    new Cinderella('Maja', 24, 30)
];

console.log(array);


function Prince (princeName, princeAge, findShooes) {
    this.princeName = princeName;
    this.princeAge = princeAge;
    this.findShooes = findShooes;
}

let prince = new Prince ('Alexandr', 30, 34);
console.log(prince);

let couple = (array, prince) => {
    for (const arrayElement of array) {
        if (arrayElement.footSize === prince.findShooes) {
            return arrayElement.name;
        }
    }
}

console.log(couple(array, prince));

let youngCouple = array.find((value) => value.footSize === prince.findShooes);
console.log(youngCouple);
