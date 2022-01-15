const funcloaded = require('./557');

describe('557. Reverse Words in a String III', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        let s = "Let's take LeetCode contest"
        let input = [s];
        let res=funcloaded.apply(null,input);

        expect(res).toStrictEqual("s'teL ekat edoCteeL tsetnoc");
    });

    it('Test Case 2', () => {

        let s = "God Ding"
        let input = [s];
        let res=funcloaded.apply(null,input);

        expect(res).toStrictEqual("doG gniD");
    });


    it('Test Case 3', () => {

        let s = ["H","a","n","n","a","h"]
        let input = [s];
        funcloaded.apply(null,input);

        expect(s).toStrictEqual(["h","a","n","n","a","H"]);
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});