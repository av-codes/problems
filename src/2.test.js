const funcloaded = require('./2');
class ListNode {
    val;
    next;
    constructor(val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  
function makeList(nums ) {
  let listHead = new ListNode(null);
  while (nums.length > 0) {
    let newNode = new ListNode(nums[nums.length - 1]);
    nums.splice(nums.length - 1, 1);
    if (listHead.val != null) {
      newNode.next = listHead;
    }
    listHead = newNode;
      listHead = newNode; 
  }
  return listHead;
}
describe('2. Add Two Numbers', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcloaded([2,4,3], [5,6,4])).toEqual(makeList([7,0,8]));
    });

    it('Test Case 2', () => {

        expect(funcloaded([0],[0])).toEqual(makeList([0]));
    });
    it('Test Case 3', () => {

        expect(funcloaded([9,9,9,9,9,9,9], [9,9,9,9])).toEqual(makeList([8,9,9,9,0,0,0,1]));
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});