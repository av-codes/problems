const f5961 = require('./5961');

const { pairSum, makeList5961, ListNode5961 } = f5961

const funcLoaded = pairSum;
// class ListNode5961 {
//     val;
//     next;
//     constructor(val, next) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }

describe('5961. Maximum Twin Sum of a Linked List', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded(makeList5961([5, 4, 2, 1]))).toBe(6);
    });

    it('Test Case 2', () => {
        expect(funcLoaded(makeList5961([4, 2, 2, 3]))).toBe(7);
    });

    it('Test Case 3', () => {
        expect(funcLoaded(makeList5961([1, 100000]))).toBe(100001);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});