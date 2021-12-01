import java.util.*;

public class MaxChunkToSorted {
  public static int maxChunksToSorted(int[] arr) {
        int n=arr.length;
        int ans=0;
        int cmax=0;
        for(int i=0;i<n;i++){
            cmax=Math.max(cmax,arr[i]);
            if(cmax==i){
                ans++;
            }
        }
        return ans;
    }
  public static void solve() {
    int[] arr = {1, 0, 2, 3, 4};
    System.out.println("------------" + maxChunksToSorted(arr));
  }
  public static void main(String[] args) {
    solve();
  }
}