//
// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
//
// Example 1:
//
// Input: a = 1, b = 2
// Output: 3
/**
 // * @param {number} a
 // * @param {number} b
 // * @return {number}
 */
// var getSum = function(a, b) {
//      return (b===0 ? a : getSum(a^b, (a&b) << 1));
// };

var getSum = function(a, b) {
  if (a === 0) return b;
    console.log("a",b)
  if (b === 0) return a;
console.log("b",a)
console.log("---")
  while (b !== 0) {
    var carry = a & b;
      console.log("1",carry)
    a = a ^ b;
      console.log("2",a)
    b = carry << 1;
      console.log("3",b)
      console.log("---")
  }

  return a;
}
