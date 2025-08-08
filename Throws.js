function validate (age) {
    try {
    if(age>=18) {
        console.log("Eligible to Voting!");
    }
    else {
        throw new Error("Not Eligible To Voting!");
    }
}
catch(ex) {
    console.log(ex.message);
    
}
}
console.log("Program started");
validate(16);
console.log("Program Ended");
