
//     20-11-2024    ---->Wednesday
// simple if
console.log("Welcome to college!");
marks = 90
if (marks > 80) {
    console.log("Welcomt to Tech Club!");
}


// if - else

age = 50
if(age>=17) {
    console.log("Eligible for Voting...");
}
else {
    console.log("Not eligible for Voting...");
}


//   nested if
num = -10
if(num > 0) {
    console.log("Positive Number");
    if(num % 2 == 0) {
        console.log("Even Number");
    }
    else {
        console.log("Odd Number");
        
    }
}
else {
    console.log("Negative Number...");
}

// else - if ladder
age = 55
if(age<=5) {
    console.log("Child");
}
else if(age<=12) {
    console.log("Boy");
}
else if(age<=30) {
    console.log("Adult");
}
else if(age<=60) {
    console.log("Old");
}
else {
    console.log("Ultra pro max");
}