import java.util.*;

public class AddToArrayForm {
  public static List<Integer> addToArrayForm(int[] num, int k) {
    int i = num.length - 1;
    int carry = k;
    List<Integer> ans = new ArrayList<>();

    while(i>=0 || carry>0) {
      if(i>=0) {
        int res = num[i] + carry;
        ans.add(0, res % 10);
        carry = res / 10;
      } else {
        ans.add(0, carry % 10);
        carry /= 10;
      }
      i--;
    }
    return ans;
  }
  public static void solve() {
    int[] num = {9, 9, 9, 9};
    int k = 1;
    List<Integer> ans = addToArrayForm(num, k);
    System.out.println("--------------"+ ans);
  }
  public static void main(String[] args) {
    solve();
  }
}