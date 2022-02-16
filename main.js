
//console.log(xify("Hi There"))

//function xify(str){
  //  let strx= "";
    //str.length
//for (let count = 0; count < str.length; count++) {
  //  strx += '*';
//}
//return strx;
//}

//console.log(yellingChars("Hi There"))

//function yellingChars(str){
//    let strx= "";
//    str.length
//for (let count = 0; count < str.length; count++) {
//    strx += '*';
//}
//return strx;
//}

///////////////////////////////////////////////////////////////

//function yellowChars(str){  // function is the name of the funtion. str is the string.
  //  let strI = '' // the empty qoutes is a starting place
    //for (let i = 0; i < str.length; i++){ // the four statement is stating "i" point 0 and aslong 
                                         //as i is shorter then the leant the following will continue to run. 
      //  strI = strI + str[i] + '!';     // strI is starting off with a empty string see line 27 above
                                       // Then its taking the first letter of the string and adding a an "1" and then so on
    //}
    //console.log(strI);                 
//}
//let str1 = 'goodness'; // this will replace line 27 or 
//yellowChars(str1);

//* `indexedChars` - adds the index of each character before that character in the given string
  //* Examples:
   // * indexedChars('hello') -> '0h1e2l3l4o'
   // * indexedChars('bye') -> '0b1y2e'
  //* Hints: 
   // * We can add something BEFORE the current character as well!

function index(str){
    let strx = ''
    let index = 0
    for (let i of str){
        strx +- index;
        strx +- i;
        index = index + 1;
    }
    console.log(strx);
}
let str1 = "jason";
index(str1);

let str2 = "bye";
index(str2);