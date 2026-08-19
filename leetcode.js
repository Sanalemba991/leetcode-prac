//reverse a string
// let str="sama"
// let dam=str.split("").reverse().join("");
// console.log(dam)

//chcek if a srting is pallindrome or not
// let str="ibobi";

// let sam=str.split("").reverse().join("")

// if(sam === str){
//     console.log("its palindrome")
// }else{
//     console.log("its not")
// }

//Find the largest number in an array.
// let str = [234, 432, 345, 456]
// let containner = str[0];
// for (let i = 0; i < str.length; i++) {
//     // console.log(i,str[i])
//     if (str[i] > containner) {
//         containner = str[i];
//     }
// }

// console.log(containner);

//Find the second and first  number in an array.
// let str = [34, 45, 23, 45, 65, 90]
// let ss = str[0]
// let second=str[0]
// for (let i = 0; i < str.length; i++) {

//     // console.log(i,str[i]);
//     if (str[i] > ss) {
//         second=ss;
//         ss = str[i];

//     }

// }
// console.log(second)
// console.log(ss)

//Find the second and first  smallest number in an array.
// let str = [34, 45, 23, 45, 65, 90]
// let ss = str[0]
// let second=str[0]
// for (let i = 0; i < str.length; i++) {

//     // console.log(i,str[i]);
//     if (str[i] < ss) {
//         second=ss;
//         ss = str[i];

//     }

// }
// console.log(second)
// console.log(ss)

//Find the sum of all array elements.
// let str=[32,43,54,56,67]
// let out=0;//in here i have to ficve only number not [0]cause this one will tigger array we have to take only numebr;

// for(let i=0;i<str.length;i++){

//     out=out+str[i];

// }
// console.log(out)

//Find even and odd numbers in an array.
// let sam = [32, 24, 89, 90, 70]
// let sa = sam[0];
// for (let i = 0; i < sam.length; i++) {

//     sa = sam[i]

//     if (sa % 2 == 0) {
//         console.log("its odd", sa);

//     } else {
//         console.log("its even", sa)
//     }
// }

//Remove duplicates from an array.
// let sam = [32, 24, 90, 90, 90, 70]

// for (let i = 0; i < sam.length; i++) {
//     if (sam[i] === sam[i + 1]) {
//         sam.splice(i, 1);
//         i--;//check for previous one 


//     }

// }
// console.log(sam)

//Find duplicate elements in an array.

// let sam = [32, 24, 90, 90, 90, 70]
// let okay = 0;
// for (let i = 0; i < sam.length; i++) {
//     if (sam[i] === sam[i + 1]) {
//         okay = sam[i]

//     }

// }
// console.log(okay)

//Find the missing number in an array.
let arr = [1, 2, 3, 5, 6];
let missing = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
        console.log(arr[i] + 1)
        break;
    }
}


















