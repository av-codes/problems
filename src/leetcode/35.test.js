const funcloaded = require('./35');

describe('35. Search Insert Position', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcloaded([1,3,5,6], 5)).toBe(2);
    });

    it('Test Case 2', () => {

        expect(funcloaded([1,3,5,6], 2)).toBe(1);
    });

    it('Test Case 3', () => {

        expect(funcloaded([1,3,5,6], 7)).toBe(4);
    });
    it('Test Case 4', () => {

        expect(funcloaded([1,3,5,6], 0)).toBe(0);
    });
    it('Test Case 4', () => {

        expect(funcloaded([1,3],4)).toBe(2);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});