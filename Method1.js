
//   22-11-2024 ----->Friday


// function add(...args) {
//     sum = 0;
//     for(i = 0;i < args.length;i++) {
//         sum = sum + args[i];
//     }
//     return sum;
// }


// let res = add(10,20,30,40);
// console.log("Result : "+res);
// add(20,30,40);
// add(10,12);



// out side the function we can decleare the variable is called as the Global variable
var a = 10;
function fun () {
    // inside the function we decleare the variable is called the loacal variable
    var b = 20;
    console.log("A  = " + a);
    console.log("B  = " + b);  
} 
fun();
console.log("A  = " + a);
console.log("b  = " + b);



// inner function or outer function
function outer() {
    var a = 10;
    console.log("outer Function");
    function inner() {
         var b = 20;
        console.log("Inner Function");
        console.log(" A = " + a);
        console.log(" B = " + b);
    }
    inner();
    console.log(" A = " + a);
    console.log(" B = " + b);
}

outer();