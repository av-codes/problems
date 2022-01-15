let seatingIndex: number[] = [];
let cutLength = 0;
function maximumInvitations(favorite: number[]): number {

  let startInsert = favorite[0];
  seatingIndex.push(startInsert);
//   favorite.splice(0, 1);
//   cutLength += 1;
  linkEmp(favorite, startInsert, startInsert);
  return seatingIndex.length;
}
function linkEmp(
  curFavorite: number[],
  lastInsert: number,
  lastFav: number
): number {
  let nextEmp = curFavorite.indexOf(lastInsert);
  if (nextEmp != -1) {
    curFavorite.splice(nextEmp, 1);
    nextEmp += cutLength;
    cutLength += 1;
    if (!seatingIndex.includes(nextEmp)) {
      seatingIndex.push(nextEmp);
      linkEmp(curFavorite, nextEmp, lastInsert);
    } 
    else{
        return 0;
    }
  } else {
      if(curFavorite.indexOf(lastInsert)>-1){
        linkEmp(curFavorite, lastFav, lastInsert);
      }
      else {
        linkEmp(curFavorite, lastInsert, lastFav);
      }
    
  }
}
module.exports = maximumInvitations;
