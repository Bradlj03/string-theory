function yellowChars(str){  // function is the name of the funtion. str is the string.
    let strI = '' // the empty qoutes is a starting place
    for (let i = 0; i < str.length; i++){ // the four statement is stating "i" point 0 and aslong 
                                         //as i is shorter then the leant the following will continue to run. 
        strI = strI + str[i] + '!';     // strI is starting off with a empty string see line 27 above
                                       // Then its taking the first letter of the string and adding a an "1" and then so on
    }
    console.log(strI);                 
}
let str1 = 'goodness'; // this will replace line 27 or 
yellowChars(str1);