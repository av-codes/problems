const funcloaded = require('./2127');

describe('2127. Maximum Employees to Be Invited to a Meeting', function () {
    beforeEach(()=>{
        console.log('=======================================================')
    });
    it('Test Case 1', () => {
        expect(funcloaded([2,2,1,2])).toBe(3);
    });

    it('Test Case 2', () => {
        expect(funcloaded([1,2,0])).toBe(3);
    });

    it('Test Case 3', () => {

        expect(funcloaded([3,0,1,4,1])).toBe(4);
    });
    afterAll(()=>{
        console.log('=====================================================')
    });
});