function search(nums: number[], target: number): number {
  let left: number = 0,
    right: number = nums.length - 1,
     pivot: number = 0;
  while (left <= right) {
     pivot = Math.floor((left+right) / 2);
     console.log(left,pivot,right)

    if (nums[pivot] == target) {
      break;
    } else {
        if(left == right){
            pivot=-1;
            break;
        }
        else{
            if(pivot == 0){
                pivot = nums[1] == target ? 1 : -1;
                break;
        }}
      if (target < nums[pivot]) {
        right = pivot - 1; 
      } else {
        left = pivot + 1;
      }
    }
  }
  return pivot;
}
module.exports = search;
console.log(search([2,5],0));




