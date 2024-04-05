// Define the receivesAFunction function
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  // Define the returnsANamedFunction function
  function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      console.log("This is a named function.");
    }
    // Return the named function
    return namedFunction;
  }
  
  // Define the returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  
  module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
  