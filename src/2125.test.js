const funcloaded = require('./2125');

describe('2125. Number of Laser Beams in a Bank', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcloaded(["011001","000000","010100","001000"])).toBe(8);
    });

    it('Test Case 2', () => {

        expect(funcloaded(["000","111","000"])).toBe(0);
    });
    afterAll(()=>{
        console.log('=====================================================')
    });
});