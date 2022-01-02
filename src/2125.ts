function numberOfBeams(bank: string[]): number {
  let counter = 0;
  for (let i = 0; i < bank.length - 1; i++) {
    let b = bank[i];
    let nextRow = i+1;
    let foundPair = false;
    for (let c = 0; c < b.length; c++) {
      if (b[c] == "1") {
        for (let j = nextRow; j < bank.length; j++) {
          let bn = bank[j];              
          for (let cn = 0; cn < bn.length; cn++) {
            if (bn[cn] == "1") {  
              counter++;
              foundPair = true;
            }
          }
          if (foundPair == true) {
              nextRow = j ;               
              break;
              
            }
        }
        
      }
      
    }
    if(nextRow < bank.length){
        i=nextRow-1;
        
    }
  }
  return counter;
}
module.exports = numberOfBeams;