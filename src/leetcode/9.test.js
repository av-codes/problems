const funcloaded = require('./9');

describe('9. Palindrome Number', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcloaded(121)).toBe(true);
    });

    it('Test Case 2', () => {

        expect(funcloaded(-121)).toBe(false);
    });

    it('Test Case 3', () => {

        expect(funcloaded(10)).toBe(false);
    });

    it('Test Case 4', () => {

        expect(funcloaded(11)).toBe(true);
    });
    it('Test Case 4', () => {

        expect(funcloaded(3)).toBe(true);
    });
    afterEach(()=>{
       console.log('=====================================================')
    });
});