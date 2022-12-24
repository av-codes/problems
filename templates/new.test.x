const funcLoaded = require('./000');

describe('XXX', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        let s = ["h","e","l","l","o"]
        let input = [s];
        let res = funcLoaded.apply(null,input);

        expect(res).toStrictEqual(["o","l","l","e","h"]);
    });

    it('Test Case 2', () => {

        let s = ["H","a","n","n","a","h"]
        let input = [s];
        let res = funcLoaded.apply(null,input);

        expect(res).toStrictEqual(["h","a","n","n","a","H"]);
    });


    it('Test Case 3', () => {

        let s = ["H","a","n","n","a","h"]
        let input = [s];
        let res = funcLoaded.apply(null,input);

        expect(res).toStrictEqual(["h","a","n","n","a","H"]);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});