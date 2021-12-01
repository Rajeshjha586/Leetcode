import java.util.*;

public class MultiplyStrings {
  public static String multiply_String(String num1, String num2) {
    if(num1.equals("0") || num2.equals("0")) return "0";
    int l1 = num1.length();
    int l2 = num2.length();
    int[] res = new int[l1 + l2];

    int i = l2 - 1;
    int pf = 0;
    while(i>=0) {
      int ival = num2.charAt(i) - '0';
      i--;

      int j = l1 - 1;
      int k = res.length - 1 - pf;
      int carry = 0;
      while(j>=0 || carry!=0) {
        int jval = j>=0 ? num1.charAt(j) - '0' : 0;
        j--;
        int prod = ival * jval + carry + res[k];
        res[k] = prod % 10;
        carry = prod / 10;
        k--;
      }
      pf++;
    }

    String str = "";
    boolean flag = false;
    for(int val : res) {
      if(val == 0 && flag == false) {
        continue;
      } else {
        str += val;
        flag = true;
      }
    }
    return str;
  }
  public static void solve() {
    String num1 = "120";
    String num2 = "456";
    String ans = multiply_String(num1, num2);
    System.out.println("-----------" + ans);
  }
  public static void main(String[] args) {
    solve();
  }
}