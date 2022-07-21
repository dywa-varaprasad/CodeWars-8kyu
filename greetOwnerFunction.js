//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//Use conditionals to return the proper message:

// return name equals owner--->'Hello boss'
//otherwise---->'Hello guest'

//My solution 
function greet (name, owner) {
  if(name === owner) return 'Hello boss' 
 else return 'Hello guest';
}



//best Solution by using terenary Operator
function greet (name, owner) {
  return name === owner ? 'Hello boss' :  'Hello guest';
}
