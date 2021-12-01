var addToArrayForm = function (num, k) {
  var i = num.length - 1;
  var carry = k;
  var res = [];

  while (i >= 0 || carry > 0) {
    if (i >= 0) {
      var rem = num[i] + carry;
      res.push(rem % 10);
      carry = Math.trunc(rem / 10);
    } else {
      res.push(carry % 10);
      carry = Math.trunc(carry / 10);
    }
    i--;
  }
  return res.reverse();
};

var num = [1, 2, 0, 0];
var k = 34;
var ans = addToArrayForm(num, k);
console.log("-----------", ans);
