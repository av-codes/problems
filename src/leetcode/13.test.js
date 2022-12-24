const funcLoaded = require('./13');

describe('13. Roman to Integer', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        let s = "III";
        let input = [s];
        let res = funcLoaded.apply(null,input);

        expect(res).toBe(3);
    });

    it('Test Case 2', () => {

        let s = "LVIII";
        let input = [s];
        let res = funcLoaded.apply(null,input);

        expect(res).toBe(58);
    });


    it('Test Case 3', () => {

        let s = "MCMXCIV";
        let input = [s];
        let res = funcLoaded.apply(null,input);

        expect(res).toBe(1994);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});