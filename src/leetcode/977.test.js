const funcLoaded = require('./977');

describe('977. Squares of a Sorted Array', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded([-4,-1,0,3,10])).toStrictEqual([0,1,9,16,100]);
    });

    it('Test Case 2', () => {

        expect(funcLoaded([-7,-3,2,3,11])).toStrictEqual([4,9,9,49,121]);
    });

    // it('Test Case 3', () => {

    //     expect(funcLoaded(0)).toStrictEqual(0);
    // });

    afterEach(()=>{
       console.log('=====================================================')
    });
});