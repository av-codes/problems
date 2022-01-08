function plusOne(digits: number[]): number[] {
  let carry:number =1;
  let sum:number =0;
  let newdigit:number = 0;
  let result:number[] =[];
  for(let i=digits.length-1; i>=0;i--){
     sum = digits[i]+carry;
     carry = Math.floor(sum/10);
     newdigit =sum%10;
     result.unshift(newdigit);
  }
  carry ? result.unshift(carry): 0 ;
  return result;
};

module.exports = plusOne;
