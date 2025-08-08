//function call
greet();

                                           // this is ok executed even change the calling 
 //function decleration                   //   the function.
function greet() {
    console.log("Hello World!");
}

//calling the function
g();

// function expression
g = function() {                                        // this also executed
    console.log("Hello World!");
}

// call the function
g();

// function decleration                           // before calling the method not working
g = () => {                                      // after calling its work
    console.log("Hello World!");
}




