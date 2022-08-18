/*
Your function takes two arguments:
current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son 
(or in how many years he will be twice as old).
*/

//Best Solution 

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // dadYearsOld must be sonYearsOld * 2
  // dadYearsOld when son is 0 is dadYearsOld - sonYearsOld
  let difference = dadYearsOld - sonYearsOld;
//grabbing the difference 
  return Math.abs(dadYearsOld - difference*2);
}
 
