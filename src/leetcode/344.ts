/**
 Do not return anything, modify s in-place instead.
 */
 function reverseString(s: string[]): void {
    console.log('Input: ',s);
    // let cur:number = 0;
    // while(cur<s.length){

    //     let element=s.pop();
    //     s.splice(cur,0,element);
    //     cur++;
    //     console.log(element,cur,s.length,s);
    // }
    s.reverse();
};

module.exports = reverseString;
{
    let result:any []= null;
    let expected:any []= null;

    const setErr = (result,expected)=>{
       return `Test Case Failed = > Expected: ${expected} but Received: ${result}`;
    }
    const assert = require('assert');
    
    const testcase = (input, expect) => {
        result = reverseString.apply(null, input);
        result = input;
        expected = expect;
        
        console.log("Output: ",result)
        console.log("Expected: ",expected)
        
        assert.ok(result,expected,new Error(setErr(result,expected)));
    }
    
    testcase([["h","e","l","l","o"]],["o","l","l","e","h"]); 
}