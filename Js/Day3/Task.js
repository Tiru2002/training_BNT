
   
//count down 
function myCounter() {
    let count = 10;
    let countnum = document.getElementById("countnum");

    let interval = setInterval(() => {
        countnum.innerHTML = count;
        count--;
        if (count < 0) {
            clearInterval(interval);
        }
    }, 1000);
}

//Stop watch
    let h=0;
    let m=0;
    let s=0;
    let timmer;
    let hours=document.getElementById("hours");
    let mins=document.getElementById("mins");
    let secs=document.getElementById("secs");
    function start(){
    timmer=setInterval(()=>{
          s++;
          if(s>=60){
            s=0;
            m++;
          }
          else if(m>=60){
            m=0;
            h++;
          }
          else{
            s++
          }
          hours.innerHTML=h;
          mins.innerHTML=m;
          secs.innerHTML=s;

     },1000);

    }

    function stop(){
      clearInterval(timmer);
    }

    function reset(){
      clearInterval(timmer);
       hours.innerHTML=0;
       mins.innerHTML=0;
       secs.innerHTML=0;
    }

//Function vs arrow function in normal js
let a=1;
let b=2;
function add(){
  console.log("for normal function "+ a+b);
}

let add1=()=>{
    console.log("for arrow fuction "+ a+b);
}
add();
add1()


//.Obj this
let obj = {
    user1: {
        name: "John",
        age: 30,
        occupation: "Software Engineer",
        greetings: function () {
            return this.name;
        }
    },
};

console.log("hello "+obj.user1.greetings());

//map
let num1 = [1, 2, 3, 4];
let squared = num1.map(n => n * n);
console.log(squared);

//filter
let num2= [1, 2, 3, 4];
let even = num2.filter(n => n % 2 === 0);
console.log(even);

//reduce
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum)

//try catch finally
let x = 10;

function check() {
  try {
    console.log("Value of x is:", x);
    let y = x.toUpperCase(); 
  } catch (err) {
    
    console.log("Error caught:", err.message);
  } finally {
    console.log("Finally block executed.");
  }
}

check();

//jQuery get set values in form elements
   $('#get').click(function() {
      let name = $('#name').val(); 
      alert('Name is: ' + name);
    });

    $('#set').click(function() {
      $('#name').val('ram');  // Set value
    });