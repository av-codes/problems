class ListNode2 {
  val: number;
  next: ListNode2 | null;
  constructor(val?: number, next?: ListNode2 | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
};

function addTwoNumbers(
  l1: ListNode2 | null,
  l2: ListNode2 | null
): ListNode2 | null {
  let output: number[] = [];
  let carry: number = 0;
  let sum: number = 0;
  let rem: number = 0;
  let a: number = 0;
  let b: number = 0;
  while (l1 || l2 || carry) {
    a = l1 ? l1.val : 0;
    b = l2 ? l2.val : 0;
    sum = a + b + carry;
    rem = sum % 10;
    carry = ~~(sum / 10);
    output.push(rem);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (output.length > 1 && output[output.length - 1] == 0) {
    output.pop();
  }
  return makeList2(output);
}

function makeList2(nums: number[]): ListNode2 {
  let listHead: ListNode2 = new ListNode2(null);
  while (nums.length > 0) {
    let newNode: ListNode2 = new ListNode2(nums[nums.length - 1]);
    nums.splice(nums.length - 1, 1);
    if (listHead.val != null) {
      newNode.next = listHead;
    }
    listHead = newNode;
  }
  return listHead;
}

function addTwoNumbersP(l1: number[], l2: number[]): ListNode2 {
  let p: ListNode2 = makeList2(l1);
  let q: ListNode2 = makeList2(l2);
  return addTwoNumbers(p, q);
}

module.exports = {addTwoNumbersP, makeList2, ListNode2};
