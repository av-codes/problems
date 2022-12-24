const funcLoaded = require('./9');

describe('9. Palindrome Number', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded(121)).toBe(true);
    });

    it('Test Case 2', () => {

        expect(funcLoaded(-121)).toBe(false);
    });

    it('Test Case 3', () => {

        expect(funcLoaded(10)).toBe(false);
    });

    it('Test Case 4', () => {

        expect(funcLoaded(11)).toBe(true);
    });
    it('Test Case 4', () => {

        expect(funcLoaded(3)).toBe(true);
    });
    afterEach(()=>{
       console.log('=====================================================')
    });
});