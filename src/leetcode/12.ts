function intToRoman(num: number): string {
  let res:string = "";
  const value:number [] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerals:string [] = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
  for (let i = 0; num; i++)
    while (num >= value[i]){
        res += numerals[i];
         num -= value[i];
    }
  return res;
}

module.exports = intToRoman;
{
  let result: any[] = null;
  let expected: any[] = null;

  const setErr = (result, expected) => {
    return `Test Case Failed = > Expected: ${expected} but Received: ${result}`;
  };
  const assert = require("assert");

  const testcase = (input, expect) => {
    result = intToRoman.apply(null, input);
    //result = input;
    expected = expect;

    console.log("Output: ", result);
    console.log("Expected: ", expected);

    assert.ok(result, expected, new Error(setErr(result, expected)));
  };

  testcase([1994], "MCMXCIV");
}
