function lengthOfLongestSubstring(s: string): number {
  // initialize variables to store the length of the longest substring and the current substring
  let maxLength = 0;
  let currLength = 0;
  // create a set to store the characters seen in the current substring
  const seen = new Set<string>();

  // iterate through the string
  for (let i = 0; i < s.length; i++) {
    // if the current character has not been seen
    if (!seen.has(s[i])) {
      // add it to the set
      seen.add(s[i]);
      // increment the current length
      currLength++;
      // update the max length if necessary
      maxLength = Math.max(maxLength, currLength);
    }
    // otherwise, the current character has been seen
    else {
      // remove the first character in the current substring from the set
      seen.delete(s[i - currLength]);
      // decrement the current length
      currLength--;
    }
  }

  return maxLength;
};

module.exports = lengthOfLongestSubstring;

{
  let result: any[] = null;
  let expected: any[] = null;

  const setErr = (result, expected) => {
    return `Test Case Failed = > Expected: ${expected} but Received: ${result}`;
  };
  const assert = require("assert");

  const testcase = (input, expect) => {
    result = lengthOfLongestSubstring.apply(null, input);
    console.log("Output: ", { input });
    //result = input;
    expected = expect;

    console.log("Output: ", { result });
    console.log("Expected: ", { expected });

    assert.ok(result, expected, new Error(setErr(result, expected)));
  };

  testcase(["abcabcbb"], 3);
  testcase(["bbbbb"], 1);
  testcase(["pwwkew"], 3);
  testcase(["aab"], 2);
}