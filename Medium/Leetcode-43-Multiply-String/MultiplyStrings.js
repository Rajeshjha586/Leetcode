var multiply = function (num1, num2) {
  if (num1 == "0" || num2 == "0") return "0";

  var l1 = num1.length;
  var l2 = num2.length;
  var res = new Array(l1 + l2).fill(0);

  var i = l2 - 1;
  var pf = 0;
  while (i >= 0) {
    var ival = num2.charAt(i) - "0";
    i--;

    var j = l1 - 1;
    var k = res.length - 1 - pf;
    var carry = 0;
    while (j >= 0 || carry != 0) {
      var jval = j >= 0 ? num1.charAt(j) - "0" : 0;
      j--;

      var prod = ival * jval + carry + res[k];
      res[k] = prod % 10;
      carry = Math.floor(prod / 10);
      k--;
    }
    pf++;
  }

  var str = "";
  var flag = false;
  for (var val of res) {
    if (val == 0 && flag == false) {
      continue;
    } else {
      str += val;
      flag = true;
    }
  }

  return str;
};

console.log("----------- ", multiply("123", "456"));
