const funcLoaded = require('./5962');

describe('5962. Longest Palindrome by Concatenating Two Letter Words', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded(["lc","cl","gg"])).toBe(6);
    });

    it('Test Case 2', () => {

        expect(funcLoaded(["ab","ty","yt","lc","cl","ab"])).toBe(8);
    });

    it('Test Case 3', () => {

        expect(funcLoaded(["cc","ll","xx"])).toBe(2);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});