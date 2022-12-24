const funcLoaded = require('./5960');

describe('5960. Capitalize the Title', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded("capiTalIze tHe titLe")).toBe("Capitalize The Title");
    });

    it('Test Case 2', () => {

        expect(funcLoaded("First leTTeR of EACH Word")).toBe("First Letter of Each Word");
    });

    it('Test Case 3', () => {

        expect(funcLoaded("i lOve leetcode")).toBe("i Love Leetcode");
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});