interface Employee {
  favorite: number;
  visited: boolean;
}

function maximumInvitations(favorite: number[]): number {
  // create an array of employees
  const employees: Employee[] = favorite.map((fav, i) => ({
    favorite: fav,
    visited: false,
  }));

  // initialize a variable to store the maximum number of employees invited
  let maxInvited = 0;

  // perform a DFS to find the size of the largest connected component
  for (let i = 0; i < favorite.length; i++) {
    // if the current employee has not been visited
    if (!employees[i].visited) {
      // perform a DFS to find the size of the current connected component
      const size = findConnectedComponentSize(i);
      // update the maximum number of employees invited if necessary
      maxInvited = Math.max(maxInvited, size);
    }
  }

  // return the maximum number of employees invited
  return maxInvited;

  function findConnectedComponentSize(i: number): number {
    // mark the current employee as visited
    employees[i].visited = true;

    // if the current employee's favorite has not been visited and is within the bounds of the employees array
    if (
      !employees[employees[i].favorite].visited &&
      employees[i].favorite >= 0 &&
      employees[i].favorite < employees.length
    ) {
      // recursively find the size of the current employee's favorite's connected component
      return findConnectedComponentSize(employees[i].favorite) + 1;
    }

    // return 1 for the current employee
    return 1;
  }

}

module.exports = maximumInvitations;
