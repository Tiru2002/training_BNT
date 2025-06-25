let arr=[1,2,3,4];
console.log(arr[0]); //1

let [a,b,c]=arr;
console.log(a); //1
console.log(c);

function myFunction(arr){
    return arr.map(n=>n*n);
}

let [A,B,C,D]=myFunction(arr);
console.log(A);
