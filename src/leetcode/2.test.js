const f2 = require('./2');

const { addTwoNumbersP, makeList2, ListNode2 } = f2

const funcLoaded = addTwoNumbersP;
// class ListNode2 {
//     val;
//     next;
//     constructor(val, next) {
//       this.val = val === undefined ? 0 : val;
//       this.next = next === undefined ? null : next;
//     }
//   }
  
// function makeList2(nums ) {
//   let listHead = new ListNode2(null);
//   while (nums.length > 0) {
//     let newNode = new ListNode2(nums[nums.length - 1]);
//     nums.splice(nums.length - 1, 1);
//     if (listHead.val != null) {
//       newNode.next = listHead;
//     }
//     listHead = newNode;
//       listHead = newNode; 
//   }
//   return listHead;
// }
describe('2. Add Two Numbers', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded([2,4,3], [5,6,4])).toEqual(makeList2([7,0,8]));
    });

    it('Test Case 2', () => {

        expect(funcLoaded([0],[0])).toEqual(makeList2([0]));
    });
    it('Test Case 3', () => {

        expect(funcLoaded([9,9,9,9,9,9,9], [9,9,9,9])).toEqual(makeList2([8,9,9,9,0,0,0,1]));
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});