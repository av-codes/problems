function permute(permutation:number []):number [] {
    let length:number = permutation.length;
    let result:any [] = [permutation.slice()];
    let c:number [] = new Array(length).fill(0);
    let i:number = 1, k:number, p:number;  
    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i];
        p = permutation[i];
        permutation[i] = permutation[k];
        permutation[k] = p;
        ++c[i];
        i = 1;
        result.push(permutation.slice());
      } else {
        c[i] = 0;
        ++i;
      }
    }
    return result;
  }
  
  console.log(permute([1, 2, 3]));