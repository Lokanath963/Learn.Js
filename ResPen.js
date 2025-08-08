//    03-12-2024   ---> Tuesday

// prom = new Promise((resolve, reject) => {
//     payment = "success"
//     if(payment === "success") 
//         resolve("Payment is Completed")

//     else 
//         reject("Pyment rejected")

// }) 

// prom

// .then((result)=> {
//     console.log(result);
// })

// .catch((result) => {
//     console.log(result);
    
// }) 


// for failed

// prom = new Promise((resolve, reject) => {
//     payment = "failed"
//     if(payment === "success") 
//         resolve("Payment is Completed")

//     else 
//         reject("Payment rejected")

// }) 

// prom

// .then((result)=> {
//     console.log(result);
// })

// .catch((result) => {
//     console.log(result);
    
// }) 


// mutliple then columns

// prom = new Promise((resolve, reject) => {
//     payment = "success"   /// failed
//     if(payment === "success") 
//         resolve("Payment is Completed")

//     else 
//         reject("Payment rejected")

// }) 

// prom

// .then((result)=> {
//     console.log(result);
//     return "message from 1st then()"
// })
// .then((result)=> {
//     console.log(result);
//     return "message from 2nd then()"
// })
// .then((result)=> {
//     console.log(result);

// })

// .catch((result) => {
//     console.log(result);
    
// }) 


// failed payment

prom = new Promise((resolve, reject) => {
    payment = "failed"   /// failed
    if(payment === "success") 
        resolve("Payment is Completed")

    else 
        reject("Payment rejected")

}) 

prom

.then((result)=> {
    console.log(result);
})
.then((result)=> {
    console.log(result);
})

.catch((result) => {
    console.log(result);
    return "message from 1st then()"
}) 
.catch((result) => {
    console.log(result);
    return "message from 2nd then()"
}) 

.catch((result) => {
    console.log(result);

}) 