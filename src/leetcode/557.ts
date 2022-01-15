function reverseWords(s: string): string {
    return '';
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
}