const funcLoaded = require('./557');

describe('557. Reverse Words in a String III', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        let s = "Let's take LeetCode contest"
        let input = [s];
        let res=funcLoaded.apply(null,input);

        expect(res).toStrictEqual("s'teL ekat edoCteeL tsetnoc");
    });

    it('Test Case 2', () => {

        let s = "God Ding"
        let input = [s];
        let res=funcLoaded.apply(null,input);

        expect(res).toStrictEqual("doG gniD");
    });


    afterEach(()=>{
       console.log('=====================================================')
    });
});