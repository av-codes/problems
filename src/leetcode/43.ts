function multiply(num1: string, num2: string): string {
  // Convert the input strings to arrays of digits
  const num1Arr = num1.split("").map((c) => parseInt(c));
  const num2Arr = num2.split("").map((c) => parseInt(c));

  // Initialize an array to hold the result with the correct number of zeros
  const result = new Array(num1Arr.length + num2Arr.length).fill(0);
  //const result = "0".repeat(num1Arr.length + num2Arr.length);

  // Perform grade school multiplication, starting with the least significant digits
  for (let i = num1Arr.length - 1; i >= 0; i--) {
    for (let j = num2Arr.length - 1; j >= 0; j--) {
      result[i + j + 1] += num1Arr[i] * num2Arr[j];
      result[i + j] += Math.floor(result[i + j + 1] / 10);
      result[i + j + 1] %= 10;
    }
  }

  // Remove leading zeros
  let startIndex = 0;
  while (result[startIndex] === 0 && startIndex < result.length - 1) {
    startIndex++;
  }

  // Convert the result array to a string and return it
  return result.slice(startIndex).join("");
}

module.exports = multiply;
{
  let result: any[] = null;
  let expected: any[] = null;

  const setErr = (result, expected) => {
    return `Test Case Failed = > Expected: ${expected} but Received: ${result}`;
  };
  const assert = require("assert");

  const testcase = (input, expect) => {
    result = multiply.apply(null, input);
    //result = input;
    expected = expect;

    console.log("Output: ", result);
    console.log("Expected: ", expected);

    assert.ok(result, expected, new Error(setErr(result, expected)));
  };

  testcase(["2","3"], "6");
  testcase(["123", "456"], "56088");
}
