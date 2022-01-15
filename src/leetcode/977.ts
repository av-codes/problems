function sortedSquares(nums: number[]): number[] {
    let result: number []=[];
    console.log("Input: ", nums);
    nums.forEach(element => {
        result.push(element**2);
    });
    console.log(result);
    result.sort((a,b)=>{ return a-b});
    console.log(result);
    return result;
};

module.exports = sortedSquares;
{
    let result:number []= [];
    let expected:number []= [];

    const setErr = (result,expected)=>{
       return `Test Case Failed = > Expected: ${expected} but Received: ${result}`;
    }
    const assert = require('assert');
    
    result = sortedSquares([-4,-1,0,3,10])
    expected = [0,1,9,16,100];
    
    console.log("Output: ",result)
    console.log("Expected: ",expected)
    
    //assert.ok(result==expected,new Error(setErr(result,expected)));
}

