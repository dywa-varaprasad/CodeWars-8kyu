/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
*/


//my solution

function sumStr(a,b) {
  let total= Number(a)+Number(b);
  return String(total)
  
}
