const funcLoaded = require('./167');

describe('167. Two Sum II - Input Array Is Sorted', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded([2,7,11,15], 9)).toStrictEqual([1,2]);
    });

    it('Test Case 2', () => {

        expect(funcLoaded([2,3,4], 6)).toStrictEqual([1,3]);
    });

    it('Test Case 3', () => {

        expect(funcLoaded([-1,0], -1)).toStrictEqual([1,2]);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});