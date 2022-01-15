const funcloaded = require('./5960');

describe('5960. Capitalize the Title', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcloaded("capiTalIze tHe titLe")).toBe("Capitalize The Title");
    });

    it('Test Case 2', () => {

        expect(funcloaded("First leTTeR of EACH Word")).toBe("First Letter of Each Word");
    });

    it('Test Case 3', () => {

        expect(funcloaded("i lOve leetcode")).toBe("i Love Leetcode");
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});