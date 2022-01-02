let seatingIndex: number[] = [];
let cutLength = 0;
function maximumInvitations(favorite: number[]): number {
  seatingIndex.push(favorite[0]);
  linkEmp(favorite, favorite[0], favorite[0]);

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
    linkEmp(curFavorite, lastFav, lastFav);
  }
}
module.exports = maximumInvitations;
