// import {apiKey} from "./util.js";

// import apiKey from "./util.js";

// console.log(apiKey);
//
// import {export1, export2} from "./util.js";

// import * as utils from "./util.js";
//
// console.log(utils.export1);
// console.log(utils.export2);
// console.log(utils.default);

//-----------------------------------------------------------------------------------------------
//
// function method1() {
//     console.log("Method 1")
// }
//
// function method2(userName, message) {
//     console.log(userName);
//     console.log(message);
// }
//
// function method3(userName, message = "hello world") {
//     console.log(userName);
//     console.log(message);
// }
//
// function getFullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }
//
// method1();
// console.log("-------------------");
// method2("sandeera", "Hello world 1");
// console.log("-------------------");
// method3("Uthpala");
// console.log("-------------------");
// method3("Uthpala", "Hello world 2");
// console.log("-------------------");
//
// console.log(getFullName("John", "Cena"));
//
// const user = {
//     name: "John", age: 32, greet() {
//         console.log("Hello world");
//     }
// };
// console.log(user);
// user.greet();

//-----------------------------------------------------------------------------------------------

// const hobbies = ["aaa", "bbb", "ccc"];
// console.log(hobbies);
// console.log(hobbies[1]);
//
// const index = hobbies.findIndex(item => item === "ccc");
// console.log(index);
//
// const editedHobbies = hobbies.map(item => item + "!");
// console.log(editedHobbies);
//
// const objectHobbies = hobbies.map(item => ({text: item}));
// console.log(objectHobbies);
//
// const mergedHobbies = [...hobbies, ...editedHobbies];
// console.log(mergedHobbies);
//
// for (const hb of mergedHobbies) {
//     console.log(hb);
// }
//
//
// function transformToObjects(numberArray) {
//     // Todo: Add your logic
//     // should return an array of objects
//     return numberArray.map(num => ({val: num}));
// }
//
// const [firstName, lastName] = ["Sandeera", "Jayampathi"];
// console.log(firstName);
// console.log(lastName);
//
// const {name: username, age} = {
//     name: "John",
//     age: 3
// }
//
// console.log(username);
// console.log(age);
//
// const list = document.querySelector("ul");
// list.remove();
//
//
// function handleTimeOut1(){
//     console.log("Timed Out 1");
// }
//
// const handleTimeOut2 = () => {console.log("Timed Out 2");};
// // not use () after giving method name as parameter
// setTimeout(handleTimeOut1, 2000);
// setTimeout(handleTimeOut2, 4000);
// setTimeout(()=>{console.log("Time Out 3")}, 6000);
//
// function hello1(helloFn){
//     helloFn();
// }
//
// hello1(()=>{console.log("Hello World Function!")});

//-----------------------------------------------------------------------------------------------

function greet1(){
    function greet2(){
        console.log("Hello World!");
    }
    greet2();
}

greet1();
