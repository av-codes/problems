const funcLoaded = require('./189');

describe('189. Rotate Array', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded([1,2,3,4,5,6,7], 3)).toStrictEqual([5,6,7,1,2,3,4]);
    });

    it('Test Case 2', () => {

        expect(funcLoaded([-1,-100,3,99], 2)).toStrictEqual([3,99,-1,-100]);
    });

    // it('Test Case 3', () => {

    //     expect(funcLoaded(0)).toBe(0);
    // });

    afterEach(()=>{
       console.log('=====================================================')
    });
});