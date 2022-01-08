function addBinary(a: string, b: string): string {
  let carry:number =0;
  let sum:number =0;
  let newdigit:number = 0;
  let arrA: number[] = a.split('');
  let arrB: number[] = b.split('');
  let result:number[] = [];
  for(let i=arrA.length-1; i>=0;i--){
     sum = arrA[i]+carry;
     carry = Math.floor(sum/10);
     newdigit =sum%10;
     result.unshift(newdigit);
  }
  carry ? result.unshift(carry): 0 ;
  return result;
};

module.exports = addBinary;
