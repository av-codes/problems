const funcLoaded = require('./0');

describe('0. dfdfdfdfd', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    xit('Test Case 1', () => {
        let s = ["h","e","l","l","o"]
        let input = [s];
        funcLoaded.apply(null,input);

        expect(s).toStrictEqual(["o","l","l","e","h"]);
    });

    xit('Test Case 2', () => {

        let s = ["H","a","n","n","a","h"]
        let input = [s];
        funcLoaded.apply(null,input);

        expect(s).toStrictEqual(["h","a","n","n","a","H"]);
    });


    xit('Test Case 3', () => {

        let s = ["H","a","n","n","a","h"]
        let input = [s];
        funcLoaded.apply(null,input);

        expect(s).toStrictEqual(["h","a","n","n","a","H"]);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});