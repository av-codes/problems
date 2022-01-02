function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
  const asteroidsAsm: number[] = asteroids.sort((n1, n2) => {
    return n1 - n2;
  });

  let result: boolean[] = [];
  for (let asm of asteroidsAsm) {
    if (mass >= asm) {
      mass += asm;
      result.push(true);
    } else {
      result.push(false);
      break;
    }
  };
  return checkFalseExistsArray(result);
}
function checkFalseExistsArray(array){
  
  for(var k=0; k<array.length; k++){
      if(!array[k]){
          return false;
         
      }
  }
  return true;
  }

module.exports = asteroidsDestroyed;
