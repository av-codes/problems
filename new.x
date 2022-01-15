function FUNC(num1: string, num2: string): string {
 return "";
};

module.exports = FUNC;
{
     let result:any []= null;
    let expected:any []= null;

    const setErr = (result,expected)=>{
       return `Test Case Failed = > Expected: ${expected} but Received: ${result}`;
    }
    const assert = require('assert');
    
    function testcase(input, expect) {
        result = reverseString.apply(null, input);
        result = input;
        expected = expect;
        
        console.log("Output: ",result)
        console.log("Expected: ",expected)
        
        assert.ok(result,expected,new Error(setErr(result,expected)));
    }

    testcase([[2,7,11,15], 9],[1,2]); 
}