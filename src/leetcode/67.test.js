const funcloaded = require('./67');

describe('67. Add Binary', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcloaded("11", "1")).toStrictEqual("100");
    });

    it('Test Case 2', () => {

        expect(funcloaded("1010", "1011")).toStrictEqual("10101");
    });

    it('Test Case 3', () => {

        expect(funcloaded([9])).toStrictEqual([1,0]);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});