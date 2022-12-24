const funcLoaded = require('./278');

describe('278. First Bad Version', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded(5,4)).toBe(4);
    });

    it('Test Case 2', () => {
        expect(funcLoaded(1,1)).toBe(1);
    });

    // it('Test Case 3', () => {
    //     expect(funcLoaded(0)).toBe(0);
    // });

    afterEach(()=>{
       console.log('=====================================================')
    });
});