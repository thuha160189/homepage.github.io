// Ex1 using String obj
String.prototype.filter = function (s){
    return this.split(" ").filter(s1 => s1 !==s).join(" ");
};
console.log("This house is not nice!".filter("not"));
//Ex2
Array.prototype.bubbleSort = function (){
    let is_sorted = false;
    while (!is_sorted)
    {
        is_sorted = true;
        for (let n = 0; n < this.length - 1; n++)
        {
            if (this[n] > this[n+1]){
                let x = this[n+1];
                this[n+1] = this[n];
                this[n] = x;
                is_sorted = false;
            }
        }
    }
    return this;
};
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

//Ex3 via function constructor
function Person(){
    this.name = 'Anna Smith';
    this.age = 31;
}
const p = new Person();
function Teacher(subject){
    this.name = p.name;
    this.age = p.age;
    this.subject = subject;
}
Teacher.prototype.teach = function () {
    return this.name + ", " + this.age + " is teaching " + this.subject;
}
const  t1 = new Teacher("Computer Science");
const  t2 = new Teacher("Web Application");
console.log(t1.teach());
console.log(t2.teach());

// via object create
const  person = {
    name : 'Anna Smith',
    age : 31,
    setName(name){
        this.name = name;
        return this;
    }
}
let p1 = Object.create(person);

p1.setName("Ha Le")
console.log(p1.name);

//ex4
class Person4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting(){
        return "My name is "+this.name + " and I am "+ this.age;
    }
    salute(){
        return "Good morning!, and in case I don't see you, good afternoon, good evening and good night";
    }
}
const p4 = new Person4("Ha Le", 31);
console.log(p4);
console.log(p4.greeting());
console.log(p4.salute());

class Student {
    constructor(name, age, salute, major) {
        this.name = name;
        this.age = age;
        this.salute = salute;
        this.major = major;

    }
    greeting(){
        return "Hey, My name is "+ this.name + " and i am studying " + this.major;
    }

}
const stu = new Student(p4.name, p4.age, p4.salute(), "Computer Science");
console.log(stu.greeting());
console.log(stu.salute);

class Professor{
    constructor(name, age, salute, department) {
        this.name = name;
        this.age = age;
        this.salute = salute;
        this.department = department;
    }
    greeting(){
        return "Good day, my name is "+ this.name + " and I am in department " + this.department;
    }
}
const dept = new Professor(p4.name, p4.age, p4.salute(), "Computer Science");
console.log(dept.greeting());
console.log(dept.salute);
//use prototype object and function constructor to approad
// const Person5 = {
//     name : 'Ha Le',
//     age : '31',
//     }
//     major : 'Computer Science',
//     greeting : function(){
//         return "My name is "+this.name + " and I am "+ this.age;
//     },
//     greeting : function(){
//         return "My name is "+this.name + " and I am "+ this.age;
//     },
//     salute: function() {
//         return "Good morning!, and in case I don't see you, good afternoon, good evening and good night";
//     }
// }
// //create subclass -prototype object that has Person5 prototype obj
// const Student1 = Object.create(Person5);
// Student1.greeting = function (){
//     return "Hey, My name is "+ this.name + " and i am studying " + this.major;
// }
function Person1(name, age){
    this.name = name;
    this.age = age;
}
const p5 = new Person1("Ha Le", 31);
function Student1(major){
    this.name = p5.name;
    this.age = p5.age;
    this.major = major;
}
function Professor1(department){
    this.name = p5.name;
    this.age = p5.age;
    this.department = department;
}
Professor1.prototype.pro = function () {
    return "Good day, my name is "+ this.name + " and I am in department " + this.department;
}
const  pro1 = new Professor1("Computer Science");
console.log(pro1.pro());
console.log(pro1.pro());


