function twoSum1(numbers: number[], target: number): number[] {
    console.log("Input: ",numbers, target);
    let result:number [] =[];
    numbers.forEach((e1,k1) => {

        console.log([k1, e1]);

        for(let i:number=k1+1;i<numbers.length;i++){
               if(target==e1+numbers[i]){
                    result= [k1+1, i+1];
                    break;
               }
               else{
                   console.log("Skipping Pair: ", [k1,i], [e1, numbers[i]]);
               }
        }
    });
    console.log("Returning: ",result);
    return result;
};

module.exports = twoSum1;
{
    let result:any= null;
    let expected:any= null;

    const setErr = (result,expected)=>{
       return `Test Case Failed = > Expected: ${expected} but Received: ${result}`;
    }
    const assert = require('assert');

    const testcase = (input, expect) => {
        result = twoSum1.apply(null, input);
        expected = expect;
        
        console.log("Output: ",result)
        console.log("Expected: ",expected)
        
        assert.ok(result,expected,new Error(setErr(result,expected)));
    }

    //testcase([[2,7,11,15], 9],[1,2]);    
    testcase([[2,3,4], 6],[1,3]);
   
}