var merge = function (nums1, m, nums2, n) {
  var p1 = m - 1;
  var p2 = n - 1;
  var i = m + n - 1;

  // while(p2 >=0 ) {
  //     if(p1>=0 && nums1[p1] > nums2[p2]) {
  //         nums1[i--] = nums1[p1--];
  //     } else {
  //         nums1[i--] = nums2[p2--];
  //     }
  // }

  while (p2 >= 0) {
    nums1[i--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
  }
};

var nums1 = [1, 2, 3, 0, 0, 0];
var m = 3;
var nums2 = [2, 5, 6];
var n = 3;

merge(nums1, m, nums2, n);
console.log("----------", nums1);
