function addBinary(a: string, b: string): string {
  // initialize variables to store the sum and carry
  let sum = "";
  let carry = 0;

  // iterate through the strings from right to left
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    // get the ith digit of each string, or 0 if the string is not long enough
    const ai = parseInt(a[a.length - 1 - i]) || 0;
    const bi = parseInt(b[b.length - 1 - i]) || 0;

    // add the digits and the carry
    let digitSum = ai + bi + carry;

    // if the sum is greater than or equal to 2
    if (digitSum >= 2) {
      // set the carry to 1
      carry = 1;
      // set the sum to the remainder
      digitSum = digitSum % 2;
    }
    // otherwise, set the carry to 0
    else {
      carry = 0;
    }

    // append the sum to the result string
    sum = digitSum.toString() + sum;
  }

  // if there is a carry left over
  if (carry === 1) {
    // append the carry to the result string
    sum = "1" + sum;
  }

  return sum;
};

module.exports = addBinary;
