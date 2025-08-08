//    03 - 12-2024   ----> Tuesday

// arrow functions type

setTimeout( () => {
    console.log("Choose A Movie...");
        setTimeout( () => {
            console.log("Choosing the time and location");
            setTimeout( () => {
                console.log("Selecting the Seats");
                setTimeout( () => {
                    console.log("Making the Payment");
                    setTimeout( () => {
                        console.log("Enjoying the movie");
                        
                    },10000);
                    
                },3000);          
            },2000);
    },3000);
 
},5000);



// // with out passing the method name

// setTimeout(function() {
//     console.log("Choose A Movie...");
//         setTimeout(function() {
//             console.log("Choosing the time and location");
//             setTimeout(function () {
//                 console.log("Selecting the Seats");
//                 setTimeout(function () {
//                     console.log("Making the Payment");
//                     setTimeout(function () {
//                         console.log("Enjoying the movie");
                        
//                     } ,10000);
                    
//                 },5000);          
//             },2000);
            
//     },5000);
//     } 
//     ,5000);



// setTimeout(function choose_a_movie() {
// console.log("Choose A Movie...");
//     setTimeout(function choose_time_location () {
//         console.log("Choosing the time and location");
//         setTimeout(function select_seats() {
//             console.log("Selecting the Seats");
//             setTimeout(function make_a_payment() {
//                 console.log("Making the Payment");
//                 setTimeout(function enjoy_movie() {
//                     console.log("Enjoying the movie");
                    
//                 } ,10000);
                
//             },5000);          
//         },2000);
        
// },5000);
// } 
// ,5000);



// with out passing the method name

// setTimeout(function() {
//     console.log("Choose A Movie...");
//         setTimeout(function() {
//             console.log("Choosing the time and location");
//             setTimeout(function () {
//                 console.log("Selecting the Seats");
//                 setTimeout(function () {
//                     console.log("Making the Payment");
//                     setTimeout(function () {
//                         console.log("Enjoying the movie");
                        
//                     } ,10000);
                    
//                 },5000);          
//             },2000);
            
//     },5000);
//     } 
//     ,5000);