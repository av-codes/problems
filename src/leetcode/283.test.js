const funcLoaded = require('./283');

describe('283. Move Zeroes', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded([0,1,0,3,12])).toStrictEqual([1,3,12,0,0]);
    });

    it('Test Case 2', () => {

        expect(funcLoaded([0])).toStrictEqual([0]);
    });

    it('Test Case 3', () => {

        expect(funcLoaded(
            [0,0,1])).toStrictEqual([1,0,0]);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});