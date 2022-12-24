const funcLoaded = require('./1');

describe('1. Two Sum', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded([2,7,11,15],9)).toStrictEqual([0,1]);
    });

    it('Test Case 2', () => {

        expect(funcLoaded([3,2,4],6)).toStrictEqual([1,2]);
    });
    it('Test Case 3', () => {

        expect(funcLoaded([3,3],6)).toStrictEqual([0,1]);
    });

    afterAll(()=>{
        console.log('=====================================================')
    });
});