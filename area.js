var length = prompt("Enter length of outer box");
var width = prompt("Enter width of outer box");

var len1 = 0;
var wid1 =0;

// while (len1 > length || wid1 > width) 
// {
//   alert("space is not available re-enter the length and width");
//   var len1 = prompt("Enter the length");
//   var wid1 = prompt("Enter the width");
// }

var i=0;
var rem_len = length - len1;
var rem_wid = width - wid1;
while (rem_len > 0 || rem_wid > 0) {
    
  alert("remainin length : " + rem_len + "  remaining width : " + rem_wid);
  var len3 = prompt("Enter the length");
  var wid3 = prompt("Enter the width");
  while (len3 > rem_len || wid3 > rem_wid) {
    alert("Incorrect re-enter");
    var len3 = prompt("Enter the length");
    var wid3 = prompt("Enter the width");
  }
  rem_len = rem_len - len3;
  rem_wid = rem_wid - wid3;
  i++;
}

alert("Box is filled");
alert("Total boxes are  "+(i+1));


