
/////////////////q1
// function counter(){
//     var counter = 0;
    
//     function IncreaseCounter() {
//     return counter += 1;
//     };
    
//     return IncreaseCounter;
//     }
    
    // var counter = counter();
    // alert(counter());
    // alert(counter());
    // alert(counter());
    // alert(counter());
    // console.log(counter());
    // console.log(counter());
    // console.log(counter());
    // console.log(counter());

    //////////////////QN2
    // let count = 0;
    // (function () {
    // if (count === 0) {
    // let count = 1;
    // console.log("HII",count); // What is logged?
    // }
    // console.log("I",count); // What is logged?
    // })();


    ////////////QN3
    // for (var i = 0; i < 3; i++) {
    //     setTimeout(function log() {
    //     console.log(i); // What is logged?
    //     }, 1000);
    //     }
//////QN6
// Print Output

// var a = 12;
// (function () {
// // alert(a);
// console.log(a);
// })();


//////////qn7
// var a = 10;
// var x = (function () {
// var a = 12;
// return function () {
// // alert(a);
// console.log(a);
// };
// })();
// x();


//////////////qn8
// var globalVar = "xyz";

// (function outerFunc(outerArg) {
// var outerVar = 'a';

// (function innerFunc(innerArg) {
// var innerVar = 'b';

// console.log(
// "outerArg = " + outerArg + "\n" +
// "innerArg = " + innerArg + "\n" +
// "outerVar = " + outerVar + "\n" +
// "innerVar = " + innerVar + "\n" +
// "globalVar = " + globalVar);

// })(456);
// })(123);

//////Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function length(l) {
    function bearth(b) {
        let a=l*b;
        return a;
    }
   return bearth(4)
    
}
console.log(length(3));
