const funcloaded = require('./12');

describe('12. Integer to Roman', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        let s = [3]
        let input = [s];
        let res = funcloaded.apply(null,input);

        expect(res).toBe("III");
    });

    it('Test Case 2', () => {

        let s = [58]
        let input = [s];
        let res = funcloaded.apply(null,input);

        expect(res).toBe("LVIII");
    });


    it('Test Case 3', () => {

        let s = [1994]
        let input = [s];
        let res = funcloaded.apply(null,input);

        expect(res).toBe("MCMXCIV");
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});