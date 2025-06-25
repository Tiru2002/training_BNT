// typeof
console.log(typeof(5));           
console.log(typeof("hello"));     

let mychar = "Hello";
console.log(typeof(mychar[0]));   

// merge string and number
console.log("hello" + 5);
console.log(5 + "hello");         

// lastIndex
let str = "hello world";
console.log(str.lastIndexOf("o")); 
console.log(str.lastIndexOf("l")); 

// typecast string to int
let str1 = "123";
let num = Number(str1);
console.log(num);                 
console.log(typeof num);         

// NaN 
let str2 = "abc";
let num2 = Number(str2);          
console.log(num2);                
console.log(isNaN(num2));         

//isInteger
console.log(Number.isInteger(5)); 

//parseInt and parseFloat
console.log(parseInt("10.5"));
let numf=(parseFloat("10.66666"));
console.log(numf.toFixed(2));


//scope
let x = 30;
{
    let x=20;
}
console.log(x); 

//array methods
let arr=[1,2];
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
arr.push(3);
console.log(arr);
arr.pop();
console.log(arr);

//delete array using dot 
arr.length=0;
console.log(arr);

//delete 
let arr10=[1,2,3,4,5];
delete arr10[arr10.length];
console.log(arr10)


//splice
let arr1=[1,2,3,4,5];
console.log(arr1.splice(1,2,10));
console.log(arr1);

//slice
let arr5=[1,2,3,4,5];
console.log(arr5.slice(1,3));

//split
let sentence = "Hello world";
let words = sentence.split(" ");
console.log(words); 

//array reverse
let arr2=[1,2,3,4,5];
console.log(arr2.reverse());

//merge two arrays
let arr3=[1,2,3];
let arr4=[4,5,6];
console.log(arr3.concat(arr4));

//object this

let obj1={
    name:"John",
    age:30,
    Hello:function(){
        return(this.name);
    }
}
console.log(obj1.age)
console.log(obj1.Hello())

let y=2;

switch(y){
 case 1:
    console.log("apple");
    break;
 case 2:
    console.log("banana");
    break;
 default: null;
}
