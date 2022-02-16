//* `truncate` - shortens a long string to 15 characters plus an ellipsis (...)
  //* Examples:
    //* truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
    //* truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..

    text_truncate = function(str, length, ending) {
    
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending;
        } else {
          return str;
        }
      };
    console.log(text_truncate('The fault, dear Brutus, is not in our stars, but in ourselves.',15,'...'))
    console.log(text_truncate('Well, thats just, like, your opinion man.',15,'...'))
    
    