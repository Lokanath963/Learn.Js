
//            19-11-2024   ---->Tuesday

a = [10, 20,"js",true]          // creating the arr
console.log("A = " + a);
console.log(a.length);

a[4] = 493.44
console.log(a);                 // adding the element at 4th index
console.log(a.length);


delete a[2]                    // deleting the index data
console.log(a.length);

a.push(1000)
a.push(2000)                   // add the element at list index of arr
a.push(3000)

console.log(a);
console.log(a.length);


a.pop()                         // removing the data at the end of the element
console.log(a);
console.log(a.length);

a.unshift('aaa')               // adding the data at 1st place of the arr
a.unshift('bbb')
console.log(a);
console.log(a.length);

console.log("=================================================");

a.shift();
console.log(a);           // shift will remove the 1st element at starting of the index
console.log(a.length);

console.log("=================================================");
console.log(a);
console.log(a.length);

