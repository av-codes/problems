const funcLoaded = require('./67');

describe('67. Add Binary', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded("11", "1")).toStrictEqual("100");
    });

    it('Test Case 2', () => {

        expect(funcLoaded("1010", "1011")).toStrictEqual("10101");
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});