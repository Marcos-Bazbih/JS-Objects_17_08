// ******************************___1___***********************************
// function longOrShort (str){
//     if(str.length > 5){
//         return "long";
//     }
//     return "short";
// }

// let result = longOrShort("hello");
// console.log(result);
// ******************************___1___***********************************


// ******************************__2___***********************************

// ******************************__2___***********************************
// function findStringA (str){
//     if(str.indexOf("a") != -1){
//         return str.indexOf("a")
//     }
//     return "not found";
// }

// let result = findStringA("llllalll");
// console.log(result);
// ******************************__2___***********************************


// ******************************__3___***********************************
// function findStringR (str){
//     if(str.indexOf("r") != -1){
//         return true;
//     }
//     return false;
// }

// let result = findStringR("aaaaaraaa");
// console.log(result);
// ******************************__3___***********************************


// ******************************__4___***********************************
// function stringAndChar (str, char){
//     if(str.indexOf(char) != -1){
//         return true;
//     }
//     return false;
// }

// let result = stringAndChar("abcde", "c");
// console.log(result);
// ******************************__4___***********************************


// ******************************__5___***********************************
// function isCharInString (str, char){
//     if(str.lastIndexOf(char) != -1){
//         console.log(`the char is in index ${str.lastIndexOf(char)}`);
//     }
//     else{
//         console.log("not here");
//     }
// }

// let result = isCharInString("abdcde", "d");
// ******************************__5___***********************************


// ******************************__6___***********************************
// function threeChars (){
//     return "sayonara".substr(0,3);
// }

// let firstResult = threeChars();
// console.log(firstResult);
// ******************************__6___***********************************


// ******************************__7___***********************************
// function fourChars (){
//     return "sayonara".substr(2,4);
// }

// let secondResult = fourChars();
// console.log(secondResult);
// ******************************__7___***********************************


// ******************************__8___***********************************
// function getAllFromOStr(){
//     return "sayonara".substr(3);
// }
// console.log(getAllFromOStr());
// ******************************__8___***********************************


// ******************************__9___***********************************
// function getBigIndex (str, indexNum){
//     if(indexNum > str.length){
//         return "the index is bigger";
//     }
//     return str.substr(indexNum);
// }
// let result = getBigIndex("aaaaaaaaaa", 3);
// console.log(result);
// ******************************__9___***********************************


// ******************************__10___***********************************
// function getThreeIndex (str, indexNum){
//     if(indexNum > str.length){
//         return "the index is bigger";
//     }
//     return str.substr(indexNum, 3);
// }
// let result = getThreeIndex ("abcdefg", 2);
// console.log(result);
// ******************************__10___***********************************


// ******************************__11___***********************************
// function getStrByNum(str, num1, num2){
//     if(num1*0==0 && num2*0==0){
//         return str.substr(num1,num2);
//     }
// }
// let result = getStrByNum("abcdefg", 2, 3);
// console.log(result);
// ******************************__11___***********************************


// ******************************__12___***********************************
// function threeChars (){
//     return "sayonara".substring(0,3);
// }

// let result = threeChars();
// console.log(result);
// ******************************__12___***********************************


// ******************************__13___***********************************
// function fourChars (){
//     return "sayonara".substring(2,6);
// }

// let result = fourChars();
// console.log(result);
// ******************************__13___***********************************


// ******************************__14___***********************************
// function getAllFromOString(){
//     return "sayonara".substring(3,8);
// }
// console.log(getAllFromOString());
// ******************************__14___***********************************


// ******************************__15___***********************************
// function getUserFullName(userInput){
//     console.log(userInput.length);
//     if(userInput.indexOf(" ") != -1){
//         console.log("there is space");
//         console.log(userInput.substring(0,userInput.indexOf(" ")));
//         console.log(userInput.substring(userInput.indexOf(" ")+1));
//     }
//     else{
//         console.log("there is no space");
//         console.log(userInput);
//     }

// }
// getUserFullName(prompt("enter your full name"));
// ******************************__15___***********************************


// ******************************__16___***********************************
// function getCharLowCase (str1, str2){
//     if(str1.toLowerCase() == str2.toLowerCase()){
//         return "the same";
//     }
// }
// console.log(getCharLowCase("MARCOS", "marcos"));
// ******************************__16___***********************************


// ******************************__17___***********************************
// function getCharUpCase (str1, str2){
//     if(str1.toUpperCase() == str2.toUpperCase()){
//             return "the same";
//         }
//     }
// console.log(getCharUpCase("MarCos", "MaRcOS"));
// ******************************__17___***********************************


// ******************************__18___***********************************
// function userInputName(firstName, lastName) {
//     if(firstName.length > lastName.length){
//         console.log(firstName);
//     }
//     else if(lastName.length > firstName.length){
//         console.log(lastName);
//     }
//     else{
//         console.log("same length");
//     }
// }
// userInputName(prompt("enter first name"), prompt("enter last name"));
// ******************************__18___***********************************


// ******************************__19___***********************************
// function userInputName19(firstName, lastName) {
//     if (firstName.indexOf("a") != -1) {
//         console.log("a is here");
//     }
//     if (lastName.indexOf("api") != -1) {
//         console.log("api is here");
//     }
// }

// userInputName19(prompt("enter first name"), prompt("enter last name"));
// ******************************__19___***********************************


// ******************************__20___***********************************
// function longOrShort (str){
//     if(str.length > 5){
//         return "long";
//     }
//     return "short"
// }
// let result = longOrShort ("aaaaa");
// console.log(result);
// ******************************__20___***********************************


// ******************************__21___***********************************
// function yesOrNo(counrtyName) {
//     if(counrtyName.length < 3){
//         return "yes";
//     }
//     return"no";
// }
// let result = yesOrNo ("usa");
// console.log(result);
// ******************************__21___***********************************


// ******************************__22___***********************************
// function checkSixChars (str, char){
//     if(str.length > 6){
//         return str;
//     }
//     return str.indexOf(char);
// }
// let result = checkSixChars ("abcde", "d");
// console.log(result);
// ******************************__22___***********************************


// ******************************__23___***********************************
// function checkCharInString(str, char) {
//     if(str.indexOf(char) != -1){
//         return str.indexOf(char);
//     }
//     return str;
// }
// let result = checkCharInString ("vvbbnn", "n");
// console.log(result);
// ******************************__23___***********************************


// ******************************__24___***********************************
// function fullNameWithUpperCase(firstName, lastName){
//     let fNameLetter = firstName.substr(0,1);
//     let lNameUpperCase = lastName.toUpperCase();
//     return `${fNameLetter}. ${lNameUpperCase}`;
// }
// let result = fullNameWithUpperCase("marcos", "bazbih");
// console.log(result);
// ******************************__24___***********************************


// ******************************__25___***********************************
// function twoNames (nameOne, nameTwo){
//     if(nameOne.length > nameTwo.length){
//         console.log(nameTwo.toLowerCase());
//         return nameOne;
//     }
//     else if(nameTwo.length > nameOne.length){
//         console.log(nameOne.toLowerCase());
//         return nameTwo;

//     }
//     else{
//         return "the same length";
//     }
// }
// let result = twoNames("AAAA", "BBB");
// console.log(result);
// ******************************__25___***********************************


// ******************************__26___***********************************
// function CharIsHere (myName, char){
//     if(myName.indexOf(char) != -1){
//         return myName;
//     }
//     console.log("not found");
// }
// let result = CharIsHere("marcos", "r");
// console.log(result);
// ******************************__26___***********************************


// ******************************__math___1___***********************************
// function zeroTo100(){
//     return Math.random()*100;
// }
// console.log(zeroTo100());
// ******************************__math___1___***********************************


// ******************************__math___2___***********************************
// function zeroTo10000(){
//     return Math.random()*10000;
// }
// console.log(zeroTo10000());
// ******************************__math___2___***********************************


// ******************************__math___3___***********************************
// function zeroTo55(){
//     return Math.random()*55;
// }
// console.log(zeroTo55());
// ******************************__math___3___***********************************


// ******************************__math___4___***********************************
// function userNumMath(userInputNum){
//     return Math.random()*userInputNum;
// }
// console.log(userNumMath(Number(prompt("enter a number"))));
// ******************************__math___4___***********************************


// ******************************__math___5___***********************************
// function userNum0To10 (userInput){
//     let randomNumber = Math.floor(Math.random()*10);
//     if(userInput < 10){
//         if(userInput == randomNumber){
//             console.log(randomNumber);
//             return "good job";
//         }
//         else{
//             console.log(randomNumber);
//             return "try again";

//         }
//     }
//     else{
//         return "choose a number under 10"
//     }
// }
// console.log(userNum0To10(Number(prompt("enter a number under 10"))));
// ******************************__math___5___***********************************


// ******************************__math___6___***********************************
// function userNum0To100 (userInput){
//     let randomNumber = Math.floor(Math.random()*100);
//     if(userInput < 100){
//         if(userInput == randomNumber){
//             console.log(randomNumber);
//             return "good job";
//         }
//         else{
//             console.log(randomNumber);
//             return "try again";

//         }
//     }
//     else{
//         return "choose a number under 100"
//     }
// }
// console.log(userNum0To100(Number(prompt("enter a number under 100"))));
// ******************************__math___6___***********************************


// ******************************__math___7___***********************************
// function checkUserNum(firstName, num) {
//     let randomNumber = Math.floor(Math.random() * 10);
//     if (num < 10) {
//         if (num == randomNumber) {
//             console.log(randomNumber);
//             console.log(`${firstName} won with the number ${num}`);
//         }
//         else {
//             console.log(randomNumber);
//             console.log(`${firstName} lost`);
//         }
//     }
//     else{
//         console.log("choose a number under 10"); 
//     }
// }
// checkUserNum(prompt("enter your name"), Number(prompt("enter your number")));
// ******************************__math___7___***********************************