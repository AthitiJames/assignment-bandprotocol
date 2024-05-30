/**
 *
 * @param n
 * @param k
 * @param chickens
 * @return max of Superman's Chicken Rescue
 */

export default function findChickenRescue(
  n: number,
  k: number,
  chickens: number[]
): number {
  // Check that n, k has a value that is greater than what we specified
  if (n < 1 || n > 1000000 || k < 1 || k > 1000000) {
    // throw error
    throw new Error(
      "The values of n and k must be between 1 and 1,000,000. Please provide valid input."
    );
  }

  // check that the value of the chicken position is not less than 1 and greater than 1000000000
  if (chickens.find((chicken) => chicken < 1 || chicken > 1000000000)) {
    // throw error
    throw new Error(
      "All chicken position must be between 1 and 1,000,000,000. Please provide valid input."
    );
  }

  // sort position of chicken by asc
  chickens.sort((a, b) => a - b);

  // construct maxChickenProtect For collecting the maximum number of chickens at Superman's Chicken Rescue
  let maxChickenProtect: number = 0;

  // loop all index of input chickens except the last one
  for (let i = 0; i < n - 1; i++) {
    // construct chickenCount for count checket at Superman's Chicken Rescue
    let chickenCount = 1;

    // loop all index after current index and check the current chicken position minus the next chicken position is greater than or equal to k?
    for (
      let index = i + 1;
      index < n && chickens[index] - chickens[i] <= k;
      index++
    ) {
      // if yes, add chickenCount by 1.
      chickenCount++;
    }

    //after the loop, check chicken count is greater than the max chicken protect
    if (chickenCount > maxChickenProtect) {
      // set new max chicken protect
      maxChickenProtect = chickenCount;
    }
  }

  // return max Superman's Chicken Rescue
  return maxChickenProtect;
}
