//without strict mode
//sloope mode
// i=9;
// console.log(i);

// function add(a,a){
//     return a;
// }
// console.log(add(4,5));

// let obj ={};

// Object.defineProperty(obj, "name", {
//   value: "tiru",
//   writable: false
// });
// console.log(obj.name);
// obj.name='A';
// console.log(obj.name)

'use strict'
let i=9;
console.log(i);

function add(a){
    return a;
}
console.log(add(4));

let obj ={};

Object.defineProperty(obj, "name", {
  value: "tiru",
  writable: false
});
console.log(obj.name);
