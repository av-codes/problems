const funcloaded = require('./66');

describe('66. Plus One', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcloaded([1,2,3])).toStrictEqual([1,2,4]);
    });

    it('Test Case 2', () => {

        expect(funcloaded([4,3,2,1])).toStrictEqual([4,3,2,2]);
    });

    it('Test Case 3', () => {

        expect(funcloaded([9])).toStrictEqual([1,0]);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});