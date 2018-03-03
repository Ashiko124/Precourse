// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  return (n <= 1) ? n : (n * nFactorial(n - 1));
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // Remember to ask about how this works. 
     const arrays = [1, 2];
    for (let i = 0; i < n; i++) {
       arrays.push(arrays[arrays.length - 1] + arrays[arrays.length - 2]);
      }
      return arrays[n - 1];
    
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
