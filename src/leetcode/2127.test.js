const funcLoaded = require('./2127');

describe('2127. Maximum Employees to Be Invited to a Meeting', function () {
    beforeEach(()=>{
        console.log('=======================================================')
    });
    it('Test Case 1', () => {
        expect(funcLoaded([2,2,1,2])).toBe(3);
    });

    it('Test Case 2', () => {
        expect(funcLoaded([1,2,0])).toBe(3);
    });

    it('Test Case 3', () => {

        expect(funcLoaded([3,0,1,4,1])).toBe(4);
    });
    it('Test Case 4', () => {

        expect(funcLoaded([1, 0, 0, 2, 1, 4, 7, 8, 9, 6, 7, 10, 8])).toBe(6);
    });
    afterAll(()=>{
        console.log('=====================================================')
    });
});