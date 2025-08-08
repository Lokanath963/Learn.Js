// no arguments -- no return the value
function add() {
    a = 10 ;
    b = 5;
    sum = a + b;
    console.log("Sum = "+sum);
}
add();

// arguments -- no return the value
function sub(a, b) {
    diff = a - b;
    console.log("Differece = " + diff);
}
sub(50,24);


// no arguments -- return the value
function mul() {
    a = 5
    b = 7
    p = a * b;
    return p;
}
console.log("Product = " + mul());

// arguments -- return the value
function division(a, b) {
    c = a / b;
    return c;
}
console.log("Division = " + division(554, 340));