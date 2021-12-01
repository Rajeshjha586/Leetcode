import java.util.*;
public class MaxChunkToSorted {
  public static int maxChunksToSorted(int[] arr) {
      int[] rmin = new int[arr.length+1];
      rmin[arr.length] = Integer.MAX_VALUE;
      
      for(int i=arr.length-1; i>=0; i--) {
          rmin[i] = Math.min(arr[i], rmin[i+1]);
      }
      
      int lmax = Integer.MIN_VALUE;
      int count = 0;
      
      for(int i=0; i<arr.length; i++) {
          lmax = Math.max(arr[i], lmax);
          if(lmax <= rmin[i+1]) {
              count++;
          }
      }
      
      return count;
  }
  public static void solve() {
    int[] arr = {2,1,3,4,4};
    System.out.println("---------------" + maxChunksToSorted(arr));
  }
  public static void main(String[] args) {
    solve();
  }
}