/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
make negative(0.12); // return -0.12
*/


//solution 01

function ConvertToNegative(a){
switch(a)
case a>0 :
return -a
break;

case a<0 :
return -a
break;
case a==0 :
return a
break;

default 'happy coding'

}





//solution 02
function makeNegative(num) {
   return num<0? num: -num
}
