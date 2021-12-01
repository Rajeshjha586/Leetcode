import java.util.*;

public class AddString {
  public static String add_String(String num1, String num2) {
    String res = "";

    int i = num1.length() - 1;
    int j = num2.length() - 1;

    int carry = 0;
    while(i>=0 || j>=0 || carry!=0) {
      int ival = i>=0 ? num1.charAt(i) - '0' : 0; 
      int jval = j>=0 ? num2.charAt(j) - '0' : 0;

      int sum = ival + jval + carry;
      res = (sum % 10) + res;
      carry =  sum / 10;

      i--;
      j--; 
    }
    return res;
  }
  public static void solve () {
    // String result = add_String("11", "123");
    String result = add_String("110", "123");
    System.out.println("---------Result-----" + result);
  }
  public static void main(String[] args) {
    solve();
  }
}