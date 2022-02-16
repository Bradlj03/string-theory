//* `ciEmailify` - creates an email from a two-part name
  //* Examples:
  //  * ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
  //  * ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'

  function ciEmailify(str) {
    let result = "";
 
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        result = result + ".";
      } else {
        result = result + str[i];
      }
    }
    return result.toLowerCase() + "@codeimmersives.com";
  }
 
  console.log(ciEmailify("Jason Bradley"));