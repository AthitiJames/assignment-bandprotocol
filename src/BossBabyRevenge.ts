/**
 *
 * @param data
 * @return Good boy or Bad boy
 */

export default function checkBossBaby(data: string): string {
  // trim whitespace and set to uppercase and split any word
  const shots: string[] = data.trim().toUpperCase().split("");

  // check if there are shot ​​other than R and S.
  if (shots.findIndex((shot: string) => shot !== "R" && shot !== "S")) {
    // throw error
    throw new Error(
      'All shot must be either "R" or "S". Please provide valid input.'
    );
  }
  // checks if the first shot in the array is R
  if (shots[0] === "R") {
    // return Bad boy
    return "Bad boy";
  }

  // construct kidShots for count shots from kids
  let kidShots: number = 0;

  // loop all index of shots
  for (let i = 0; i < shots.length; i++) {
    // construct a shot of the index
    const shot: string = shots[i];

    // check if shot is S
    if (shot == "S") {
      // add more kidShots
      kidShots++;

      // if false, it means that shot R will check value of kidShots is not 0 then minus 1 from kidShots
    } else if (kidShots != 0) kidShots--;
  }

  // return Good boy if kidShots is 0 but if not, will return Bad boy
  return kidShots === 0 ? "Good boy" : "Bad boy";
}
