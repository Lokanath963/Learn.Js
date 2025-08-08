
//     19-11-24    --->  Tuesday

a = ["blue", "green","yellow", "orange","pink"]
console.log(a);
a.forEach(el => {
    console.log(el + " - js"); 
});

b = [10, 20, 30, 40, 50]
 b2 = b.map(num => num ** 2) 
console.log(b);
console.log(b2);

let numbers = [1,2,3,4,5,6,7,8,9,0]
let even = numbers.filter(num=> num % 2 === 0);
console.log(numbers);
console.log(even + " ");

numbers = [1,2,3,4,5]
res = numbers.reduce((sum, num) => sum + num, 0)   // this result will give sum of array
console.log(numbers);

console.log(res);

prod  = numbers.reduce((p,n) => p * n ,1)   // this result will give square of array
console.log(prod);




// // Simple For loop
// for (i = 0;i<a.length;i++) {
//     console.log(a[i] + " - js");   
// }


