/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

let bad = 0;

function setBad(input: number) {
  bad = input;
}

function isBadVersion(version: number): boolean {
  return version >= bad ? true : false;
}

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    // for (let i: number = 1; i < n; i++) {
    //   if (isBadVersion(i)) {
    //     return i;
    //   }
    // }
    // return n;
    let left:number = 1;
    let right:number = n;
    while (left < right) {
        let mid:number =Math.floor( left + (right - left) / 2);
        if (isBadVersion(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
  };
};
var tester = (size, failure) => {
  setBad(failure);
  return solution(isBadVersion)(size);
};

module.exports = tester;
