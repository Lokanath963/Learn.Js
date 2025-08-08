//   02-12-2002  ---> Monday

// Without try Catch

function add () {
    a = 10 ;
    b = 20;
    sum = a + b;
    console.log("Sum " + sum);

}
console.log("Program Started");
add();
console.log("Program Ended");


// with Try Catch block

function add () {
    try {
    a = 10 ;
    b = 20;
    sum = a + b;
    console.log("Sum " + c);
    }
    catch(ex) {
        console.log("Exception Will Come");
    }
}
console.log("Program Started");
add();
console.log("Program Ended");

// with try and catch, finally

function add () {
    try {
    a = 10 ;
    b = 20;
    sum = a + b;
    console.log("Sum " + c);
    }
    catch(ex) {
        console.log("Exception Will Come");
    }
    finally {
        console.log("Final Block ");
        
    }
}
console.log("Program Started");
add();
console.log("Program Ended");
