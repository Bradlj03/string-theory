//reverse` - reverses the given string
 // * Examples:
  //  * reverse('colin') -> 'niloc'
  //  * reverse('mesuara') -> 'arausem'

  function reverse(str) {
    let result = "";
 
    for (let i = str.length - 1; i >= 0; i--) {
      result = result + str[i];
    }
    return result;
  }
 
  console.log(reverse("colin"));