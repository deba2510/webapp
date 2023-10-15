"use strict";

// FUNCTION CONSTRUCTOR INHERITANCE

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.getDetails = function(){
    return "Hi!, I am a person, my name is " + this.name + ", and I am " + this.age + " year old :)";
}

function Employee(name,age,salary){
    Person.call(this,name,age);
    this.salary = salary;
}

// PROTOTYPE INHERITANCE MAGIC
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getSalary = function(){
    return this.salary;
}
// FUNCTION OVERRIDING
Employee.prototype.getEmployeeDetails = function(){
    return "Hi!, I am an Employee, my name is " + this.name + ", my salary is " + this.getSalary() + ", and I am " + this.age + " year old :)";
}


const todd = new Person("Todd Alquist", 25);
// console.log(todd);
// console.log(todd.getDetails());

const mike = new Employee("Mike Ehrmantraut", 59, 80000);
// console.log(mike);
// console.log(mike.getEmployeeDetails());

function Manager(name,age,salary,team){
    Employee.call(this,name,age,salary);
    this.team = team;
}

// INHERITANCE MAGIC
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

const gus = new Manager("Gus Fring",51,120000,[todd,mike]);
console.log(gus);
console.log(gus.getDetails());
console.log(gus.getEmployeeDetails());
console.log(gus.getSalary())

// ANOTHER EXAMPLE OF PROTOTYPE INHERITANCE
function Animal(name){
    this.name = name;
}

Animal.prototype.makeSound = function(){
    console.log(this.name + " is making sound!!");
}

function Dog(name,breed){
    Animal.call(this, name);
    this.breed = breed;
}

// INHERITANCE MAGIC
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log("Woof!!");
}

function Poodle(name,breed,color){
    Dog.call(this, name, breed);
    this.color = color;
}

// INHERITANCE MAGIC
Poodle.prototype = Object.create(Dog.prototype);
Poodle.prototype.constructor = Poodle;

Poodle.prototype.fetchBall = function(){
    console.log('Fetching the ball!');
}

const myPoodle = new Poodle('Ponchu', 'Poodle','White');
console.log(myPoodle);
myPoodle.makeSound();
myPoodle.bark();
myPoodle.fetchBall();


// ===============================

// CLASS INHERITANCE
class PersonCL{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    getDetails = function(){
        console.log('NAME = ' + this._name + " AGE = " + this._age);
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    set name(name){
        this._name = name;
    }

    set age(age){
        this._age = age;
    }
}

class EmployeeCL extends PersonCL{
    constructor (name, age, salary){
        super(name,age);
        this._salary = salary;
    }
    getEmployeeSalary = function(){
        console.log(this._salary);
    }

    get salary(){
        return this._salary;
    }

    set salary(salary){
        this._salary = salary;
    }
}

class ManagerCL extends EmployeeCL{
    constructor (name,age, salary,team){
        super(name,age,salary);
        this._team = team;
    }
    getTeamDetails = function(){
        console.log("TEAM MEMBERS OF " + this._name + " ARE MENTIONED BELOW:")
        this._team.forEach(function(element) {
            element.getDetails();
            element.getEmployeeSalary();
        });
    }

    get team(){
        return this._team;
    }

    set salary(team){
        this._team = team;
    }
}

const saul = new EmployeeCL("Saul Goodman", 49, 90000);
const skinny = new EmployeeCL("Skinny Pete", 24, 50000);

const walter = new ManagerCL("Walter White", 52, 100000, [saul,skinny]);

walter.getDetails();
walter.getEmployeeSalary();
walter.getTeamDetails();

// OBJECT INHERITANCE
const animal = {
    makesound : function(){
        console.log("Making sound");
    }
}

console.log(animal);

const dog = Object.create(animal);
dog.bark = function(){
    console.log("Barking, Woof Woof!!");
}
console.log(dog);

const poodle = Object.create(dog);
poodle.fetchBall = function(){
    console.log("Fetching ball...");
}
console.log(poodle);

poodle.fetchBall();
poodle.bark();
poodle.makesound();

class Student{
    name;
    age;

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    publicMethod(){
        console.log("PUBLIC");
        console.log("\ncalling from static method");
        this.#privateMethod();
    }

    #privateMethod(){
        console.log("PRIVATE")
    }

    static staticMethod(){
        console.log("STATIC");        
    }
}


const chotu = new Student("Chota Kalu", 8);
chotu.publicMethod();
// Static methods can only be called by class not object-instance
Student.staticMethod();
// chotu.#privateMethod();


