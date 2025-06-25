const fruits = ["Banana", "Orange", "Apple", "Mango"];

let myList = fruits.toString();

console.log(myList);
console.log(fruits.sort());
console.log(fruits.join(","));

fruits.shift();
console.log(fruits);
fruits.unshift("lemon");
console.log(fruits);



let str="hello world";
console.log(str.split("").reverse().join(""));