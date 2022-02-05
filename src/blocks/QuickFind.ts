// # UnionFind class
class QuickFind {
  root: number[] = null;
  constructor(size: number) {
    this.root = Array.from({ length: size }, (x, i) => i);
  }
  find(i: number): number {
    return this.root[i];
  }
  union(i: number, j: number) {
    let x: number = this.find(i);
    let y: number = this.find(j);
    if (x != y) {
      for (let a in Array.from({ length: this.root.length }, (x, i) => i)) {
        if (this.root[a] == y) {
          this.root[a] == x ;
        }
      }
    }
  }
  connected(i: number, j: number) {
    return this.find(i) == this.find(j);
  }
}

let qF = new QuickFind(10);

qF.union(1, 2);
qF.union(2, 5);
qF.union(5, 6);
qF.union(6, 7);
qF.union(3, 8);
qF.union(8, 9);

console.log(qF.connected(1, 5));
console.log(qF.connected(5, 7));
console.log(qF.connected(4, 9));

qF.union(9, 4);

console.log(qF.connected(4, 9));
console.log(qF.root);
