function reverseWords(s: string): string {
    const words = s.split(' ');

  // Reverse the characters in each word
  const reversedWords = words.map(word => word.split('').reverse().join(''));

  // Join the reversed words with the original whitespace
  return reversedWords.join(' ');
};

module.exports = reverseWords;
{
    let result:any []= null;
    let expected:any []= null;

    const setErr = (result,expected)=>{
       return `Test Case Failed = > Expected: ${expected} but Received: ${result}`;
    }
    const assert = require('assert');
    
    const testcase = (input, expect) => {
        result = reverseWords.apply(null, input);
        //result = input;
        expected = expect;
        
        console.log("Output: ",result)
        console.log("Expected: ",expected)
        
        assert.ok(result,expected,new Error(setErr(result,expected)));
    };

    testcase([ "Let's take LeetCode contest"], "s'teL ekat edoCteeL tsetnoc"); 
    testcase(["God Ding"], "doG gniD"); 
}