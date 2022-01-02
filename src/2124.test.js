const funcloaded = require('./2124');

describe("2124. Check if All A's Appears Before All B's", function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcloaded("aaabbb")).toBe(true);
    });

    it('Test Case 2', () => {

        expect(funcloaded("abab")).toBe(false);
    });
    it('Test Case 3', () => {

        expect(funcloaded("bbb")).toBe(true);
    });
    afterAll(()=>{
        console.log('=====================================================')
    });
});