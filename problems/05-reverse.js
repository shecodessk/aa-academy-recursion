/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

const reverse = (string) => {
  let newSt = "";
      if(string.length < 0)return;

      else if( string.length === 0){
        newSt;
        //return newSt;
      }
      else if(string.length === 1){
        newSt += string
        //return newSt
      }
      else{
        newSt += string.slice(-1) + reverse(string.slice(0, -1));
      }
   return newSt
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
