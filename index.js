let date = new Date();

let months = date.getMonth;
let day = date.getDay;

if (months == 9 && day == 6) {
    console.log("Happy Birthday")
}
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        return date.getFullYear() - this.year;
    }
}
let myCar = new Car("Audi", 2019)
console.log("My " + myCar.name + " is " + myCar.age() + " years old")