var addStrings = function (num1, num2) {
  var res = "";

  var i = num1.length - 1;
  var j = num2.length - 1;

  var carry = 0;

  while (i >= 0 || j >= 0) {
    var ival = i >= 0 ? num1[i] - "0" : 0;
    var jval = j >= 0 ? num2[j] - "0" : 0;

    var sum = ival + jval + carry;
    res += sum % 10;
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }
  if (carry != 0) {
    res += carry;
  }
  return res.split("").reverse().join("");
};

//more TimeCompexity
var addStrings1 = function (num1, num2) {
  let carry = 0;
  let ans = "";
  let reverse = (str) => [...str].reverse().join("");
  num1 = reverse(num1);
  num2 = reverse(num2);
  for (let i = 0; i <= Math.max(num1.length, num2.length) - 1; i++) {
    // let c = num1.charAt(i) - "0";
    // let d = num2.charAt(i) - "0";
    var ival = num1 >= 0 ? num1.charAt(i) - "0" : 0;
    var jval = num2 >= 0 ? num2.charAt(i) - "0" : 0;
    var sum = ival + jval + carry;
    ans += sum % 10;
    carry = Math.trunc(sum / 10);
  }
  ans += carry > 0 ? carry : "";
  return reverse(ans);
};

var addStrings2 = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;

  let sum = 0,
    carry = 0,
    ans = "";

  while (i >= 0 || j >= 0) {
    sum = carry;
    if (i >= 0) sum += +num1.charAt(i--);
    if (j >= 0) sum += +num2.charAt(j--);
    ans = (sum % 10) + ans;
    carry = ~~(sum / 10);
  }

  if (carry) ans = carry + ans;

  return ans;
};

const addStrings3 = (num1, num2) => {
  if (num2.length > num1.length) return addStrings(num2, num1);

  let i = num1.length - 1;
  let j = num2.length - 1;
  let out = "";
  let carry = 0;

  while (i >= 0) {
    const digit1 = num1.charAt(i) - "0";
    const digit2 = j < 0 ? 0 : num2.charAt(j) - "0";

    let sum = carry + digit1 + digit2;
    carry = 0;
    if (sum > 9) {
      carry = 1;
      sum %= 10;
    }

    out = `${sum.toString()}${out}`;

    i -= 1;
    j -= 1;
  }

  if (carry > 0) out = `${carry.toString()}${out}`;

  return out;
};

var res = addStrings1("11", "123");
console.log("---------", res);
