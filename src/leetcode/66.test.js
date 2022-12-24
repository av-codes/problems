const funcLoaded = require('./66');

describe('66. Plus One', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded([1,2,3])).toStrictEqual([1,2,4]);
    });

    it('Test Case 2', () => {

        expect(funcLoaded([4,3,2,1])).toStrictEqual([4,3,2,2]);
    });

    it('Test Case 3', () => {

        expect(funcLoaded([9])).toStrictEqual([1,0]);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});