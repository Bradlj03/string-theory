//exclaim` - returns the given sentence with every question mark or period changed to an exclamation point
  //* Examples:
    //* exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
    //* exclaim('This is fine.') -> 'This is fine!'

    var statement = "What are you doing?"
     console.log(statement.replace("?","!"));