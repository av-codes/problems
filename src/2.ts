class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let output: number[] = [];
  let carry: number = 0;
  let sum: number = 0;
  let rem: number = 0;
  let a: number = 0;
  let b: number = 0;
  while (l1 || l2 || carry) {
    a = l1 ? l1.val : 0;
    b = l2 ? l2.val : 0;
    sum=a + b + carry;
    rem=sum % 10;
    carry = ~~(sum / 10);
    output.push(rem);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (output.length > 1 && output[output.length - 1] == 0) {
    output.pop();
  }
  return makeList(output);
}

function makeList(nums: number[]): ListNode {
  let listHead: ListNode = new ListNode(null);
  while (nums.length > 0) {
    let newNode: ListNode = new ListNode(nums[nums.length - 1]);
    nums.splice(nums.length - 1, 1);
    if (listHead.val != null) {
      newNode.next = listHead;
    }
    listHead = newNode;
  }
  return listHead;
}

function addTwoNumbersP(l1: number[], l2: number[]): ListNode {
  let p: ListNode = makeList(l1);
  let q: ListNode = makeList(l2);
  return addTwoNumbers(p, q);
}

module.exports = addTwoNumbersP;
