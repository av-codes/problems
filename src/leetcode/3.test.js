const funcLoaded = require('./3');

describe('3. Longest Substring Without Repeating Characters', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded("abcabcbb")).toEqual(3);
    });

    it('Test Case 2', () => {

        expect(funcLoaded("bbbbb")).toEqual(1);
    });
    it('Test Case 3', () => {

        expect(funcLoaded("pwwkew")).toEqual(3);
    });

    it('Test Case 4', () => {

        expect(funcLoaded("aab")).toEqual(2);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});