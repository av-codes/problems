function searchInsert(nums: number[], target: number): number {
  console.log("Start: ", nums, target);

  let left: number = 0,
    pivot: number = 0,
    right: number = nums.length - 1;

  while (left <= right) {
    pivot = Math.floor((left + right) / 2);
    console.log(left, pivot, right);

    if (nums[pivot] == target) {
      break;
    } else {
      if (left == right) {
        pivot = -1;
        console.log(left, pivot, right);
        break;
      } else {
        if (pivot == 0) {
          pivot = nums[1] == target ? 1 : -1;
          console.log(left, pivot, right);
          break;
        }
      }
      if (target < nums[pivot]) {
        right = pivot - 1;
        console.log(left, pivot, right);
      } else {
        left = pivot + 1;
        console.log(left, pivot, right);
      }
    }
  }
  if (pivot == -1) {
    console.log(left, pivot, right);
    pivot =
      target < nums[left] ? left : target < nums[right] ? right : right + 1;
    nums.splice(pivot, 0, target);
    console.log("Changed Array: ", nums);
  }

  console.log("Return: ", left, pivot, right);

  return pivot;
}

module.exports = searchInsert;

let result: number = 0;
let expected: number = 0;

const assert = require("assert");
const err = new Error(
  `Test Case Failed = > Expected: ${expected} but Received: ${result}`
);

// result = searchInsert([1,3,5,6], 0)
// expected = 0;

// result = searchInsert([1,3,5,6], 2)
// expected = 1;

result = searchInsert([1, 3], 4);
expected = 2;

console.log("Output: ", result);
console.log("Expected: ", expected);

assert.ok(result == expected, err);
