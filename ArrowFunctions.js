

res1 = () => {
    a = 10 ;
    b = 5;
    sum = a + b;
    console.log("Sum = "+sum);
}
res1();

res2 = (a,b) => {
    diff = a - b;
    console.log("Differece = " + diff);
}

res2(20,10);



res3 = () => {
    a = 5
    b = 7
    p = a * b;
    return p;
}
console.log("Product = " + res3());
res3();

res4 = (a,b) => {
    q = a / b;
    return q;
}
console.log("Quotient = " + res4(200, 5));
res4();


res4 = (a,b) => {
    result = a % b;
    return result;
}
console.log("Remainder = " + res4(200,5));
res4();

