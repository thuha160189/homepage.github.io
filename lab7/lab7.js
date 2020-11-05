//4. sum and multiply
let sum = (arr) => {
    return arr.reduce((x,y)=> x + y);
}
console.log(sum([7,5,6,3]));

// multyply

let mul = (arr) => {
    return arr.reduce((x,y)=> x*y);
}
console.log(mul([4,5,10]));

//5. reverse
 
let reverse = (str) => {
    return str.split("").reduce((x,y)=> y + x, "");
}
console.log(reverse("hello MIU"))

//7. filter long words

let filterLongWord = (arr, n) => {
    return arr.filter(e =>e.length>n);
}
console.log(filterLongWord(["hello", "welcome", "to", "MIU"], 3));