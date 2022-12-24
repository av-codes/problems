const funcLoaded = require('./2126');

describe('2126. Destroying Asteroids', function () {
    beforeEach(()=>{
        console.log('======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded(10, [3, 9, 19, 5, 21])).toBe(true);
    });

    it('Test Case 2', () => {

        expect(funcLoaded(5, [4, 9, 23, 4])).toBe(false);
    });
    afterAll(()=>{
        console.log('=====================================================')
    });
});