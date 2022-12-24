// /**
//  * Definition for singly-linked list.
//  * class ListNode5961 {
//  *     val: number
//  *     next: ListNode5961 | null
//  *     constructor(val?: number, next?: ListNode5961 | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */
class ListNode5961 {
  val: number;
  next: ListNode5961 | null;
  constructor(val?: number, next?: ListNode5961 | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
};

function pairSum(head: ListNode5961 | null): number {
  let sum = 0;
  let currentNode = head;

  while (currentNode && currentNode.next) {
    sum += currentNode.val + currentNode.next.val;
    currentNode = currentNode.next.next;
  }

  return sum;
}
function makeList5961(nums: number[]): ListNode5961 {
  let listHead: ListNode5961 = new ListNode5961(null);
  while (nums.length > 0) {
    let newNode: ListNode5961 = new ListNode5961(nums[nums.length - 1]);
    nums.splice(nums.length - 1, 1);
    if (listHead.val != null) {
      newNode.next = listHead;
    }
    listHead = newNode;
  }
  return listHead;
}
module.exports = {
  pairSum,
  makeList5961,
  ListNode5961,
};
{
  let result: any[] = null;
  let expected: any[] = null;

  const setErr = (result, expected) => {
    return `Test Case Failed = > Expected: ${expected} but Received: ${result}`;
  };
  const assert = require("assert");

  const testcase = (input, expect) => {
    result = pairSum.apply(null, input);
    console.log("Output: ", { input });
    //result = input;
    expected = expect;

    console.log("Output: ", {result});
    console.log("Expected: ", {expected});

    assert.ok(result, expected, new Error(setErr(result, expected)));
  };

  testcase([makeList5961([5, 4, 2, 1])], 6);
  testcase([makeList5961([4, 2, 2, 3])], 7);
  testcase([makeList5961([1, 100000])], 100001);
}
