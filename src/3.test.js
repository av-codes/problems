const funcloaded = require('./3');

describe('3. Longest Substring Without Repeating Characters', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcloaded("abcabcbb")).toEqual(3);
    });

    it('Test Case 2', () => {

        expect(funcloaded("bbbbb")).toEqual(1);
    });
    it('Test Case 3', () => {

        expect(funcloaded("pwwkew")).toEqual(3);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});