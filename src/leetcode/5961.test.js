const funcloaded = require('./5961');

describe('5961. Maximum Twin Sum of a Linked List', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcloaded([5,4,2,1])).toBe(6);
    });

    it('Test Case 2', () => {

        expect(funcloaded([4,2,2,3])).toBe(7);
    });

    it('Test Case 3', () => {

        expect(funcloaded([1,100000])).toBe(100001);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});