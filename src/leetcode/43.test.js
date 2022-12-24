const funcLoaded = require('./43');

describe('43. Multiply Strings', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded("2", "3")).toBe("6");
    });

    it('Test Case 2', () => {

        expect(funcLoaded("123", "456")).toBe("56088");
    });

    afterEach(()=>{
       console.log('=====================================================')
    });
});