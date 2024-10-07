//*************************** 1 *******************

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web development"
};


function propsCount(currentObject){
    return Object.keys(currentObject).length;
}

console.log(propsCount(mentor));

// *********************** 2 ***********************

let arbitraryObject = {
    name: "John",
    lastName: "Windy",
    age: 36,
    nationality: "SAU",
    isEmployed: true
};

function showProps(obj) {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
}

showProps(arbitraryObject);

// ********************* 3 ***************

class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    };

    showFullName(){
        console.log(`${this.name} ${this.surname}`)
    }
}

class Student extends Person {
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName) {
        console.log(`${this.name} ${middleName} ${this.surname}`);
    }

    showCourse(year) {
        const currentYear = new Date().getFullYear();
        // console.log(currentYear);
        let course;
        this.course = currentYear - this.year;
        if (course < 1) {
            course = 1;
        } else if (course > 6){
            course = 6;
        }
        console.log(`Current course: ${this.course}`);
    }
}

const student1 = new Student("Johnny", "Cash", 2020);
student1.showFullName("Malkovych")
student1.showCourse();

// **************************** 4 ***************************

const epmloyees = [];

class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        const salary = this.dayRate * this.workingDays;
        //console.log(`${this.fullName} salary: ${salary}`);
        return salary;
    }

    showSalaryWithExperience() {
        const salaryWithExperience = this.dayRate * this.workingDays * this.#experience;
        //console.log(`${this.fullName} salary with experience: ${salaryWithExperience}`);
        return salaryWithExperience;
    }

    get experience() {
        return this.#experience;
    }

    set experience(value) {
        this.#experience = value;
        console.log(this.#experience);
    }
}

let worker1 = new Worker("Andy Newmark", 50, 40);
console.log(worker1.fullName + " salary: " + worker1.showSalary());
console.log(worker1.fullName + " salary with experience: " + worker1.showSalaryWithExperience());
worker1.experience = 1.5;
console.log(`New experience: ${worker1.experience}`);
console.log(worker1.fullName + " salary with new experience: " + worker1.showSalaryWithExperience());
epmloyees.push(worker1);

let worker2 = new Worker("Jack Derrida", 50, 32);
console.log(worker2.fullName + " salary: " + worker2.showSalary());
console.log(worker2.fullName + " salary with experience: " + worker2.showSalaryWithExperience());
worker2.experience = 1.7;
console.log(`New experience: ${worker2.experience}`);
console.log(worker2.fullName + " salary with new experience: " + worker2.showSalaryWithExperience());
epmloyees.push(worker2);

let worker3 = new Worker("Stan Borys", 45, 45);
console.log(worker3.fullName + " salary: " + worker3.showSalary());
console.log(worker3.fullName + " salary with experience: " + worker3.showSalaryWithExperience());
worker3.experience = 1.4;
console.log(`New experience: ${worker3.experience}`);
console.log(worker3.fullName + " salary with new experience: " + worker3.showSalaryWithExperience());
epmloyees.push(worker3);

console.log(epmloyees);

//sorting the workers
epmloyees.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());

console.log("Sorted salary with experience:");
epmloyees.forEach(employee => {
    console.log(`${employee.fullName}: ${employee.showSalaryWithExperience()}`);
})

// ********************************** 5 *******************************

class GeometricFigure {
    getArea(){
        return 0;
    }

    toString() {
        return Object.getPrototypeOf (this).constructor.name
    }
}

class Triangle extends GeometricFigure {
    constructor(a, h) {
        super();
        this.a = a;
        this.h = h;
    }

    getArea() {
        return (this.a / 2) * this.h;
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }

    getArea() {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }

    getArea() {
        return Math.PI * this.r * this.r;
    }
}

function handleFigures(figures) {
    if (!Array.isArray(figures)){
        throw new Error("Input must be and array of GeometricFigure objects.");
    }

    const totalArea = figures.reduce((acc, figure) => {
        if (figure instanceof GeometricFigure) {
            console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
            return acc + figure.getArea();
        } else {
            throw new Error("All items in the array must be instances of GeometricFigure.");
        }
    }, 0);

    console.log(`Total area: ${totalArea}`);
    return totalArea;
}

const figures = [
    new Triangle(2, 3),
    new Square(4),
    new Circle(7)
];

handleFigures(figures);