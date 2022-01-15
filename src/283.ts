/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): number[] {
    //console.log('Input: ',nums);
    let c:number =0;
    for(let i=0;i<nums.length-c;i++){
        if(nums[i]==0){
            nums.splice(i,1);
            nums.push(0);
            i--;
            c++;
            //console.log('Input: ',nums);
        }
    }        
    return nums;
};

module.exports = moveZeroes;
{
    let result:number []= [];
    let expected:number []= [];

    const setErr = (result,expected)=>{
       return `Test Case Failed = > Expected: ${expected} but Received: ${result}`;
    }
    const assert = require('assert');
    
    // result = moveZeroes([0,1,0,3,12])
    // expected = [1,3,12,0,0];

    result = moveZeroes([0,0,1])
    expected = [1,0,0];
    
    console.log("Output: ",result)
    console.log("Expected: ",expected)
    
    assert.ok(result,expected,new Error(setErr(result,expected)));
}