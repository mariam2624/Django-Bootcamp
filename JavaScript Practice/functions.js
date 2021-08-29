function helloWorld() {
   console.log("Hello");
}

function helloYou(name) {
   console.log("Hello "+name);
}

function addNum(num1,num2) {
   console.log(num1+num2);

}

//   default parameters
function helloSomeone(name="Ashir") {
   console.log("Hello "+name);
}

function formal(Name="Mariam",title="Ms."){
  return title+" "+ Name;                   // if you want to save the results of the function.
}

function timesFive(numInput) {
    // local scope of the variable
      var result =  numInput * 5
      return result;

}

//    Global variable
var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff) {
  console.log(v);
  stuff = "Reassign stuff inside function"
  console.log(stuff);
}

fun();
console.log(stuff);
