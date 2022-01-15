const funcloaded = require('./704');

describe('704. Binary Search', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcloaded([-1,0,3,5,9,12],9)).toBe(4);
    });

    it('Test Case 2', () => {

        expect(funcloaded([-1,0,3,5,9,12],2)).toBe(-1);
    });

    it('Test Case 3', () => {

        expect(funcloaded([2,5],0)).toBe(-1);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});