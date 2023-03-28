
// ///Qn1- Create one function with zero parameter having a console statement;
// function hii() {
//     console.log("ANS1- hii");
//     return "ANS1- hii"
// }
// let qn1 = hii();
// document.getElementById("qn1").innerHTML= qn1 ;

// ////Qn2 -Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

// function add(a,b) {
//     console.log("ANS2- a + b =",a+b);
//     return `ANS2- a + b = ${a+b} `;
// }
// let qn2 = add(3,4)
// document.getElementById("qn2").innerHTML= qn2 ;
// ////Qn3- Create one arrow function

// let myFunction =((a, b) => {
//     console.log("ANS3- a * b =",a*b) 
//     return `ANS3- a + b = ${a*b} `
// });
// let qn3 = myFunction(4,3);
// document.getElementById("qn3").innerHTML = qn3;

////////Qn4 = 

// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();

// {
// var x = 21;
// var girl = function () {   
//     console.log("ANS4 = "+ x);
//     document.getElementById("qn4").innerHTML ="ANS 4 = "+ x ;
//     var x = 20;
// };
// girl ();

// }
//////////Qn5 = 


// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };



// var x1 = 21;
// let qn52 = girl ();
//  console.log("ANS 52 = " + x1)
//  let qn51="ANS 52 = " + x1;
// document.getElementById("qn52").innerHTML = qn52;

// function girl() {
//     console.log("ANS51 = "+ x1);
//     document.getElementById("qn51").innerHTML = "ANS51 = "+ x1 ;
//     var x1 = 20;
// };

//////////Qn6 = 
// var x = 21;
// a();
// b();
//   function a() {
    
//    x = 20;
//   console.log(x);
// };
//  function b() {
    
//     x = 40;
//    console.log(x);
// };


////////Qn7 =Write a function that accepts parameter n and returns factorial of n

function call(n) {
  // console.log("n",n);
  return `n ${n}`;
}
r=call(10);
document.getElementById("Q7").innerHTML=r;

///////////////////////day2
////////////////////////Qn1


// function FindSum(a, b){
// return a + b;
// }

// function DisplayData(data, batch){
// console.log(`i am from ${data} and My batch is EA${batch}`)
// }

// DisplayData("PrepBytes", FindSum(10, 9));

////////////////////////Qn2
// Abc();
// const Abc = function(){
// let value = 20;
// console.log(value);
// }



////////////////////////Qn3
// var a = 10;
// (function (){
// console.log(a);
// var a = 20;
// })();


////////////////////////Qn4

const greet = function(name){
return function(m){

console.log(`Hi!! ${name}, ${m}`);
}
}

const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")
