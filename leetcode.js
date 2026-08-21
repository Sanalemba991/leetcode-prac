//reverse a string
// let str="sama"
// let dam=str.split("").reverse().join("")
// console.log(dam)
//pallindrome
// let str="sama"
// let dam=str.split("").reverse().join("")
// console.log(dam)


//Find the largest number in an array.
// let str = [234, 546, 45, 78, 76, 9, 7, 879, 78978978978]
// let sam = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] > sam) {
//         sam = str[i];

//     }

// }
// console.log(sam)

//smallest
// let str = [234, 546, 45, 78, 76, 9, 7, 879, 78978978978]
// let sam = str[0];
// for (let i = 0; i < str.length; i++) {
//     if (str[i] < sam) {
//         sam = str[i];


//     }

// }
// console.log(sam)

//Find the sum of all array elements.
// let str = [213, 3425, 7657, 879]
// let sum = 0;

// for (let i = 0; i < str.length; i++) {
//     sum = sum + str[i];

// }
// console.log(sum)

// Find even and odd numbers in an array.

// let str=[234,5,5,5,34,77,90]
// for(let i=0;i<str.length;i++){
//     if(str[i]%2==0){
//         console.log("even",str[i])
//     }else{
//         console.log("odd",str[i])
//     }
// }

//Remove duplicates from an array.
// let str = [90, 90, 213, 213, 213, 435, 765, 68]
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//         str.splice(i, 1);
//        i--
//     }

// }

// console.log(str)
//Find duplicate elements in an array.
// let str = [90, 90, 213, 213, 213, 435, 765, 68]
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//         str[i + 1] = str[i]
//         console.log(str[i])

//     }
// }

//Find the missing number in an array.
// let str = [90, 90, 213, 213, 213, 435, 765, 68]

// let miss = 0;

// for (let i = 0; i < str.length; i++) {

//     if (str[i] === str[i + 1]) {
//      str.splice(i,1)
//      i--

//     }
// }
// console.log(str)

//Find duplicate elements in an array.

// let sam = [32, 24, 24, 24, 90, 90, 90, 70];

// let okay = 0;

// for (let i = 0; i < sam.length - 1; i++) {

//    if(sam[i]===sam[i+1]){
//     okay=sam[i+1]
//     console.log(okay)
//    }

// }

//Find the missing number in an array.
// let str = [1, 2, 3, 5]
// let j = 0
// for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] !== str[i + 1]) {
//         j = str[i] + 1

//     }
// }
// console.log(j)

// let arr = [10, 20, 10, 10, 32, 324, 32];

// let frequency = {};

// for (let i = 0; i < arr.length; i++) {

//     frequency[arr[i]] = i;


// }
// console.log(frequency);


//array into object
// let arr = [10, 20, 10, 10, 32, 324, 32];

// let frequency = {};
// for (let i = 0; i < arr.length; i++) {
//     frequency[i] = arr[i];


// }
// console.log(frequency)
//real one

// let arr = [10, 20, 10, 10, 32, 324, 32];
// let frequency = {}
// for (let i = 0; i < arr.length; i++) {

//         if (frequency[arr[i]]) {
//             frequency[arr[i]]++;
//         } else {
//             frequency[arr[i]] = 1;
//         }


// }
// console.log(frequency)


// showing only a e i o u
// let sam = "sanalemba"
// let vowel = 0;
// for (let i = 0; i < sam.length; i++) {
// if(sam[i]== "a" ||
// sam[i]=="e"||
// sam[i]=="i"||
// sam[i]=="o"||
// sam[i]=="u"
// ){
//     console.log(sam[i])
// }
// }


//count
// let sam = "sanalemba"
// let vowel = ""
// for (let i = 0; i < sam.length; i++) {
//     if (sam[i] == "a" ||
//         sam[i] == "e" ||
//         sam[i] == "i" ||
//         sam[i] == "o" ||
//         sam[i] == "u"
//     ) {


//         vowel++

//     }
// }
// console.log(vowel)

//remove vowel

// let sam = "sanalemba";
// let result = "";

// for (let i = 0; i < sam.length; i++) {

//     if (sam[i] !== "a" && sam[i] !== "e" && sam[i] !== "i" && sam[i] !== "o" && sam[i] !== "u") {
//         result += sam[i];
//     }

// }

// console.log(result);

//removing vowel

// let sam="muskutdonaeiiou"
// let sao=sam.replace(/[aeiou]/g,"");
// console.log(sao);

// let sam = "sanalemba";
// let result = "";

// for (let i = 0; i < sam.length; i++) {

//     if (sam[i] !== "a" && sam[i] !== "e" && sam[i] !== "i" && sam[i] !== "o" && sam[i] !== "u") {
//         result += sam[i];
//     }

// }

//find the frequency of each elements

// let str = [45, 45, 67, 78, 98, 1]
// let frequency = {}
// for (let i = 0; i < str.length; i++) {
//     if (frequency[str[i]]) {
//         frequency[[str[i]]]++;
//     }
//     else {
//         frequency[[str[i]]] = 1
//     }
// }
// console.log(frequency)

//remove vowels in a string.
// let str = "sanalemba"
// let count=0
// for (let i = 0; i < str.length; i++) {
//     if (str[i] !== "a" &&
//         str[i] !== "e" &&
//         str[i] !== "i" &&
//         str[i] !== "o" &&
//         str[i] !== "u") {
//       console.log(str[i])
//     }
// }

//count vowels in a string.
// let str = "sanalemba"
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == "a" ||
//         str[i] == "e" ||
//         str[i] == "i" ||
//         str[i] == "o" ||
//         str[i] == "u") {

//         count = count + 1


//     }
// }
// console.log(count)

//Find the first non-repeating character.

// number of reapeating
// let str = "saaasssddd";
// let non=[0];
// let count=0

// for(let i=0;i<str.length;i++){
//     if(str[i]===str[i+1]){
//         non[i]=str[i]
//         console.log(non[i])


//     }
// }


// find the all non repeatig data
// let str = "asnalemba";
// for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//         if (str[i] === str[j]) {
//             count++;
//         }
//     }
//     if (count == 1) {
//         console.log(str[i])

//     }
// }


// find the all 2nd non repeatig data
// let str = "asnalemba";
// for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//         if (str[i] === str[j]) {
//             count++;
//         }
//     }
//     if (count == 1) {
//         console.log(str[i+1]);
//         break;

//     }
// }
//Check whether two strings are anagrams.

// let str="Listen "
// let str2="Silen t "

// let string=str.split("").sort().join("")


// let string2=str.split("").sort().join("")

// if(string===string2)
// {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// let str="sana is a ba d boy";
// let sam=str.replace("ba d","bad")
// console.log(sam)

//Find the longest word in a sentence.

// let str=["sana","moinu","shahbaz","amamna"]
// let longest="";
// let second=""
// for(let i=0;i<str.length;i++){
//     if(str[i].length>longest.length){
//         second=longest//why its take before one
//         longest=str[i]
//     }
//     else if(str[i].length>second.length){
//         second=str[i]
//     }
// }
// console.log(second)
// console.log(longest)



























