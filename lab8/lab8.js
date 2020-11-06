// Ex1 using String obj
String.prototype.filter = function (s){
    return this.split(" ").filter(s1 => s1 !==s).join(" ");
};
String.prototype.filter1 = function (s){
    return this.replaceAll(s, "");
};
console.log("This house is not nice!".filter1("not"));
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
//another way
function Person1(myname){
    this.name = myname;
}
function Teacher(name, subject){
    Person1.call(this, name);
    this.subject = subject;
}
Teacher.prototype = Object.create(Person1.prototype)
Teacher.prototype.teach = function () {
    return this.name + " is teaching " + this.subject;
}
const  wiliam = new Teacher("William", 'Wap');
wiliam.teach();
// via object create
const  person = {
    name : 'Anna Smith',
    age : 31,
    setName(name){
        this.name = name;
        return this;
    }
}
const teacher = Object.create(person);
teacher.setSubject = function(subject){
    this.subject = subject;
}

teacher.setName("Ha Le");
teacher.setSubject('WAP');
console.log(teacher.name);
console.log(teacher);

//using constructor
function Person2(name){
    return {
        name: name
    }
}
function Teacher1(name, subject){
    let myname = Person2(name).name;
    return {
        name : myname,
        subject: subject,
        teach: function (){
            console.log(this.name + "now is teaching "+ this.subject);
        }
    }
}
const  wiliam1 = Teacher1('William', 'WAP');
wiliam1.teach();
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

function Person5(name, age){
    this.name = name;
    this.age = age;
}
const p5 = new Person5("Ha Le", 31);

Person5.prototype.greeting = function (){
    return "Good day, my name is "+ this.name + " and I am " + this.age + "year old";
}
Person5.prototype.salute = function (){
    return "Good morning!, and in case I don't see you, good afternoon, good evening and good night";
}
function Student1(name, age, major){
    Person5.call(this, name, age);
    this.major = major;
}
Student1.prototype = Object.create(Person5.prototype);
Student1.prototype.greeting1 = function (){
    return "Good day, my name is "+ this.name + " and I am studying " + this.major;
}

function Professor1(name, age, department){
    Person5.call(this, name, age);
    this.department = department;
}
Professor1.prototype = Object.create(Person5.prototype);
Professor1.prototype.greeting1 = function () {
    return "Good day, my name is "+ this.name + " and I am in department " + this.department;
}
const stu1 = new Student1('Ha Le', 31, 'Computer Science');
console.log(stu1.greeting1());
console.log(stu1.salute());
const  pro1 = new Professor1('Dustin', 37, 'CSD');
console.log(pro1.greeting1());
console.log(pro1.salute());


