//* `indexedChars` - adds the index of each character before that character in the given string
  //* Examples:
   // * indexedChars('hello') -> '0h1e2l3l4o'
   // * indexedChars('bye') -> '0b1y2e'
  //* Hints: 
   // * We can add something BEFORE the current character as well!

   function index(str){  // function is the name of the funtion. str is the string.
    let strI = '' // the empty qoutes is a starting place
    for (let i = 0; i < str.length; i++){ // the four statement is stating "i" point 0 and aslong 
                                         //as i is shorter then the leant the following will continue to run. 
        strI =  strI + [i] + str[i];     // strI is starting off with a empty string see line 27 above
                                       // Then its taking the first letter of the string and adding a an "1" and then so on
    }
    console.log(strI);                 
}
let str1 = 'hello'; // this will replace line 27 or 
index(str1);