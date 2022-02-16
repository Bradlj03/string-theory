//* `repeatIt` - returns the given string repeated `n` times, where `n` is the second parameter
//* Examples: //* repeatIt('beetlejuice', 3) -> 'beetlejuicebeetlejuicebeetlejuice'
//* repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'

let multi = 8;
let str = "oh hi!";
let multiStr = "";

for(let i = 0; i < multi; i++){
  multiStr += str
}
console.log(multiStr); 