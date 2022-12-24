const funcLoaded = require('./2124');

describe("2124. Check if All A's Appears Before All B's", function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded("aaabbb")).toBe(true);
    });

    it('Test Case 2', () => {

        expect(funcLoaded("abab")).toBe(false);
    });
    it('Test Case 3', () => {

        expect(funcLoaded("bbb")).toBe(true);
    });
    afterAll(()=>{
        console.log('=====================================================')
    });
});