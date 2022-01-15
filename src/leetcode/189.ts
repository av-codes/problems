/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): number[] {
    //console.log('Input: ', nums, k);
    while(k>0){
        k--;
        let num =nums.pop();
        nums.unshift(num);
        //console.log(nums);
    }
    return nums;
};

module.exports = rotate;
{
    let result:number []= [];
    let expected:number []= [];

    const setErr = (result,expected)=>{
       return `Test Case Failed = > Expected: ${expected} but Received: ${result}`;
    }
    const assert = require('assert');
    
    result = rotate([-1,-100,3,99], 2)
    expected =  [3,99,-1,-100];


    
    
    console.log("Output: ",result)
    console.log("Expected: ",expected)
    
    assert.deepEqual(result,expected,new Error(setErr(result,expected)));
}

